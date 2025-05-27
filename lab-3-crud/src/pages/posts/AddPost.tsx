import { createContext, useReducer, useState, type FormEvent } from "react"
import { v4 as uuidv4 } from "uuid"
import { useBlog } from "../../context/blog/useBlog"
import { Link, useNavigate } from "react-router"

const AddPost = () => {
   const addBlog = createContext([])
   const { blog, dispatch } = useBlog()
   const [titleInput, setTitleInput] = useState<string>('')
   const [contentInput, setContentInput] = useState<string>('')
   const [editId, setEditId] = useState<string>('')
   const buttonDark = "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
   const h1Style = "mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-black"
   const navigate = useNavigate()

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
   
         dispatch({
            type: 'add',
            payload: {
               id: uuidv4(),
               title: titleInput,
               content: contentInput,
               published: false
            }
         })
         setTitleInput('')
         setContentInput('')
         navigate('/blog')
   }
   
   

   

   

  return (

    <div className="border-2 border-black items-center h-full justify-center flex">
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
         <h2 className={h1Style}>Create a post</h2>
         
         <input className="border-black border-2 text-black p-2 m-3" type="text" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} placeholder="Post title"/>
         <input className="border-black border-2 text-black p-2 m-3" type="text" value={contentInput} onChange={(e) => setContentInput(e.target.value)} placeholder="Post content"/>
            <button className={buttonDark}>
               Post
            </button>
      </form>
      
    </div>
  )
}

export default AddPost