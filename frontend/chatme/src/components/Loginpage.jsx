import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Loginpage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPass] = useState();
  const [loading, setLoading] = useState(false);

  const loginHandler = async () => {
    setLoading(true)
    if (!email || !password) {
      toast.warn("Please Enter you login Info!");
      return;
    }
    // console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      toast.success("Login Successful");
      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);
      navigate("/chats");

    } catch (error) {
      toast.error(`Error occured ${error.response.data.message}`);
      setLoading(false);
    }
    // 

  };
  return (
    <div className="w-full h-screen bg-slate-400 flex items-center justify-center bg-secondary">
      <div className="w-1/4 h-2/3 rounded-3xl flex justify-center items-center flex-col">
        <div name="loginform" className="flex flex-col justify-center bg-primary shadow-primary shadow-2xl gap-7 items-center w-full h-5/6 rounded-3xl">
          <h1 className="font-bold text-4xl pb-3">Login</h1>

          <input type="Email" onChange={(e) => { setEmail(e.target.value) }} className="outline-none p-3 w-4/5 rounded-lg h-14" placeholder="Email" required />

          <input type="password" onChange={(e) => { setPass(e.target.value) }} className="outline-none p-3 w-4/5 rounded-lg h-14" placeholder="Password" required />

          <div className="flex items-start w-3/4 text-sm">
            <p className="">New User! <Link to="/signup" className="cursor-pointer text-base">Create an Account</Link></p>
          </div>
          <button className="w-2/3 border h-12 rounded-2xl" onClick={loginHandler}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Loginpage;