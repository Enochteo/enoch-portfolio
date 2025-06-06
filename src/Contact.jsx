const Contact = () => {
    return (
      <section id="contact" className="bg-white dark:bg-gray-900 py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-cyan-300 mb-6">📬 Contact Me</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Have a question, opportunity, or just want to connect? Send me a message!
          </p>
  
          <form
            action="https://formsubmit.co/enochowoade@gmail.com"
            method="POST"
            className="space-y-4"
          >
            {/* ✅ Hidden fields */}
            <input type="hidden" name="_next" value="https://enochsportfolio.netlify.app/thank-you.html" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_autoresponse" value="Thanks for reaching out! I’ll get back to you soon. 😊" />
  
            {/* ✅ Styled Inputs */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
   
