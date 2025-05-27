import { useNavigate, useParams } from "react-router-dom"
import { useBlog } from "../../context/blog/useBlog"
import { useEffect, useState, type FormEvent } from "react"

const EditPost = () => {
   //classes style
   const buttonDark = "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
   const h1Style = "mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-black"
   
   const {id} = useParams()
   const {blog, dispatch} = useBlog()
   const foundPost = blog.find(p => id === p.id)
   
   const [titleInput, setTitleInput] = useState<string>('')
   const [contentInput, setContentInput] = useState<string>('')
   const [editId, setEditId] = useState<string>('')
   const navigate = useNavigate()

   useEffect(() => {
      if (!foundPost) return;
      
      // setEditId(foundPost.id)
      setTitleInput(foundPost.title)
      setContentInput(foundPost.content)
   }, [id, blog])
   
   
   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {   
      e.preventDefault()

      dispatch({
         type: "edit",
         payload: {
            id: editId,
            title: titleInput,
            content: contentInput
         }
      })
      navigate('/blog')
      setEditId('')
     
   }
   
   return (
    <div>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
         <h2 className={h1Style}>Edit post</h2>
         
         <input className="border-black border-2 text-black p-2 m-3" type="text" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} placeholder="Post title"/>
         <input className="border-black border-2 text-black p-2 m-3" type="text" value={contentInput} onChange={(e) => setContentInput(e.target.value)} placeholder="Post content"/>
            <button className={buttonDark}>
               Save changes
            </button>
      </form>
    </div>
  )
}

export default EditPost