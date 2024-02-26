import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gwm7rwn', 'template_3u4u4qg', form.current, {
        publicKey: 'DaS-YNptUoBi0y1RW',
      })
      .then(
        (result) => {
            console.log(result.text)
          console.log('SUCCESS!');
          alert("message has been sent!");

          e.target.reset();
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },

      );
      
  };
   
    return (
    <div  id='contact' className=' m text-white mx-auto font-custom text-center bg-[] gap-4 mt-[10%] w-[75%]'>
    <div  className='text-4xl p-4 font-bold' >
                  Contact Me</div>
    <form ref={form} onSubmit={sendEmail}> 
          <div className=' flex flex-col  w-[100%] md:w-1/2 border border-solid border-black
           bg-[#101e35]  shadow-custom rounded-xl mx-auto gap-5 p-3'>

                <div className='flex flex-col items-start'>
                <label className=' text-sm font-semibold text-[#8f7deb]'>Name</label>
                <input className=' text-xl p-2 w-full outline-none rounded-xl bg-transparent border border-solid border-black' name='user_name' placeholder='Your Name'></input>
                </div>


                <div className='flex flex-col items-start'>
                <label  className='text-sm font-semibold first-line:text-[#8f7deb]'>Email</label>
                <input className='text-xl p-2 w-full outline-none rounded-xl bg-transparent border border-solid border-black' name='user_email'   placeholder=' Your Email-ID'></input>
                </div>

                <div className='flex flex-col items-start'>
                <label  className='text-sm font-semibold  text-[#8f7deb]'>Subject</label>
                <input className='text-xl p-2 w-full outline-none rounded-xl bg-transparent border border-solid border-black' name='subject' type= 'text' placeholder='Your Subject'></input>
                </div>
               
                <div className='flex flex-col items-start'>
                <label  className='text-sm font-semibold text-[#8f7deb]'>Message</label>
                <textarea className='text-xl p-2 w-full outline-none rounded-xl bg-transparent border border-solid border-black' name='message' placeholder='Enter Message'></textarea>
                </div>

                <div>
                      <button className='border font-bold border-solid border-black rounded-lg p-2 bg-transparent text-[#8f7deb]' type="submit" value="Send">Submit</button>
                </div>
          </div>
    </form>
    <div className='text-sm p-3  text-white font-extralight  mt-[10%]'>Built by 
     <span className=' text-[#8f7deb]'> @Sukhpreet   Singh</span> </div>
  </div>
  )
}
