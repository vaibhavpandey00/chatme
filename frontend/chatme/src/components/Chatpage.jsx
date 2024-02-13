import React, { useEffect, useContext } from 'react'
import { ChatState } from '../Context/ChatProvider';
import { useNavigate } from "react-router-dom";

const Chatpage = () => {

    const navigate = useNavigate();
    const { currentuser } = ChatState();

    // console.log(currentuser);

    useEffect(() => {
        // Check if currentuser is not null (i.e., user is logged in)
        console.log(currentuser);
        if (!currentuser) {
            navigate('/');
        }
    }, [currentuser, navigate]);


    return (
        <div className="w-full h-screen bg-gray flex items-center justify-center">
            <div className="w-3/4 h-4/5 flex justify-center items-center bg-lightWhite border rounded-3xl">
                <div className="h-full w-1/4 rounded-3xl bg-lightWhite">1</div>
                <div className="h-full w-3/4 rounded-3xl bg-lightWhite2 border ">2</div>
            </div>
        </div>
    );
}

export default Chatpage;

// // fetch("http://localhost:5757/api/chat")
// //     .then((res) => res.json())
// //     .then((chat) => setChat(chat))
// //     .catch((err) => console.log(err));
