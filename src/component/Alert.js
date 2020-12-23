import React from 'react';

const Alert = ({msg,type}) => {
    return (
        <div className="alert alert-&{type}">
            <p>{msg}</p>
        </div>
    )
};

export default Alert;