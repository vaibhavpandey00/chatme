import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Signuppage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPass] = useState();
  const [confirmPass, setConfirmpass] = useState();
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(false);

  const postImage = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast.warn("Please select an Image");
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png" || pics.type === "image/jpg") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Chatmi-App");
      data.append("cloud_name", "vaibhavpandey0");
      fetch("https://api.cloudinary.com/v1_1/vaibhavpandey0/image/upload", {
        method: "post",
        body: data
      }).then((res) => res.json()).then((data) => {
        setPic(data.url.toString());
        console.log(data.url.toString());
        setLoading(false);
      }).catch((err) => {
        console.log(err);
        setLoading(false);
      });
    }
    else {
      toast.warn("Please select an Image!");
      setLoading(false);
    }
  }

  const submitHandler = async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmPass) {
      toast.warn("Please Fill all the Fields!");
      setLoading(false);
      return;
    }
    if (password !== confirmPass) {
      toast.warn("Confirm Password does'nt match");
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post("/api/user", { name, email, password, pic }, config);
      toast.success("Registration Successful");
      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(`Error occured ${error.response.data.message}`);
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-screen bg-slate-400 flex items-center justify-center bg-secondary">
      <div className="w-1/4 h-3/4 rounded-3xl flex justify-center items-center flex-col">
        <div name="loginform" className="flex flex-col justify-center bg-primary shadow-primary shadow-2xl gap-7 items-center w-full h-full rounded-3xl">
          <h1 className="font-bold text-4xl pb-3">Sign Up</h1>

          <input type="text" onChange={(e) => { setName(e.target.value) }} className="outline-none p-3 w-4/5 rounded-lg h-14" placeholder="User Name" />

          <input type="email" onChange={(e) => { setEmail(e.target.value) }} className="outline-none p-3 w-4/5 rounded-lg h-14" placeholder="Email" />

          <input type="password" onChange={(e) => { setPass(e.target.value) }} className="outline-none p-3 w-4/5 rounded-lg h-14" placeholder="Password" />

          <input type="text" onChange={(e) => { setConfirmpass(e.target.value) }} className="outline-none p-3 w-4/5 rounded-lg h-14" placeholder="Confirm Password" />

          <label className="outline-none p-3 w-4/5 rounded-lg h-14 cursor-pointer flex justify-center items-center bg-White"> Select Profile Image
            <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={(e) => postImage(e.target.files[0])} className="outline-none p-3 w-4/5 rounded-lg h-14" hidden />
          </label>

          <div className="flex items-start w-3/4 text-sm">
            <p className="">Already have an Account! <Link to="/" className="cursor-pointer text-base">Login</Link></p>
          </div>
          <button className="w-2/3 border h-12 rounded-2xl" onClick={submitHandler}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Signuppage;