import React from 'react'
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import '../css/contact.css'

const Contact = () => {
    return (
        <div className='contact_container'>
            <div className='direct_contact'>
                <div className='flex flex-col lg:flex-row items-center justify-between items'>
                    <div className='flex items-center'>
                        <MdOutlineEmail size={20} /> <span>vipulkumar0067@gmail.com</span>
                    </div>
                    <div className=' ml-3 flex items-center'>
                        <FaPhoneAlt size={20} /> <span>8279988518</span>
                    </div>
                </div>
                <div className='flex irems-center item'>

                </div>
                <div>
                    <div className='social_links flex'>
                        <Link className='link hover:scale-125 duration-200 hover:stroke-blue-500' to='https://www.linkedin.com/in/vipulkumar6/' target='_blank'><FaLinkedinIn /></Link>
                        <Link className='link hover:scale-125 duration-200 hover:stroke-blue-500' to='https://github.com/vipulkumar6' target='_blank'><VscGithubAlt /></Link>
                        <Link className='link hover:scale-125 duration-200 hover:stroke-blue-500' to='https://x.com/vipulkumar66' target='_blank'><FaXTwitter /></Link>
                    </div>
                </div>

            </div>

            <hr className='divider' />
            <div className='flex inputs'>
                <Input className='input input1' type="name" label="Email" size='md' />

                <Input className='input' type="email" label="Email" size='md' />

            </div>
            <div>
                <Textarea

                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                    className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                />
            </div>
            <div>
                <Button className='submit_btn' radius="none">
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default Contact
