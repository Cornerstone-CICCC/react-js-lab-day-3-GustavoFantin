import { Link } from "react-router"
import BlogListing from "./blogs/BlogListing"

const Home = () => {
  const h1Style = "mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-black"

  return (
    <div className="w-full flex justify-between items-center">
      <h1 className={h1Style}>Home Page</h1>
      <ul>
        <Link className="hover:text-blue-500 font-extrabold leading-none tracking-tight text-gray-900" to="/blog">Blog List</Link>
      </ul>
    </div>
  )
}

export default Home