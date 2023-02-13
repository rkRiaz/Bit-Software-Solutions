export interface IPost {
    id?: number,
    title: string,
    content: string | undefined | null,
    category_id: number | string,
    category?: {
        name: string
    },
    user?: {
        email: string
    }
}

export interface ICategory {
    id: number,
    name: string
}

export interface IOptions {
    method: string,
    headers: {
        "content-type": string,
        "x-hasura-admin-secret": string,
        "X-Hasura-Role"?: string,
        "X-Hasura-User-Id"?: string
    },
    body: string;
}

export interface IgraphqlQuery {
    query: string,
    variables: object
};