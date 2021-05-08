import React from 'react'
import Header from '../components/Header'
import ChatScreen from '../components/ChatScreen'

const ChatScreenpage = () => (
    <>
        <Header backButton="/chat" />
        <ChatScreen />
    </>
)

export default ChatScreenpage
