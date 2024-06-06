import React from "react";
import { useNavigate } from "react-router-dom";

const PageA = () => {
    const navigate = useNavigate()

    const homeHandler = () => {
        navigate('/child-2')
    }

    return (
        <div style={{ marginTop: 30 }}>
            <button onClick={homeHandler}>Back to Home</button>
            <h1>I AM PAGE A OF CHILD-2</h1>
        </div>
    )
}

export default PageA