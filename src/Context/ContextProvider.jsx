import React, { useState } from 'react'
import ChatContext from './ChatContext';

const ContextProvider = ({ children }) => {
    const [chat, setChat] = useState([
    ]);
    return (
        <ChatContext.Provider value={{ chat, setChat }}>
            {children}
        </ChatContext.Provider>
    )
}

export default ContextProvider;