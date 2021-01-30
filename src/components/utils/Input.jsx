import React from 'react';

function Input({className, placeholder, type, disabled, ...rest}) {
    return (
        <div className='input-style'>
            <input  className={className}
                    placeholder={placeholder}
                    type={type}
                    disabled={disabled}
                    {...rest}/>
        </div>
    );
}

export default Input;