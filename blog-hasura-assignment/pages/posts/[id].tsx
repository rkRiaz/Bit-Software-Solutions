import Categories from '@/components/Categories'
import Layout from '@/components/Layout'
import fetchApi from '@/utils/fetchApi'
import { NextPage } from 'next'
import { ICategory } from '../../interfaces'


type Props = {
  post: {
    title: string,
    content: string,
    category: {
      name: string
    }
  },
  categories: ICategory[]
}

const Post: NextPage<Props> = ({ post, categories }) => {
    return (
       <Layout>
          <div className="container mx-auto m-2 grid grid-cols-2 sm:grid-cols-8 gap-5 min-h-screen">
            <div className="categories bg-slate-100 h-full sm:col-span-2 rounded-3xl shadow-2xl">
                  <Categories categories={categories}/>
              </div>
            <div className="postDetails bg-slate-100 h-full sm:col-span-6 rounded-3xl shadow-2xl p-6">
                  <p className="text-sm font-medium text-slate-600">{post.category.name} &gt; {post.title}</p>
                  <h4 className="text-lg mt-5">Post Title: <span className='font-semibold '> {post.title}</span></h4>
                  <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-md mt-5"></div>
            </div>
          </div>
       </Layout>
    )
}

export async function getServerSideProps(context: any) {
    const graphqlQuery1 = {
        "operationName": "MyQuery",
        "query": `
        query MyQuery {
          posts_by_pk(id: ${context.params.id}) {
            id
            title
            content
            user {
              id
              email
            }
            category {
              id
              name
            }
          }
        }
        `,
        "variables": {}
    }
    const graphqlQuery2 = {
        "operationName": "MyQuery",
        "query": `
        query MyQuery {
            categories {
              name
              id
            }
        }  
        `,
        "variables": {}
  }

  const data1 = await fetchApi(graphqlQuery1)
  const data2 = await fetchApi(graphqlQuery2)
 
  return {
    props: {
      post: data1.data.posts_by_pk,
      categories: data2.data.categories
    }
  }
}


export default Post