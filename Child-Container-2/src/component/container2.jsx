import React from "react";
import { useNavigate } from "react-router-dom";

const Container = () => {
    const navigate = useNavigate()

    const pageAHandler = () => {
        navigate('/child-2/page-A')
    }

    const pageBHandler = () => {
        navigate('/child-2/page-B')
    }

    return (
        <div>
            <h1>I AM HOME PAGE OF CHILD-2</h1>
            <button onClick={pageAHandler}>Page A</button>
            <button style={{ marginLeft: 20 }} onClick={pageBHandler}>Page B</button>
        </div>
    )
}

export default Container