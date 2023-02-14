import { IgraphqlQuery, IOptions } from "../interfaces";

const endpoint: any = "https://dotngyzwyaabhmvefiyh.hasura.eu-central-1.nhost.run/v1/graphql"

const headers = {
  "content-type": "application/json",
  "x-hasura-admin-secret": "5badaf368810246c63cded78320c4aeb",
  "X-Hasura-Role": "admin",
}

const fetchApi = async(gqlQuery: IgraphqlQuery) => {
    const options: IOptions = {
        "method": "POST",
        "headers": headers,
        "body": JSON.stringify(gqlQuery)
    };
    const response = await fetch(endpoint, options);
    const data = await response.json();
    return data
}

export default fetchApi