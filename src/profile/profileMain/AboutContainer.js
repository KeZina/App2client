import React from 'react';
import About from './About.js';

const AboutContainer = () => {
    const columnsData = [
        {
            title: "Add post sorting",
            items: ["Sorting by date", "Sorting by likes"],
        },
        {
            title: "Add post selector",
            items: ["Select user posts", "Select others posts"],
        },
        {
            title: "Add auth with Firebase",
            items: ["Read more about Firebase", "Check if Firebase install correct"],
        },
        {
            title: "Resolve other tasks",
            items: ["Add Redux", "Maybe need to add Redux-Saga", "Change <Main />", "Add theme selector (maybe with React context)"],
        },
        {
            title: "Change <Search />",
            items: ["Add group searching", "Add people searching", "Add other searching"]
        },
    ];

    return(
        <About 
            quantity = {columnsData.length}
            titles = {columnsData.map(column => column.title)}
            items = {columnsData.map(column => column.items )}
        />
    )
}

export default AboutContainer;