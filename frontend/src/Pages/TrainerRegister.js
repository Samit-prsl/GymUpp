import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
export default function TrainerRegister() {

    const [username,Setusername] = useState()
    const [password,Setpassword] = useState()
    const [exp,Setexp] = useState(0)
    const [special,Setspecial] = useState() 
    const [phone,Setphone] = useState(0)
    const [loading,Setloading] = useState(false)

    const handlesubmit = async(e)=>{
        e.preventDefault()
        try {
            
          Setloading(true)
          toast('Registering....', {
            style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#d4af37',
                background :'#183D3D'
              },
            icon: '🙏',
          });
            const res = await axios.post('https://gymupp-api.onrender.com/api/trainer/register',{
                username,password,exp,special,phone
            })
            console.log(res.data)
            window.location.replace('/trainer/login')

        } catch (err) {

            Setloading(false)
            toast('Please fill in the details carefully.', {
                duration: 1000,
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#d4af37',
                    background :'#183D3D'
                  },
                icon: '🙏',
              });
        }
    }

  return (
    <div className=' min-h-screen bg-[#040D12] flex justify-center items-center py-10'>
      <div className=' h-[600px] lg:w-96 w-80 bg-[#0d3333] rounded-2xl p-5 flex flex-col justify-between items-center gap-5 py-5'>
        <h1 className='text-3xl lg:text-4xl font-[Cinzel] text-[#d4af37] text-center'>Register</h1>
        <input type="text" placeholder=' Enter username' className=' font-[Quicksand] lg:text-xl text-lg outline-none p-3 bg-[#a18527] text-black rounded-xl placeholder:text-blue-50' 
        onChange={(e)=>{Setusername(e.target.value)}} />
        <input type="password" placeholder=' Enter Password' className=' font-[Quicksand] lg:text-xl text-lg outline-none p-3 bg-[#a18527] text-black rounded-xl placeholder:text-blue-50'
        onChange={(e)=>{Setpassword(e.target.value)}} />
        <input type="text" placeholder=' Enter years of experience' className=' font-[Quicksand] lg:text-xl text-lg outline-none p-3 bg-[#a18527] text-black rounded-xl placeholder:text-blue-50' 
        onChange={(e)=>{
            const check = e.target.value
            if(/^\d+$/.test(check))
            {
                if((check>0)&&(check<=30))
                Setexp(parseInt(check))
                else
                toast('Your Valid years of experience', {
                    duration: 750,
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#d4af37',
                        background :'#183D3D'
                      },
                    icon: '🤔',
                  });
            }
            else
            toast('Dont type text here', {
                duration: 750,
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#d4af37',
                    background :'#183D3D'
                  },
                icon: '🙏',
              });
        }} />
        <input type="text" placeholder=' Your speciality' className=' font-[Quicksand] lg:text-xl text-lg outline-none p-3 bg-[#a18527] text-black rounded-xl placeholder:text-blue-50' 
        onChange={(e)=>{Setspecial(e.target.value)}}/>
        <input type="text" placeholder=' Enter valid phone number' className=' font-[Quicksand] lg:text-xl text-lg outline-none p-3 bg-[#a18527] text-black rounded-xl placeholder:text-blue-50' 
        onChange={(e)=>{
            const check = e.target.value
            if(/^\d+$/.test(check))
            {
                if((check>6000000000)&&(check<=9999999999))
                Setphone(parseInt(check))
                else
                toast('Please provide a valid phone number!', {
                    duration: 750,
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#d4af37',
                        background :'#183D3D'
                      },
                    icon: '🤔',
                  });
            }
            else
            toast('Dont type text!!', {
                duration: 750,
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#d4af37',
                    background :'#183D3D'
                  },
                icon: '🙏',
              });
        }}/>
         <button className={` px-10 py-3 bg-[#040D12] text-[#d4af37] font-[Poppins] rounded-xl hover:bg-[#0d1b22] ${loading ? 'cursor-not-allowed':'cursor-pointer'}`} onClick={handlesubmit}>Register</button>
         <a className='text-lg lg:text-xl font-[Cinzel] text-[#d4af37] hover:text-[#a08f59]' href='/trainer/login'>Already Registered? Login!</a>
        <Toaster  position="top-center"/>
      </div>
    </div>
  )
}
