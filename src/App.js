import { BrowserRouter, Switch, Route } from "react-router-dom"

import AddPost from "./components/AddPost"
import EditPost from "./components/EditPost"
import Header from "./components/Header"
import Home from "./components/Home"
import ViewPosts from "./components/ViewPosts"

function App() {
  return (
    <div className="App">
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
