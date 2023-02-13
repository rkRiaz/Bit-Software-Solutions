import useSWR from 'swr'
import { setAdmin } from '../stores/adminSlice'


function setAuthTokenIntoHeaders(headers) {
  if(localStorage.adminToken) {
      return {
        ...headers,
        'Authorization': `Bearer ${localStorage.adminToken}`
      }
  } else {
      return headers;
  }
}


const fetcher = (url: string) => fetch(url, {
  method: "GET",
  headers: setAuthTokenIntoHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${"session.token"}`
  })
}).then((res) => res.json())


const fetchApi = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      body: JSON.stringify(data),
      mode: 'cors',
      'Access-Control-Allow-Origin': "*"
    }
  })
  return response
}


export const useAdminLogin = async (loginInfo, dispatch) => {
  dispatch(setAdmin({ loading: true }))
  try {
    // const response = await fetchApi("api", loginInfo)
    // const data = await response.json()
    // throw new Error("Error custom")
    // localStorage.setItem("adminToken", "data.token");

    setTimeout(() => {
        let data = {
          name: "admin",
          email: "john@example.com",
          avatar: "https://picsum.photos/300/300"
        }
        dispatch(
          setAdmin({
            admin: {
              name: data.name,
              email: data.email,
              avatar: data.avatar
            },
            loading: false
          })
        )
        // setData({
        //   admin: data,
        //   error: null,
        //   loading: false
        // })
    }, 2000)

  } catch(err) {
    setTimeout(() => {
      dispatch(
        setAdmin({
          error: {
            email: "Wrong Email",
            password: "Wrong password"
          },
          loading: false
        })
      )
    }, 2000)

  }
}


export const getAdminData = () => {
  const { data, error } = useSWR('/bblock-admin/data-sources/clients.json', fetcher)
  return {
    admin: data?.data ?? [],
    isLoading: !error && !data,
    isError: error,
  }
}

