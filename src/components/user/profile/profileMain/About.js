import React, { useState } from 'react';

const About = ({quantity, id, titles, items}) => {
    const [visible, setVisible] = useState(new Array(quantity).fill(false));

    const handleVisible = (visibleStatus, number) => {
        setVisible([...visible].map((item, index) => ((index === number) && (/Show/.test(visibleStatus))) ? true : false));
    }

    const checkValue = number => visible[number] ? `Hide data ${number += 1}` : `Show data ${number += 1}`;

    const checkClassName = number => !visible[number] ? "content hidden" : "content";
    
    const columns = new Array(quantity).fill(null).map((item, columnIndex) => {
            return(
                <div 
                    className = "container"
                    key = {id[columnIndex]}
                >
                    <input 
                        className = "button"
                        type = "button"
                        value = {checkValue(columnIndex)}
                        onClick = {(e) => handleVisible(e.target.value, columnIndex)}
                    />
                    <div className = {checkClassName(columnIndex)}>
                        <h3>
                            {titles[columnIndex]}
                        </h3>
                        <ol>
                            {items[columnIndex].map((item, index) => <li key = {columnIndex + index}>{item}</li>)}
                        </ol>
                    </div>
                </div>
            )
        }
    )

    return(
        <div className = "about">
            {columns}
        </div>
    )
}

export default About;