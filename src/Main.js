import React, { useState, useEffect } from 'react';
import useRequest from './useRequest';

const Main = () => {
    const [usersList, setUsersList] = useState([]);
    const [booksList, setBooksList] = useState([]);

    let {handleGet, handlePost, handleInput, users, books} = useRequest();

    useEffect(() => {
        if(users) setUsersList(
            users.map(item => {
                return (
                    <li>Name: {item.name}<br/>Age: {item.age}</li>
                )
            })
        )
    }, [users])
    useEffect(() => {
        if(books) setBooksList(
            books.map(item => {
                return (
                    <li>Book: {item.book}<br/>Author: {item.author}</li>
                )
            })
        )
    }, [books])

    return(
        <div className = "general-container" >
            <form action = "/users" method = "GET" onSubmit = {e => handleGet(e, "json")}>
                <input type = "submit" value = "GET" />
            </form>
            <form action = "/books" method = "GET" onSubmit = {handleGet}>
                <input type = "submit" value = "GET" />
            </form>
            <form action = "/users" method = "POST" onSubmit = {handlePost}>
                <input type = "text" name = "Login" onChange = {handleInput} placeholder = "Enter login" />
                <input type = "password" name = "Password" onChange = {handleInput} placeholder = "Enter password" />
                <input type = "submit" value = "POST" />
            </form>
            <h1 style = {{color: "red", fontSize: "5em", backgroundColor: "yellow", position: "relative", margin: "auto", top: "10vh"}}>
                <ul>
                    {usersList}
                </ul>
                <ul>
                    {booksList}
                </ul>
            </h1> 
        </div>
    )
}

export default Main;