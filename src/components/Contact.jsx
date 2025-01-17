import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="lg:flex justify-evenly items-center mt-12">
        <div>
          <form
            action=""
            className="text-sm font-light text-[#948c94] mx-5 lg:mx-0"
          >
            <p className="my-3">
              <label htmlFor="">Your Name </label> <br />
              <span>
                <input
                  type="name"
                  className="py-3 border border-gray-300 lg:w-96 w-full"
                />
              </span>
            </p>

            <p className="my-3">
              <label htmlFor="">Your Email </label> <br />
              <span>
                <input
                  type="name"
                  className="py-3 border border-gray-300 lg:w-96 w-full"
                />
              </span>
            </p>
            <p className="my-3">
              <label htmlFor="">Mobile </label> <br />
              <span>
                <input
                  type="name"
                  className="py-3 border border-gray-300 lg:w-96 w-full"
                />
              </span>
            </p>
            <p className="my-3">
              <label htmlFor="">Buy/Rent </label> <br />
              <span>
                <input
                  type="name"
                  className="py-3 border border-gray-300 lg:w-96 w-full"
                />
              </span>
            </p>
            <p className="my-3">
              <label htmlFor="">Message (optional) </label> <br />
              <span>
                <textarea
                  type="name"
                  rows={5}
                  className="py-3 border border-gray-300 lg:w-96 w-full "
                ></textarea>
              </span>
            </p>

            <button className=" px-6 py-3 text-white bg-[#3d83c0] hover:bg-[#2a679c]">
              Send Enquiry
            </button>
          </form>
        </div>
        <iframe
          className="lg:w-[600px] lg:h-[450px] w-full h-56 mb-10 lg:mb-0 px-5 mt-10 lg:mt-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.74893667879!2d77.3260048!3d28.5355161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff1f1d9e5b3%3A0x2b8f1e9e8b8e8e8e!2sNoida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
