import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
export default function Register() {

    const [username,Setusername] = useState('')
    const [password,Setpassword] = useState('')
    const [age,Setage] = useState(0)
    const [weight,Setweight] = useState(0) 
    const [height,Setheight] = useState(0)

    const handlesubmit = async(e)=>{
        e.preventDefault()
        try {
            
            const res = await axios.post('https://gymupp-api.onrender.com/api/user/register',{
                username,password,age,weight,height
            })
            console.log(res.data)
            toast('Registering....', {
                duration: 750,
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#d4af37',
                    background :'#040D12'
                  },
                icon: '🙏',
              });
            window.location.replace('/user/login')

        } catch (err) {
            toast('Please fill in the details carefully.', {
                duration: 1000,
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#d4af37',
                    background :'#040D12'
                  },
                icon: '🙏',
              });
        }
    }

  return (
    <div className=' min-h-screen bg-[#183D3D] flex justify-center items-center py-10'>
      <div className=' h-[600px] lg:w-96 w-80 bg-[#040D12] rounded-2xl p-5 flex flex-col justify-between items-center gap-5 py-5'>
        <h1 className='text-3xl lg:text-4xl font-[Cinzel] text-[#d4af37] text-center'>Register</h1>
        <input type="text" placeholder=' Enter username' className=' font-[Quicksand] lg:text-xl text-lg outline-none p-3 bg-[#a18527] text-black rounded-xl placeholder:text-blue-50' 
        onChange={(e)=>{Setusername(e.target.value)}} />
        <input type="password" placeholder=' Enter Password' className=' font-[Quicksand] lg:text-xl text-lg outline-none p-3 bg-[#a18527] text-black rounded-xl placeholder:text-blue-50'
        onChange={(e)=>{Setpassword(e.target.value)}} />
        <input type="text" placeholder=' Enter age' className=' font-[Quicksand] lg:text-xl text-lg outline-none p-3 bg-[#a18527] text-black rounded-xl placeholder:text-blue-50' 
        onChange={(e)=>{
            const check = e.target.value
            if(/^\d+$/.test(check))
            {
                if((check>13)&&(check<=80))
                Setage(parseInt(check))
                else
                toast('Your age must be between 14 to 80!', {
                    duration: 750,
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#d4af37',
                        background :'#040D12'
                      },
                    icon: '🙏',
                  });
            }
            else
            toast('How can your age be a text?', {
                duration: 750,
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#d4af37',
                    background :'#040D12'
                  },
                icon: '🤔',
              });
        }} />
        <input type="text" placeholder=' Enter Weight in Kgs' className=' font-[Quicksand] lg:text-xl text-lg outline-none p-3 bg-[#a18527] text-black rounded-xl placeholder:text-blue-50' 
         onChange={(e)=>{
            const check = e.target.value
            if(/^\d+$/.test(check))
            {
                if((check>40)&&(check<=140))
                Setweight(parseInt(check))
                else
                toast('Enter a valid weight', {
                    duration: 750,
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#d4af37',
                        background :'#040D12'
                      },
                    icon: '🙏',
                  });
            }
            else
            toast('Weight must be a number na?', {
                duration: 750,
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#d4af37',
                    background :'#040D12'
                  },
                icon: '🤔',
              });
        }} />
        <input type="text" placeholder=' Enter Height in cm' className=' font-[Quicksand] lg:text-xl text-lg outline-none p-3 bg-[#a18527] text-black rounded-xl placeholder:text-blue-50' 
        onChange={(e)=>{
            const check = e.target.value
            if(/^\d+$/.test(check))
            {
                if((check>13)&&(check<=80))
                Setheight(parseInt(check))
                else
                toast('Your height must be between 120cm to 225cm!', {
                    duration: 750,
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#d4af37',
                        background :'#040D12'
                      },
                    icon: '🙏',
                  });
            }
            else
            toast('Height must be not be text huh?', {
                duration: 750,
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#d4af37',
                    background :'#040D12'
                  },
                icon: '🤔',
              });
        }}/>
         <button className=' px-10 py-3 bg-[#183D3D] text-[#d4af37] font-[Poppins] rounded-xl hover:bg-[#112e2e]' onClick={handlesubmit}>Register</button>
         <a className='text-lg lg:text-xl font-[Cinzel] text-[#d4af37] hover:text-[#a08f59]' href='/user/login'>Already Registered? Login!</a>
        <Toaster  position="top-center"/>
      </div>
    </div>
  )
}
