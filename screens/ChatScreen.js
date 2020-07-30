import React, {useEffect, useState} from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import Fire from '../Fire';

const ChatScreen = (props) => {
    const [messages, setMessages] = useState([])

    const { name } = props.route.params;

    const navigationOptions = () => ({
        title: 'Chat!',
    })

    const state = {
        name,
        _id: Fire.shared.uid,
    }


    useEffect(() => {
        Fire.shared.on(message => setMessages(GiftedChat.append(messages,message)))
        return () => Fire.shared.off()
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={Fire.shared.send}
            user={state}
        />
    )
}
export default ChatScreen