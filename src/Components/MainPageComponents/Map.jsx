import { useState } from "react";

const MapSection = () => {
  const [fullWidth, setFullWidth]= useState(false);
  const showfullwidth =(value)=>{
    setFullWidth(value);
  }
  return (
    <div className="relative mt-[30px] mb-[65px] w-full h-screen overflow-hidden">
    <div onMouseEnter={()=>showfullwidth(true)} onMouseLeave={()=>showfullwidth(false)} className='mx-[9%] mb-[36px] w-auto relative subhead'>
    <h1 className={`font-anton transition-all duration-500 font-bold text-[29px] md:text-[38px]`}>Reach Us</h1>
    <span className={`absolute left-0 duration-500 -bottom-1 h-[12px] md:h-[16px] ${fullWidth ? "w-[49px] " :"  md:w-[169px]"} z-[-1] transition-all bg-customGold`} ></span>
  </div>
   <iframe 
   className="w-full px-[10%] h-[550px]"
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.7008272500175!2d-122.8292256!3d49.13031679999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485dbb85b467a9b%3A0x2ae1e68bd294d849!2sMetro%20Vancouver%20spray%20foam!5e0!3m2!1sen!2sin!4v1712989321888!5m2!1sen!2sin" 
   allowFullScreen 
   loading="lazy" 
   referrerPolicy="no-referrer-when-downgrade">
   </iframe>
    </div>
  );
};

export default MapSection;
 