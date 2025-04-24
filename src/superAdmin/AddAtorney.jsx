import React from 'react';
import './AddAtorney.css'

const AddAtorney = () => {
    return (
        <div>
            <div className="container">
                <h3> <span> Add </span>  User</h3>
                       <div className="d-flex gap-4 padding32">
                            <div className="">
                                <label className='d-block' htmlFor=""> First Name </label>
                                <input type="text" placeholder='Kristine Lemke Josef' />
                            </div>

                             <div className="">
                                <label className='d-block' htmlFor=""> Last Name </label>
                                <input type="text" placeholder='Kristine Lemke Josef' />
                            </div>
                       </div>

                        <div className="d-flex gap-4 padding32">
                            <div className="">
                                <label className='d-block' htmlFor=""> Email </label>
                                <input type="email" placeholder='Kristine Lemke Josef' />
                            </div>
                        
                            <div className="">
                                <label className='d-block' htmlFor=""> Category </label>
                           
                                <select className='d-block' name="" id="" >
                                    <option value="lore">lore</option>
                                    <option value="fsdfjdk">fsdfjdk</option>
                                    <option value="akd">akd</option>
                                    <option value="alsd">alsd</option>
                                </select>
                            </div>
                        </div>

                        <div className="padding32">
                            <label className='d-block' htmlFor=""> Country </label>
                           <select name="" id="">
                                <option value="">cairo</option>
                                <option value="">egypt</option>
                                <option value="">alex</option>
                                <option value="">fayoum</option>
                           </select>
                        </div>

                        <div className="d-flex flex-sm-row-reverse">
                            <button className='btnn btn1'>Save</button>
                            <button className='btnn btn2'>Cancel</button>
                        </div>
            </div>
        </div>
    );
}

export default AddAtorney;
