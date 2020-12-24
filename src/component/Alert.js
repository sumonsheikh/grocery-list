import React,{useEffect} from 'react';

const Alert = ({msg,type,removeAlert}) => {
    //use the useEffect hook for removing alert
    //after 3s
    useEffect(() => {
       const timeout = setTimeout(()=>{
           removeAlert();
       },3000);
       return ()=>clearTimeout(timeout);
    }, [])

    return (
        <div className={`alert alert-${type}`}>
            <p>{msg}</p>
        </div>
    )
};

export default Alert;