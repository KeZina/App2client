import React from 'react';

const Container = ({children, level}) => {
    switch(level) {
        case 1 :
            return (
                <div className = "container-1">
                    {children}
                </div>
            )
        case 2 :
            return (
                <div className = "container-1">
                    <div className = "container-2">
                        {children}
                    </div>
                </div>
            )
        case 3 :
            return(
                <div className = "container-1">
                    <div className = "container-2">
                        <div className = "container-3">
                            {children}
                        </div>
                    </div>
                </div>
            )
            
        default : 
            return (
                <div className = "container-1">
                    {children}
                </div>
            )
    }
}

export default Container