import React, { useEffect, useState } from 'react'
import './Chat.css'
import { Avatar } from '@material-ui/core'

const Chat = () => {
    // to make the seed dynamic/random
    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/b${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h2>Room name</h2>
                    <p>last seen at...</p>
                </div>
            </div>
            <div className="chat__body" ></div>
            <div className="chat__body" ></div>
        </div>
    )
}

export default Chat