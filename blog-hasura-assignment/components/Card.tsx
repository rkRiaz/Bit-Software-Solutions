import Link from 'next/link'
import { FC } from 'react'
import { IPost } from '../interfaces'


const Card: FC<IPost | any> =({ post }) => {
  return (
    <>
        <Link href={`posts/${post.id}`} className="block p-6 rounded-[20px] shadow-lg bg-white ">
            <h5 className="text-gray-900 text-xl leading-tight font-black mb-2">{post.category.name}</h5>
            <p className="text-gray-700 text-base mb-4">{post.title}</p>
        </Link>
    </>
  )
}

export default Card