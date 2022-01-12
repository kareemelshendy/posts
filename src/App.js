import { BrowserRouter, Switch, Route } from "react-router-dom"

import AddPost from "./components/AddPost"
import Signin from "./components/Signin"
import Chat from "./components/Chat"
import EditPost from "./components/EditPost"
import Header from "./components/Header"
import Home from "./components/Home"
import ViewPosts from "./components/ViewPosts"

function App() {
  return (
    <div className="App">
      {/* <Signin />
      <Chat /> */}
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/addpost">
            <AddPost />
          </Route>
          <Route path="/posts" exact>
            <ViewPosts />
          </Route>
          <Route path="/edit/:id">
            <EditPost />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
