import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import { gradientBgPurplePink } from '../utils/colors'
import { getPageTitle } from '../utils/config'
import { useAppDispatch } from '../stores/hooks'
import LayoutAuthenticated from '../layouts/Authenticated'
import fetchApi from '../utils/fetchApi'

// const gqlQuery = {
//   query: `
//        {
//           customers {
//               created_at
//               email
//               id
//               name
//               updated_at
//           }
//       }       
//     `
// }

const gqlQuery = {
  query: `
      {
        customers {
            created_at
            email
            id
            name
            updated_at
        }
      }       
    `
}

const DataPage = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  fetchApi(gqlQuery)


  return (
    <>
      <Head>
        <title>{getPageTitle('DataPage')}</title>
      </Head>
      <div className='h-screen w-screen grid justify-center items-center'>
        <div>
          <p>DataPage page</p>
          <button className='bg-red-500 py-2 px-6 rounded text-white mt-5' onClick={handleSubmit}>Add Post</button>
        </div>
      </div>
    </>
  )
}

DataPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
export default DataPage



// export async function getServerSideProps(context: any) {

// const data = await fetchApi(graphqlQuery)

// console.log(data.data)

// return {
//   props: { }
// }
// }







