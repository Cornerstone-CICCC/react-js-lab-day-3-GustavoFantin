import { Link } from "react-router"
import { useBlog } from "../../context/blog/useBlog"

const BlogListing = () => {
   const buttonDark = "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
   const {blog} = useBlog()
   console.log(blog)
  return (
   <div>
      <div>
         <h3>Blog Listing</h3>
         <Link to="/blog/new" className="hover:text-blue-500 font-extrabold leading-none tracking-tight text-gray-900">Add Post</Link>
         <div>
         {blog.map(post => (
            <div key={post.id} className="border-2 border-black p-3 flex flex-col justify-start">
               <h4 className="text-md font-bold leading-none tracking-tight text-gray-900">{post.title}</h4>
               <span className="text-sm leading-none tracking-tight text-gray-900">{post.content}</span>
               <Link to={`/blog/${post.id}`}>View More</Link>
            </div>
         ))}
         </div>
      </div>
      <div>
         
      </div>
   </div>
  )
}

export default BlogListing