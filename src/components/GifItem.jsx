import React from "react"


// eslint-disable-next-line react/prop-types
export const Gifitems =({url,title,id}) =>{
    /* console.log({id,url,title}); */
    
    return (
        <div className="card">
            <img src={ url } alt={title} />
            <p>{title}</p>
        </div>
    )
}