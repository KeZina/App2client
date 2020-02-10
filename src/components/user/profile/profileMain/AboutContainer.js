import React from 'react';
import About from './About.js';

const AboutContainer = () => {
    const columnsData = [
        {
            id: Math.round(Math.random() * 1e9),
            title: "Add post sorting",
            items: ["Sorting by date", "Sorting by likes"],
        },
        {
            id: Math.round(Math.random() * 1e9),
            title: "Add post selector",
            items: ["Select user posts", "Select others posts"],
        },
        {
            id: Math.round(Math.random() * 1e9),
            title: "Change <Search />",
            items: ["Add group searching", "Add people searching", "Add other searching"]
        },
    ];

    return(
        <About 
            quantity = {columnsData.length}
            id = {columnsData.map(column => column.id)}
            titles = {columnsData.map(column => column.title)}
            items = {columnsData.map(column => column.items )}
        />
    )
}

export default AboutContainer;