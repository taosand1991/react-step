import React from 'react';

function Button({className, children, ...rest}) {
    return (
        <div>
           <button className={className} {...rest}>{children}</button> 
        </div>
    );
}

export default Button;