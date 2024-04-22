import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const ContactUs = ({ alert, showAlert, hideAlert }) => {

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Yaman Goyal",
        from_email: form.email,
        to_email: "ByteWiizard@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setLoading(false);

      showAlert({ show: true, text: 'Message Sent Suucessfully!', type: 'success' })
      setTimeout(() => {
        setForm({ name: '', email: '', message: '' })
      }, [3000])

      setTimeout(() => {
        hideAlert();
      }, [3000])

      setForm({ name: '', email: '', message: '' });
      // TODO show success message
      // TODO Hide an alert
    }).catch((err) => {
      console.log(err);
      setLoading(false);
      showAlert({ show: true, text: `I ${`didn't`} receive your message please try again in some time`, type: 'danger' })
      setTimeout(() => {
        hideAlert();
      }, [3000])

      setTimeout(() => {
        setForm({ name: '', email: '', message: '' })
      }, [3000])

    })

  }

  const [fullWidth, setFullWidth] = useState(false);

  const showfullwidth = (value) => {
    setFullWidth(value);
  }


  return (
    <div id='contact' className='flex flex-row justify-center md:justify-between md:flex-col '>
      <section className='relative flex lg:flex-row flex-col w-full mx-[9%] '>
        <div className='flex-1 '>
          <div onMouseEnter={() => showfullwidth(true)} onMouseLeave={() => showfullwidth(false)} className='mb-[16px] w-auto relative subhead'>
            <h1 className={`font-anton transition-all duration-500 font-bold text-[29px] md:text-[38px]`}>Get in touch</h1>
            <span className={`absolute left-1 duration-500 -bottom-1 h-[12px] md:h-[16px] ${fullWidth ? "w-[49px] " : "  w-[167px] md:w-[215px]"} z-[-1] transition-all bg-customGold`} ></span>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='border-b-[2px] md:border-b-0 pb-8 md:pb-0 border-r-0 md:border-r-[2px] border-black  border-opacity-80'>
              <form
                onSubmit={HandleSubmit}
                className='flex flex-col w-[90%] gap-7 mt-14'
              >
                <label className='text-black font-semibold '>Name</label>
                <input
                  type='text'
                  name='name'
                  className='bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-normal'
                  placeholder='Your Full Name'
                  value={form.name}
                  onChange={handleChange}

                />

                <label className='text-black font-semibold '>Email</label>
                <input
                  type='email'
                  name='email'
                  className='bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-normal'
                  placeholder='Enter email address'
                  value={form.email}
                  onChange={handleChange}

                />

                <label className='text-black font-semibold '>Message</label>
                <textarea
                  name='message'
                  rows='4'
                  className='block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-400 focus:ring-blue-500 focus:border-blue-500 font-normal'
                  placeholder='Message'
                  value={form.message}
                  onChange={handleChange}

                />

                <button
                  type='submit'
                  className='text-white font-semibold  hover:opacity-95  border-2 border-black bg-gradient-to-r from-[#b4a058] to-[#000000] focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                  disabled={loading}
                >
                  {loading ? 'Sending' : ' Send Message'}
                </button>
              </form>
            </div>
            <div className='ml-[9%] mt-[16px] md:mt-0'>
              <p className='text-[21px] md:text-[26px] font-sedan font-[700] '>Quick connect</p>
              <Link to="mailto:metrovancouversprayfoam@gmail.com"> <div className='flex items-center mt-[21px]'>
                <IoMdMail /> <span className='ml-[15px] text-customGold font-[500] text-[12px] md:text-[16px]'>metrovancouversprayfoam@gmail.com</span>
              </div></Link>
              <Link to="tel:17789922501"> <div className='flex items-center mt-[25px]'>
                <FaPhone /> <span className='ml-[15px] text-customGold font-[500] text-[12px] md:text-[16px]'>+1 (778) 992-2501</span>
              </div></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

}

export default ContactUs