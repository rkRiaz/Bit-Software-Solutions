import Layout from '@/components/Layout'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import { ICategory, IPost } from '@/interfaces';
import fetchApi from '../utils/fetchApi'
import SunEditorCore from "suneditor/src/lib/core";
import 'suneditor/dist/css/suneditor.min.css';
const SunEditor: NextPage = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

type Props = {
  categories: ICategory[]
}

const AddPost: NextPage<Props> = ({ categories }) => {
  const [post, setPost] = useState<IPost>({
    title: "",
    content: "",
    category_id: ""
  })
  
  const editor = useRef<SunEditorCore>();

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
      editor.current = sunEditor;
  }

  const changeHandler = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>, name: string) => {
      setPost({...post, [name]: e.target.value})
  }

  const submit = async (e: ChangeEvent<HTMLInputElement> | FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const graphqlQuery = {
        "query": `
        mutation MyMutation {
          insert_posts_one(object: {category_id: ${JSON.stringify(post.category_id)}, content: ${JSON.stringify(editor.current?.getContents(true))}, title: ${JSON.stringify(post.title)}}) {
            id
            title
          }
        }
        `,
        "variables": {}
    }

    const data: any = await fetchApi(graphqlQuery)

    if(data.errors) {
      alert("something wrong! May be login required")
    } else {
      alert(`${data.data.insert_posts_one.title} is created!`)
    }
  }



  return (
   <Layout>
      <div className="p-6 rounded-lg shadow-lg bg-white w-1/2 mx-auto m-4 ">
            <h3 className="text-4xl font-black text-center my-10">Add an Artical</h3>
            <form onSubmit={submit}>
              
                <input onChange={e => changeHandler(e, "title")} type="text" className="inputClass mb-6" placeholder="Artical Title" />
            
                <select onChange={e => changeHandler(e, "category_id")} className="inputClass mb-6">
                  <option value="">Choose a category</option>
                  {
                    categories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))
                  }
                </select>
              
                <SunEditor getSunEditorInstance={getSunEditorInstance} setOptions={{ height: 300,  buttonList: [
                    ['undo', 'redo', 'align'],
                    ['bold', 'underline', 'italic', 'list'],
                    ['table', 'link', 'image'],
                    ['fullScreen']
                ] }}  placeholder="Please type here..."/>

                <button type="submit" className="bg-blue-600 px-10 py-2 shadow-lg text-white rounded my-3 w-full" >Add Post</button>
              
              </form>
             
          </div>
   </Layout>
  )
}


// fetch the categories from hasura to select as a field of post during add post.
export async function getServerSideProps(context: any) {
  const graphqlQuery = {
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
  };

  const data = await fetchApi(graphqlQuery)

  return {
    props: {
      categories: data.data.categories
    },
 };
}

export default AddPost