import { useReducer, type ReactNode } from "react"
import { BlogContext } from "./BlogContext"
import { blogReducer } from "../../reducers/blogReducer"

export const BlogContextProvider = ({ children }: { children: ReactNode }) => {
   const [blog, dispatch] = useReducer(blogReducer, [])

   return (
      <BlogContext.Provider value={{ blog, dispatch}}>
         {children}
      </BlogContext.Provider>
   )
}