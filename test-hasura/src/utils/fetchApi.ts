import { useQuery } from "react-query";
// import { IgraphqlQuery, IOptions } from "../interfaces";

const endpoint: string = process.env.NEXT_PUBLIC_GQL_END_POINT

const headers = {
  "content-type": "application/json",
  "x-hasura-admin-secret": process.env.NEXT_PUBLIC_X_HASURA_ADMIN_SECRET,
  "X-Hasura-Role": process.env.NEXT_PUBLIC_X_HASURA_ROLE,
}

const fetchApi = (gqlQuery: any) => {
  const options = {
    "method": "POST",
    "headers": headers,
    "body": JSON.stringify(gqlQuery)
  };
  const { isLoading, error, data } = useQuery("data", () =>

    fetch(endpoint, options)
      .then((res) => res.json())
      .then((res) => res.data)
  );

  console.log(isLoading, error, data)
}

export default fetchApi