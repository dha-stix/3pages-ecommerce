import {lazy, Suspense} from "react"
import {Switch, Route} from "react-router-dom"
import LazyLoad from "./components/LazyLoad"
const HomePage = lazy(()=> import("./components/Homepage"))
const SearchPage = lazy(()=> import("./components/SearchPage"))
const Login = lazy(()=> import("./components/Login"))
function App() {
  return (
<Suspense fallback={<LazyLoad/>}>
    <Switch>
      <Route exact component={HomePage} path="/"/>
      <Route component={SearchPage} path="/search"/>
      <Route component={Login} path="/login"/>
    </Switch>
</Suspense>
  
  );
}

export default App;
