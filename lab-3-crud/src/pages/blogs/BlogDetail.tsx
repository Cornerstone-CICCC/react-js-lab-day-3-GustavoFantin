import { Link, useNavigate, useParams } from "react-router"
import { useBlog } from "../../context/blog/useBlog"


const BlogDetail = () => {
   const editBtnClass = "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
   const deleteBtnClass = "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"

   const {blog, dispatch} = useBlog()
   const {id} = useParams()
   const foundPost = blog.find(p => id === p.id)
   const navigate = useNavigate()

   const handleDelete = (id: string) => {
         dispatch({
            type: "delete",
            payload: {
               id
            }
         })
         navigate("/blog")
      }

    return (
    <div>
         {foundPost ? 
         <div key={foundPost.id} className="border-2 border-black p-3 flex flex-row justify-between">
               <div className="flex flex-row justify-start">
                  <h4 className="text-md font-bold leading-none tracking-tight text-gray-900">{foundPost.title}</h4>
                  <span className="text-sm leading-none tracking-tight text-gray-900">{foundPost.content}</span>
               </div>
               <div>
                  <Link to={`/blog/edit/${foundPost.id}`} className={editBtnClass}>Edit</Link>
                  <button type="button" onClick={() => handleDelete(foundPost.id)} className={deleteBtnClass}>Delete</button>
               </div>
         </div> :
               <h2>No post found</h2>
            }

    </div>
  )
}

export default BlogDetail