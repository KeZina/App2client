import { useEffect, useState } from "react"

// get user data (name, age etc);

const useCheckAuth = (depends) => {
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

    useEffect(() => {
        if(localStorage.getItem("token")) {
            (async () => {
                const response = await fetch('/users/auth', {
                    method: "POST",
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                })
                const result = await response.json();
                setData(result)
            })()
        } else if(!localStorage.getItem("token")) setData(anonimus)
    }, [depends])

    return {
        data,
        logout
    }
}

export default useCheckAuth;