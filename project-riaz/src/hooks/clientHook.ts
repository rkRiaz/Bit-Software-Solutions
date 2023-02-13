import useSWR from 'swr'
const fetcher = (url: string) => fetch(url, {
  method: "GET",
  headers: {
    "app-id": process.env.NEXT_PUBLIC_API_APP_ID
  }
}).then((res) => res.json())


export const getClientById = (id: string) => {
  // const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`, fetcher)
  return {
    client: {
      surname: "John",
      forename: "Doe",
      email: "john@example.com",
      phone: "+88017-20918xx",
      social_security_number: "12345678",
      address: "391 N Central Ave",
      post_code: "32784",
      village: "Umatilla",
      sex: "male",
      birth_date: "",
      nationality: "",
      id_num: "",
      siret_num: "",
      profile_pic: "https://picsum.photos/300/300",
      complete: false
  },
    isLoading: false,
    isError: false,
  }
}

export const getClients = () => {
  const { data, error } = useSWR('/bblock-admin/data-sources/clients.json', fetcher)

  return {
    clients: data?.data ?? [],
    isLoading: !error && !data,
    isError: error,
  }
}

export const useSampleClients = () => {
  const { data, error } = useSWR('/bblock-admin/data-sources/clients.json', fetcher)

  return {
    clients: data?.data ?? [],
    isLoading: !error && !data,
    isError: error,
  }
}

export const useSampleTransactions = () => {
  const { data, error } = useSWR('/bblock-admin/data-sources/history.json', fetcher)

  return {
    transactions: data?.data ?? [],
    isLoading: !error && !data,
    isError: error,
  }
}

export const useRoleData = () => {
  // const { data, error } = useSWR('/bblock-admin/data-sources/clients.json', fetcher)

  return {
    clients:  [
      {
        id: 1,
        name: "Super Admin"
      },
      {
        id: 2,
        name: "Admin"
      },
      {
        id: 3,
        name: "Moderator"
      },
      {
        id: 4,
        name: "Client"
      },
    ],
  }
}

