import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

// const useAuth = () => {
//     let {setUrl, setReload, setOptions, data: responseForm} = useFetch();

//     const anonimus = {
//         name: null,
//         age: null,
//         token: null,
//         auth: false
//     }

//     const [data, setData] = useState(anonimus);
//     const [loading, setLoading] = useState(false)
    
//     const login = (e) => {
//         e.preventDefault();
//         setUrl(e.target.action);
//         setReload(Math.random());
//         setOptions({
//             method: "POST",
//             body: new FormData(e.target)
//         });
//     }

//     const logout = () => {
//         setUrl("/users/logout");
//         setReload(Math.random());
//         setOptions({
//             method: "PATCH",
//             headers: {
//                 "Authorization": localStorage.getItem("token")
//             }
//         })
//         localStorage.removeItem("token");
//         setData(anonimus);
//     }

//     const deleteUser = () => {
//         setUrl("/users/delete");
//         setReload(Math.random());
//         setOptions({
//             method: "DELETE",
//         })
//         localStorage.removeItem("token");
//         setData(anonimus);
//     }

//     // const isAuth = () => {
//     //     setUrl("/users/auth");
//     //     setReload(Math.random());
//     //     setOptions({
//     //         method: "POST",
//     //         headers: {
//     //             "Authorization": localStorage.getItem("token")
//     //         }
//     //     })
//     // }

//     useEffect(() => {
//         console.log(213123)
//         if(data === anonimus && localStorage.getItem("token")) {
//             setLoading(true);
//         } else if(data !== anonimus) {
//             setLoading(false);
//         }
//     }, [data, responseForm, Object.entries(localStorage)])

//     useEffect(() => {
//         if(responseForm && responseForm.token){
//             localStorage.setItem("token", responseForm.token);
//         }
//         if(localStorage.getItem("token")) {
//             (async () => {
//                 try {
//                     const response = await fetch('/users/auth', {
//                         method: "POST",
//                         headers: {
//                             "Authorization": localStorage.getItem("token")
//                         }
//                     })
//                     const result = await response.json();

//                     if(result.auth === true) {
//                         setData(result);
//                     } else if(result.auth === false || result === "jwt expired") {
//                         console.log(result)
//                         localStorage.removeItem("token");
//                     } else throw new Error(result)

//                 } catch(e) {
//                     console.log(e);
//                 }
//             })()
//         } else if(!localStorage.getItem("token")) setData(anonimus)
//     }, [responseForm])

//     return {
//         loading,
//         login,
//         logout,
//         deleteUser,
//         data
//     }
// }

const useAuth = () => {
    let {setUrl, setReload, setOptions, data: responseForm} = useFetch();
    
    const history = useHistory();

    const anonimus = {
        name: null,
        age: null,
        token: null,
        auth: false
    }

    const [data, setData] = useState(anonimus);
    const [loading, setLoading] = useState(false)
    
    const login = (e) => {
        e.preventDefault();
        setUrl(e.target.action);
        setReload(Math.random());
        setOptions({
            method: "POST",
            body: new FormData(e.target)
        });
    }

    const logout = () => {
        setUrl("/users/logout");
        setReload(Math.random());
        setOptions({
            method: "PATCH",
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        localStorage.removeItem("token");
        setData(anonimus);
    }

    const deleteUser = () => {
        setUrl("/users/delete");
        setReload(Math.random());
        setOptions({
            method: "DELETE",
        })
        localStorage.removeItem("token");
        setData(anonimus);
    }

    // const isAuth = () => {
    //     setUrl("/users/auth");
    //     setReload(Math.random());
    //     setOptions({
    //         method: "POST",
    //         headers: {
    //             "Authorization": localStorage.getItem("token")
    //         }
    //     })
    // }

    useEffect(() => {
        if(data === anonimus && localStorage.getItem("token")) {
            setLoading(true);
        } else if(data !== anonimus) {
            setLoading(false);
        }
    }, [data, responseForm, Object.entries(localStorage)])

    useEffect(() => {
        if(responseForm && responseForm.token){
            localStorage.setItem("token", responseForm.token);
        }
        if(localStorage.getItem("token")) {
            (async () => {
                try {
                    const response = await fetch('/users/auth', {
                        method: "POST",
                        headers: {
                            "Authorization": localStorage.getItem("token")
                        }
                    })
                    const result = await response.json();

                    if(result.auth === true) {
                        setData(result);
                    } else if(result.auth === false || result === "jwt expired") {
                        setData(anonimus);
                        localStorage.removeItem("token");
                    } else throw new Error(result)

                } catch(e) {
                    console.log(e);
                }
            })()
        } else if(!localStorage.getItem("token")) setData(anonimus)
    }, [history.location.pathname, responseForm])

    return {
        loading,
        login,
        logout,
        deleteUser,
        data
    }
}

export default useAuth;