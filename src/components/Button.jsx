import React from 'react';
import cn from 'classnames';

const Button = ({ outline, className, children }) => {
    return (
        <button className= { cn( 'button', className, {
                'button--outline': outline 
            })}
        >
            {children}
        </button>
    )
}

export default Button;
