import  nhost  from '../utils/nhost'
import { IOptions, IgraphqlQuery } from '../interfaces'

const endpoint: any = "https://occkhlyrkilpbdqnlvph.hasura.ap-south-1.nhost.run/v1/graphql"

const headers = {
  "content-type": "application/json",
  "x-hasura-admin-secret": "a778d168e331d5da15cc8ae871fd8a23",
  "X-Hasura-Role": "user",
  "X-Hasura-User-Id": nhost.auth.getUser()?.id
}

const fetchApi = async(graphqlQuery: IgraphqlQuery) => {
    const options: IOptions = {
        "method": "POST",
        "headers": headers,
        "body": JSON.stringify(graphqlQuery)
    };
    const response = await fetch(endpoint, options);
    const data = await response.json();
    return data
}

export default fetchApi

