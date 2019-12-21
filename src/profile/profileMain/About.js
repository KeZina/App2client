import React, { useState } from 'react';

const About = ({quantity, titles, items}) => {
    const [visible, setVisible] = useState(new Array(quantity).fill(false));

    const handleVisible = (visibleStatus, number) => {
        setVisible([...visible].map((item, index) => ((index === number) && (/Show/.test(visibleStatus))) ? true : false));
    }

    const checkValue = number => visible[number] ? `Hide data ${number += 1}` : `Show data ${number += 1}`;

    const checkClassName = number => !visible[number] ? "content hidden" : "content";
    
    const columns = new Array(quantity).fill(null).map((item, index) => {
            return(
                <div 
                    className = "container"
                >
                    <input 
                        className = "button"
                        type = "button"
                        value = {checkValue(index)}
                        onClick = {(e) => handleVisible(e.target.value, index)}
                    />
                    <div className = {checkClassName(index)}>
                        <h3>{titles[index]}</h3>
                        <ol>{items[index].map(item => <li>{item}</li>)}</ol>
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