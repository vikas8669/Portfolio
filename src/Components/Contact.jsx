import React from "react";
import social from "../assets/social.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import Lottie from "lottie-react";
import contact from "../assets/Contact.json";
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
import { toast } from "react-toastify";




const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
    

    emailjs
      .sendForm('service_vcxjqk6', 'template_t6pwuzs', form.current, {
        publicKey: 'X-bRY407MQ_aHmy33',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success(' Email Send succssesfully!')
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('something Went wrong! ')
        },
      );
  };
  return (
    <section
      id="contact"
      className="z-50 bg-gray-800 relative py-10 px-5 md:px-0"
    >
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">
              Get in Touch
            </h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free
              to reach out!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/___bomx/"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={instagram} alt="" className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/vikas8669"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={social} alt="" className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/vikas-kumar-17595a226/"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={linkedin} alt="" className="h-6 w-6" />
              </a>
            </div>
            <Lottie
              animationData={contact}
              className="w-[350px] mx-auto lg:w-[500px]"
            />
          </div>
          <form ref={form} onSubmit={sendEmail} className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10">
            <h1 className="text-gray-900 text-4xl font-bold mb-7"> Contact Me</h1>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                   Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                name="from_name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="from_email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter Your Message"
                name="message"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <button onSubmit={sendEmail} className="bg-red-500 text-white px-3 py-2 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
