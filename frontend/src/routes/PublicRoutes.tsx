import Login from "../pages/Login"

export default function PublicRoutes() { 
  return [
    {
      path : "/",
      element : <Login/>,
      // errorElement: <h1>Error :( </h1>,
    },
    {
      path: "/Login",
      element : <Login/>,
      // errorElement: <h1>Error :( </h1>,
    }
  ]
}