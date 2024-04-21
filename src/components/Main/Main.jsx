import React, { useContext, useEffect, useRef, useState } from 'react'
import { assets } from '../../assets/assets';
import { feature } from '../../assets/js/Feature';
import Card from '../Card';
import ChatContext from '../../Context/ChatContext';
import GeminiService from '../../Services/GeminiService';
import { markdown } from 'markdown';
const Main = () => {
    const promptText = useRef();
    const { chat, setChat } = useContext(ChatContext);
    const handleSend = async () => {
        try {
            if (promptText.current == null) return;
            const response = await GeminiService.runChat(promptText.current.value);
            console.log("response", response)
            setChat((prev) => {
                return [
                    ...prev, { promot_qustion: promptText.current.value, promot_answer: response }
                ]
            })
            console.log('chat', chat)
        } catch (err) {
            console.log(err);

        }
    }
    const handleEnterSend = (e) => {
        if (e.code !== "Enter") return;
        console.log(promptText)
        handleSend();
    }

    console.log(chat)
    return (
        <div className='min-h-screen w-full relative'>
            <nav className='px-8 py-2 flex justify-between items-center mb-8'>
                <p className='font-bold'>Gemini</p>
                <img src={assets.user_icon} className='w-12 rounded-full' alt="" />
            </nav>
            <div className='mx-5'>
                <div className='max-w-4xl m-auto overflow-y-scroll no-scrollbar' style={{ "height": "70vh" }}>
                    {
                        chat.length == 0 ?
                            <>
                                <div className="my-10">
                                    <p className='text-6xl font-bold text-gray-400 my-1'><span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-500'>Hello, User</span></p>
                                    <p className='text-6xl font-semibold text-gray-400 my-1'>How can I help you ?</p>
                                </div>
                                <div className="cards flex">
                                    {feature.map((item, index) => <Card key={index} src={item.src} text={item.text} />)}
                                </div>
                            </>
                            :
                            chat.map((ch, i) => {
                                return (
                                    <div key={i} className='chat-group mb-10'>
                                        <div className='user flex items-start'>
                                            <img src={assets.user_icon} className='w-12 rounded-full' alt="" />
                                            <p className='ml-3'>{ch.promot_qustion}</p>
                                        </div>
                                        <div className='gemini mt-4 flex items-start'>
                                            <img src={assets.gemini_icon} className='w-12 rounded-full' alt="" />
                                            <p className='ml-3 leading-8' dangerouslySetInnerHTML={{__html:markdown.toHTML(ch.promot_answer)}}></p>
                                        </div>
                                    </div>
                                )
                            })

                    }

                </div>

                <div className='max-w-4xl m-auto'>
                    <div className="absolute bottom-5 w-full max-w-4xl mx-auto">
                        <div className="serchbod flex justify-between w-full bg-gray-300 p-5 items-center rounded-full">
                            <input type="text" name="" id="" ref={promptText} onKeyUp={handleEnterSend} className=' bg-transparent w-full outline-none me-3' />
                            <div className="actions flex justify-between">
                                <img src={assets.gallery_icon} className='w-8 mx-1 hover: ' alt="" />
                                <img src={assets.mic_icon} alt="" className='w-8 mx-1' />
                                <img src={assets.send_icon} alt="" onClick={handleSend} className='w-8 mx-1' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main