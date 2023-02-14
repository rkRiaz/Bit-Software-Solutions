import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import { gradientBgPurplePink } from '../utils/colors'
import { getPageTitle } from '../utils/config'
import { useAppDispatch } from '../stores/hooks'
import LayoutAuthenticated from '../layouts/Authenticated'
import fetchApi from '../utils/fetchApi'

const graphqlQuery = {
  "operationName": "MyQuery",
  "query": `
  query MyQuery {
    customers {
      created_at
      email
      id
      name
      updated_at
    }
  }       
  `,
  "variables": {}
}



const DataPage = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{getPageTitle('DataPage')}</title>
      </Head>
      <div className='h-screen w-screen flex justify-center items-center'>
        <p>DataPage page</p>
      </div>
    </>
  )
}

DataPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default DataPage



export async function getServerSideProps(context: any) {

const data = await fetchApi(graphqlQuery)

console.log(data.data)

return {
  props: { }
}
}







