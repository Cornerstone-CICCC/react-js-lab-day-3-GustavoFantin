import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import BlogListing from "./pages/blogs/BlogListing"
import AddPost from "./pages/posts/AddPost"
import { BlogContextProvider } from "./context/blog/BlogContextProvider"
import BlogDetail from "./pages/blogs/BlogDetail"
import EditPost from "./pages/posts/EditPost"


const App = () => {
  return (
    <BlogContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="blog" element={<BlogListing />}/>
          <Route path="blog/new" element={<AddPost/>}/>
          <Route path="blog/:id" element={<BlogDetail/>}/>
          <Route path="blog/edit/:id" element={<EditPost/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </BlogContextProvider>
  )
}

export default App