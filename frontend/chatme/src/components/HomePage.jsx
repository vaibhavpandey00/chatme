import React from 'react'
import Loginpage from './Loginpage'
import Signuppage from './Signuppage'

const HomePage = () => {
  return (
    <div className="w-full h-screen bg-slate-400 flex items-center justify-center bg-secondary">
      <div className="w-1/4 h-2/3 rounded-3xl flex justify-center items-center flex-col">
        <Loginpage />
      </div>
    </div>
  )
}

export default HomePage