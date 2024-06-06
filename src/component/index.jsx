import React, { startTransition, useState } from "react";
import { useNavigate } from "react-router-dom";
import HostRouter from "../routes";

const ChildApp1 = React.lazy(() => import('child1/ChildApp-1'))

const HostComponent = () => {
    const navigate = useNavigate()
    const [showHost, setShowHost] = useState(true)
    const [showChild1, setShowChild1] = useState(false)
    const [showChild2, setShowChild2] = useState(false)

    const hostClickHandler = () => {
        setShowHost(true)
        setShowChild1(false)
        setShowChild2(false)
    }

    const child1ClickHandler = async () => {
        startTransition(() => {
            setShowHost(false)
            setShowChild1(true)
            setShowChild2(false)
        })
    }

    const child2ClickHandler = async () => {
        setShowHost(false)
        setShowChild1(false)
        setShowChild2(true)
        navigate('/child-2')
    }

    return (
        <>
            <div>
                <button onClick={hostClickHandler}>Host</button>
                <button style={{ marginLeft: 20 }} onClick={child1ClickHandler}>Child-1</button>
                <button style={{ marginLeft: 20 }} onClick={child2ClickHandler}>Child-2</button>
            </div>
            <div>
                {showHost && <h1>I AM HOME PAGE OF HOST COMPONENT</h1>}
                {showChild1 && <ChildApp1 />}
            </div>
            {showChild2 &&
                <HostRouter />
            }
        </>
    )
}

export default HostComponent