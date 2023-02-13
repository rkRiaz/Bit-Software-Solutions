import { IPost } from '@/interfaces'
import fetchApi from '@/utils/fetchApi'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { BiSearch } from 'react-icons/bi'


const Search:FC = () => {
 const [posts, setPosts] = useState<{title: string, id: number | string}[]>([])

 const changeHandler = async (e:  React.ChangeEvent<HTMLInputElement>) => {

        const graphqlQuery = {
            "operationName": "MyQuery",
            "query": `
            query MyQuery {
                posts(where: {title: {_iregex: ${JSON.stringify(e.target.value)}}}) {
                  id
                  title
                }
              }
            `,
            "variables": {}
        };
    

        if(e.target.value === "") {
            setPosts([])
        } else {
            const data: any = await fetchApi(graphqlQuery)
            setPosts(data.data.posts)
        }

    
        
            
      }

  return (
    <div className="relative mt-4 text-opacity-5">
        <input onChange={e => changeHandler(e)} type="text" placeholder='Search' className="rounded w-[350px] outline-none pl-6 py-1 text-sm"/>
        <BiSearch className="absolute top-[6px] left-1"/>
        
       {
        posts.length !== 0 &&
        <div className='flex flex-col gap-2 bg-white p-3 shadow-lg rounded mt-1'>
        {
            posts.map((post) => (
                <Link href={`/posts/${post.id}`} key={post.id}>{post.title}</Link>

            ))
        }
        </div>
       }
        </div>


  )
}

export default Search

