import { createBrowserRouter } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"
import { RouterProvider } from "react-router-dom";

export const AppRoutes = () => {

const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

const checkAuth = () => {
  const token = localStorage.getItem('token')
  if (token){
    const decodedJwt = parseJwt(token);

    if (decodedJwt.exp * 1000 < Date.now()) {
      localStorage.removeItem('token');
      console.log(false, "Token Existe, mas Expirado")
      return false;
    }
    console.log(true, "Token valido")
    return true;
  }
  console.log(false, "Token nao existe")
  return false;
}


  const router = createBrowserRouter([
  checkAuth() ? PrivateRoutes() : {} , ...PublicRoutes()
  ])


  return <RouterProvider router={router} />

}
