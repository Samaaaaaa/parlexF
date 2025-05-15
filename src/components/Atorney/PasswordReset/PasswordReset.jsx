import React from 'react';
import './PasswordReset.module.css'

const PasswordReset = () => {
    return (
        <div>
            <div className="container">
                
                    <h1 className=''> <img src="/public/Frame.svg" alt="" /> Barlex</h1>
                    <h3>Hi [ first name ],</h3>

                    <div className="">
                        <p className='gap44'>Welcome to Barlex! <br /> <br /> You're just one step away from getting started. To activate your account, please set up <br /> your password by clicking the button below:</p>
                        <button>Create My Password <img src="/public/SVGRepo_iconCarrier.svg" alt="" /> </button>
                        <p className='gap16' >Once your password is set, you'll be able to:</p>
                        <div className="">
                            <p> <img className='bg' src="/public/right.svg" alt="" /> Customize your experience and manage your services.</p>
                            <p> <img className='bg' src="/public/right.svg" alt="" /> Connect with your audience effortlessly.</p>
                         <p> <img className='bg' src="/public/right.svg" alt="" /> Access your account and start using our platform.</p>
                      </div>
                         <p>Looking forward to having you on board!</p>
                    </div>
                    <p className='gap44'>Thanks, <br /> Barlex team </p>
                 
               

            </div>
        </div>
    );
}

export default PasswordReset;
