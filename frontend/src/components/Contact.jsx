import React, { useState } from 'react';
import { MdEmail, MdLocationOn, MdPhone, MdPublic } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';

const Contact = ({contactData}) => {
 

  const getIcon = (key) => {
    switch(key) {
      case 'location': return <MdLocationOn className="text-xl" />;
      case'mobile': return <MdPhone className="text-xl" />;
      case'email': return <MdEmail className="text-xl" />;
      case'instagram': return <FaInstagram className="text-xl" />;
      default: return <MdPublic className="text-xl" />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-green-400  text-black lg:px-30">
      <div className=" px-6 py-12  lg:mx-30">
        

        <div className="grid grid-cols-1 lg:gap-x-150   md:grid-cols-2 mb-12 ">
          {Object.entries(contactData).map(([key, value]) => (
            <div 
              key={key} 
              className="flex   mb-2 rounded-lg "
            >
              <div className="p-2 bg-opacity-20  text-black rounded-full">
                {getIcon(key)}
              </div>
              <div>
                <h3 className="text-lg text-black font-semibold capitalize">{key}
                </h3>
                <p className="text-black text-opacity-90">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-black  pt-8 text-center">
          <p className="text-black ">
            © 2025  Aliado. All Rights Reserved.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Contact;