import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useDispatch } from "react-redux";
import { closeshow } from "../utils/Slice";

const Contact = () => {

  const dispatch=useDispatch();
  dispatch(closeshow());
  const [state, handleSubmit] = useForm("mleywobp");
  if (state.succeeded) {
    return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center rounded-xl">
      <div className="bg-white p-8 rounded shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-4">Form Submitted!</h1>
        <p className="text-lg text-gray-600 text-center">
          Thank you for submitting the form. We'll get back to you shortly.
        </p>
      </div>
    </div>
  );
  }
  return (

    <div 
    className='relative py-28 bg-gray-900'
    >

    <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <h3 className="text-cyan-400 font-semibold">Contact</h3>
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Get in touch
          </p>
          <p className="text-gray-300">
            We’d love to hear from you! Please fill out the form bellow.
          </p>
        </div>
        <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
          <form 
          onSubmit={handleSubmit} 
          className="space-y-5">
            <div>
              <label className="font-medium">Full name</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />

            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                id="email"
                name="email"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
              <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            </div>
            <div>
              <label className="font-medium">Phone number</label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                  <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                    <option>US</option>
                    <option>IN</option>
                    <option>ES</option>
                    <option>MR</option>
                  </select>
                </div>
                <input
                  type="number"
                  placeholder="+91 755-598-4961"
                  required
                  id="number"
                  name="number"
                  className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
                <ValidationError
                prefix="Number"
                field="number"
                errors={state.errors}
              />
              </div>
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                required
                id="message"
                name="message"
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              ></textarea>
              <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            </div>
            <button 
            type="submit" 
            disabled={state.submitting}
            className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </div>

    //   <form
      // className='flex'
      // onSubmit={handleSubmit}
    //   >

      // <label htmlFor="email">
      //   Email Address
      // </label>

      // <input
      //   id="email"
      //   type="email"
      //   name="email"
      // />
      // <ValidationError
      //   prefix="Email"
      //   field="email"
      //   errors={state.errors}
      // />
    //   <textarea
    //     id="message"
    //     name="message"
    //   />
    //   <ValidationError
    //     prefix="Message"
    //     field="message"
    //     errors={state.errors}
    //   />
      // <button type="submit" disabled={state.submitting}>
      //   Submit
      // </button>
    // </form>
  );
};

export default Contact;
