import { MdClose } from "react-icons/md";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const CallbackForm = ({
  closeModel,
  productName,
  productPrice,
  productOption,
}) => {
  const form = useRef();

const YOUR_SERVICE_ID = "service_k5c4ve4";
const YOUR_TEMPLATE_ID = "template_p2xfqxv";
  const YOUR_PUBLIC_KEY = "PwVRsDa4N8r2BCFb2";
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    form.current.reset();
    closeModel(true);
  };

  return (
    <>
      <div className="fixed left-0 right-0 bottom-0 top-0 bg-slate-400 bg-opacity-50 backdrop-blur-sm"></div>
      <div className="fixed lg:w-3/12 w-10/12 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg">
        <form ref={form} onSubmit={sendEmail}>
          <div className="lg:mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name <span className="text-black">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="user_name"
              placeholder="Name"
              required
            />
            <input
              id="name"
              type="hidden"
              name="productName"
              value={productName}
            />
            <input
              id="price"
              type="hidden"
              name="productPrice"
              value={productPrice}
            />
            <input
              id="option"
              type="hidden"
              name="productOption"
              value={productOption} />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email <span className="text-black">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone <span className="text-black">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Phone"
              name="user_number"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="quantity"
            >
              Product Quantity <span className="text-black">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity"
              type="number"
              min={1}
              max={10}
              name="user_product_quantity"
              placeholder="Product Quantity"
              required
            />
          </div>

          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="option"
            >
              Option <span className="text-black">*</span>
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              id="option"
              name="user_option"
              required
            >
              <option value="">Select an option</option>
              <option value="buy" className="text-gray-700">
                Buy
              </option>
              <option value="rent" className="text-gray-700">
                Rent
              </option>
            </select>
          </div> */}

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message (Optional)
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Message"
              name="message"
              rows={4}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              value="Send"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>

        <MdClose
          className="absolute top-0 right-0 cursor-pointer hover:bg-red-500 overflow-auto rounded-tr"
          onClick={closeModel}
          size={25}
        />
      </div>
    </>
  );
};

export default CallbackForm;
