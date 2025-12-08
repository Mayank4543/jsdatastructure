
const ContactForm = () => {
    return (
        // <section className="bg-orange-100 py-20 px-4" id="contact">
        //   <div className="max-w-7xl mx-auto text-center">
        //     <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Get In Touch</h2>
        //     <p className="text-gray-600 max-w-2xl mx-auto mb-14">
        //       Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        //     </p>

        //     <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md md:shadow-xl">
        //       <form className="flex flex-col gap-5">
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        //           <input
        //             type="text"
        //             placeholder="Your Name"
        //             className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        //             required
        //           />
        //           <input
        //             type="email"
        //             placeholder="Your Email"
        //             className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        //             required
        //           />
        //         </div>
        //         <input
        //           type="text"
        //           placeholder="Subject"
        //           className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        //           required
        //         />
        //         <textarea
        //           placeholder="Your Message"
        //           rows={6}
        //           className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
        //           required
        //         ></textarea>
        //         <button
        //           type="submit"
        //           className="bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 hover:shadow-lg transition-all duration-200"
        //         >
        //           Send Message
        //         </button>
        //       </form>
        //     </div>
        //   </div>
        // </section>
        <section className="bg-orange-100 py-20 px-4 " id="contact">
            <div className="max-w-7xl mx-auto text-center ">
                <h2 className=" font-extrabold text-4xl mb-4 text-gray-800">Get IN Touch </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-2xl"> Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                <div className="mx-auto bg-white max-w-2xl p-8 rounded-xl shadow md:shadow-xl ">
                    <form className=" flex flex-col gap-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input type="text" placeholder=" Your Name.." className="border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg border-gray-300 px-4 py-3 bg-amber-100" required/>

                            <input type="email" placeholder=" Your Email.." className="border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg border-gray-300 px-4 py-3 bg-amber-100" required />
                        </div>
                        <input type="text" placeholder="Your Subject.." className="border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg border-gray-300 px-4 py-3 bg-amber-100" required />

                        <textarea type="text" placeholder="Your Message.." className="border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg border-gray-300 px-4 py-3 bg-amber-100" required />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 hover:shadow-lg transition-all duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
