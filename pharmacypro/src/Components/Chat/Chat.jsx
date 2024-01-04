import React, { useState } from 'react'
import './Chat.css'
import axios from 'axios'
import { FaArrowUp, FaRobot, FaSeedling } from 'react-icons/fa';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        const newMessages = [...messages, { text: input, sender: 'user' }];
        setMessages(newMessages);
        setInput('');

        try {
            const response = await axios.post('', { message: input });
            const reply = response.data.reply;
            const replyMessage = [...newMessages, { text: reply, sender: 'assistant' }];  //asistanın cevabı
            setMessages(replyMessage); //mesajları güncelle ve ekranda göster
        } catch (error) {
            console.error('Error sending message', error);
        }
    };
    const handleKeyPress = (e) =>{
        if(e.key == 'Enter'){
            sendMessage();
        }
    };
    return (
        <div className='chat-wrapper'>
            <h2>SİZE NASIL YARDIMCI OLABİLİRİM ?</h2>
        <div>
        {messages.map((message, index) => (
            <div key={index} className={message.sender}>
                {message.text}
            </div>
        ))}
      </div>    
      <div>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={handleKeyPress} />
        <i className='icon' onClick={sendMessage}><FaArrowUp/></i>
      </div> 

     

        </div>
    )
}

export default Chat
