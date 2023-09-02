import { Outlet } from "react-router-dom";
import {useState, useEffect} from "react";
import useAuth from "../Hooks/useAuth";
import Loading from "../Pages/jsx/Loading";

const PersistLogin = () => {
    const [isLoading, setLoading] = useState(true);
    const {auth, setAuth} = useAuth();
    const email = window.localStorage.getItem("email")
    const password = window.localStorage.getItem("password")

    useEffect(() =>{
        const verifyUser = async () =>{
            fetch(
                "https://initiare-website-2603191647bb.herokuapp.com/api/v1/auth/login",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    accept: "application/json",
                  },
                  body: JSON.stringify({
                    "email": email,
                    "password": password,
                  }),
                }
              )
              .then(res => res.json())
              .then(data => {
                const accessToken = data.res?.token;
                const user = data.res?.user;
                setAuth({ email, password, user, accessToken })
                setLoading(false);
              })
        }

        !auth?.accessToken ?  verifyUser() : setLoading(false); //if the accessToken doesn't exist (or after every refresh it disappears), load it; otherwise, don't

    }, []) // this loads everytime the page refreshed, hence the name

    useEffect(() =>{
        console.log(`isLoading: ${isLoading}`)
        console.log(`accessToken: ${auth?.accessToken}`)
    }, [isLoading])
  return (
    <>
    {isLoading ?
     <Loading/>:
    <Outlet />}
    </>
    )
}


export default PersistLogin;