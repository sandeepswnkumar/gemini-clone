import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const Sidebar = () => {

    const [menuExtended, setMenuExtended] = useState(true)
    return (
        <div className='sidebar h-screen bg-gray-200 inline-flex flex-col justify-between p-5'>
            <div className="top">
                <img src={assets.menu_icon} alt="" onClick={() => setMenuExtended(prev => !prev)} className="menu w-6" />
                <div className="new-chat rounded-3xl mt-12 bg-gray-400 flex py-2 px-3">
                    <img src={assets.plus_icon} className='w-3 mr-4' alt="" />
                    {menuExtended ? <p className='text-gray'>New chat</p> : null}
                </div>
                <div className="recent">
                    <h5 className='recent-title text-gray mt-8 mb-4'>Recent</h5>
                    <div className="recent-entry flex hover:bg-gray-300 p-3 rounded-3xl cursor-pointer">
                        <img src={assets.message_icon} className='w-6 mr-4' alt="" />
                        {menuExtended ? <p className='text-gray'>What is react...</p> : null}
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-items flex my-3 hover:bg-gray-300 p-3 rounded-3xl cursor-pointer">
                    <img src={assets.question_icon} className='w-6 mr-4' alt="" />
                    {menuExtended ? <p className='text-gray'>Help</p> : null}
                </div>
                <div className="bottom-items flex my-3 hover:bg-gray-300 p-3 rounded-3xl cursor-pointer">
                    <img src={assets.history_icon} className='w-6 mr-4' alt="" />
                    {menuExtended ? <p className='text-gray'>Activity</p> : null }
                </div>
                <div className="bottom-items flex my-3 hover:bg-gray-300 p-3 rounded-3xl cursor-pointer">
                    <img src={assets.setting_icon} className='w-6 mr-4' alt="" />
                    {menuExtended ? <p className='text-gray'>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar