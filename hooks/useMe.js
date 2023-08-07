import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { logUserOut, isLoggedInVar } from "../apollo";
import { useEffect } from "react";

const ME_QUERY = gql`
  query me {
    me {
      id
      username
      avatar
    }
  }
`;

export const useMe = () => {
  const hasToken = useReactiveVar(isLoggedInVar);

  const { data } = useQuery(ME_QUERY, { skip: !hasToken });

  useEffect(() => {
    if (data?.me === null) {
      logUserOut();
    }
  }, [data]);
  return { data };
};
