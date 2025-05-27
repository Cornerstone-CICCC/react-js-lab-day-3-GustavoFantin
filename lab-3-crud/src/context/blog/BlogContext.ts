import React, {createContext} from "react";
import type { IPost } from "../../types/post.types";
import type { postAction } from "../../reducers/blogReducer";

export type BlogContextType = {
   blog: IPost[],
   dispatch: React.Dispatch<postAction>
}

export const BlogContext = createContext<BlogContextType>({
   blog: [],
   dispatch: () => {}
})

