import React from "react";

function PageNotFound({children}){
    return <div className="not-found">
        <h1>404</h1>
        <h2>{children}</h2>
    </div>
}

export default PageNotFound