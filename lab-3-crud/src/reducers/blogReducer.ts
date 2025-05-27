import type { IPost } from "../types/post.types";

export type postAction = 
   | { type: "add", payload: IPost }   
   | { type: "delete", payload: { id: string } }   
   | { type: "edit", payload: Omit<IPost, "published"> }

export const blogReducer = (state: IPost[], action: postAction) => {
   switch( action.type) {
      case "add":
         return [
            ...state,
            action.payload
         ]
      case "edit":
         return state.map(post => action.payload.id === post.id ? { ...post, title: action.payload.title, content: action.payload.content } : post)
      case "delete":
         return state.filter(post => action.payload.id != post.id)
      default:
         return state
   }
}