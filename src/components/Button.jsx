import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Button = React.memo(({ outline, className, children, onClick }) => {
    return (
        <button className= { cn( 'button', className, {
                'button--outline': outline 
            })}
            onClick={onClick}
        >
            {children}
        </button>
    )
})

Button.propTypes = {
    outline: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;
