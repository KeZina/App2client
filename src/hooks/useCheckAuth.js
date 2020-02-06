import { useEffect, useState } from "react"

// get user data (name, age etc);

const useCheckAuth = () => {
    const anonimus = {
        name: null,
        age: null,
        token: null,
        auth: false
    }
    const [data, setData] = useState(anonimus);

    const logout = () => {
        localStorage.removeItem("token");
        setData(anonimus);
    }

    const token = localStorage.getItem("token");

    useEffect(() => {
        if(token) {
            (async () => {
                const response = await fetch('/users/auth', {
                    method: "POST",
                    headers: {
                        "Authorization": token
                    }
                })
                
                const result = await response.json();
                setData(result)
            })()
        } else if(!token) setData(anonimus)
    }, [localStorage.getItem("token")])

    return {
        data,
        logout
    }
}

export default useCheckAuth;