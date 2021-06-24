import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'


const SidebarChat = () => {
    // to make the seed dynamic/random
    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    return (
        <div className="sidebarChat" >
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/b${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>last message</p>
            </div>

        </div>
    )
}

export default SidebarChat
