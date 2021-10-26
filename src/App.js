import { useReducer } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useEffect } from "react/cjs/react.development"
import DispatchContext from "./AddDispatchContext"
import "./App.scss"
import StateContext from "./AppStateContext"
import AddPost from "./components/AddPost"
import EditPost from "./components/EditPost"
import Header from "./components/Header"
import Home from "./components/Home"
import ViewPosts from "./components/ViewPosts"

function App() {
  const intialValue = {
    posts: [
      // { id: 0, title: "Hello form Post 1", author: "kareeem", content: "welcome to my post 1", createdAt: "24/10/2021 || 15:28:29" },
      // { id: 1, title: "Hello from Post 2", author: "Mohamed Elsayed", content: "welcome to post 2", createdAt: "24/10/2021 ||15:28:29" }
    ],
   
  }

  function ourReducer(state, action) {
    switch (action.type) {
      case'getPostsArray':
      return{
        posts:action.value
      }
      case "addPost":
        return {
          posts: [...state.posts,action.value]
        }
      case 'editPost':
       const updatedPost = {
         ...state.posts[action.value.id],
         ...action.value
       }
       const updatedPosts = [...state.posts]
       updatedPosts[action.value.id] = updatedPost
       return{
         
         posts:updatedPosts
       }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(ourReducer, intialValue)

  // state.posts[0] = { id: 0, title: "Hello from Post edit", author: "Mohamed Elsayedssss", content: "welcome to post edit", createdAt: "24/10/2021 ||15:28:29" }

  // localStorage.setItem("Posts", JSON.stringify(state))

  useEffect(()=>{
    if(localStorage.getItem('Posts')){
      dispatch({type:'getPostsArray' ,value:JSON.parse(localStorage.getItem('Posts'))})
    }else{
      dispatch({type:'getPostsArray' ,value:[]})
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("Posts", JSON.stringify(state.posts))
  },[state.posts])
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/addpost">
              <AddPost />
            </Route>
            <Route path="/posts">
              <ViewPosts />
            </Route>
            <Route path="/edit/:id">
              <EditPost />
            </Route>
          </Switch>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
