import {Main, NotFound, UserDetails} from './pages/index.jsx'
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route path={"/"} element={<Main/>}/>
      <Route path={"/user/:id"} element={<UserDetails/>}/>
      <Route path={"*"} element={<NotFound/>}/>
    </Routes>
  )
}

export default App
