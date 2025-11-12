import emailjs from '@emailjs/browser';
import React, { useRef } from "react";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_06icaaw",
                "template_sn2aqvl",
                form.current,
                "H_kfp2rcurxAsfvin"
            )
            .then(
                () => {
                    alert("Message sent successfully ✅");
                    e.target.reset();
                },
                (error) => {
                    alert("Failed to send message ❌: " + error.text);
                }
            );
    };

    return (
        <div id="contact" className="flex justify-center items-center py-16 px-6">
            <form
                ref={form}
                onSubmit={sendEmail}
                className="w-full max-w-md bg-black shadow-lg rounded-2xl p-6 flex flex-col space-y-4"
            >
                <h2 className="text-2xl font-bold text-mygreen text-center mb-2">Let's talk !</h2>

                <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="p-3 border border-mygreen rounded-md focus:outline-none focus:ring-2 focus:ring-green-hover"
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="p-3 border border-mygreen rounded-md focus:outline-none focus:ring-2 focus:ring-green-hover"
                />


                <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="p-3 border border-mygreen rounded-md focus:outline-none focus:ring-2 focus:ring-green-hover"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                    className="p-3 border border-mygreen rounded-md focus:outline-none focus:ring-2 focus:ring-green-hover"
                />

                <button
                    type="submit"
                    className="bg-mygreen text-white font-semibold py-2 rounded-md hover:bg-green-hover transition-colors"
                >
                    Send Message
                </button>
              <h2 className="text-2xl font-bold text-mygreen text-center mb-2">or</h2>
            <h2 className='text-center text-red-400'>yosefamr2002@icloud.com</h2>
            </form>
        </div>
    );
}

export default Contact;
