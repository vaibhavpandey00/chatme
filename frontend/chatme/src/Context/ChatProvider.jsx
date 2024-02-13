import { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const [currentuser, setCurrentuser] = useState({});

    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    // console.log(userInfo);

    useEffect(() => {
        setCurrentuser(userInfo);
    }, [])

    return (
        <ChatContext.Provider value={{ currentuser, setCurrentuser }}>
            {children}
        </ChatContext.Provider>
    )
};

export const ChatState = () => {
    return useContext(ChatContext);
}

export default ChatProvider;
