import React from 'react';
import { ValidationError, useForm } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);
  if (state.succeeded) {
    return (
      <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 p-3">
        Thank you for for getting in touch! <br/> We will get back to you as soon as possible.
      </div>
    );
  }

  return (
    <section id="Contact" className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-y-10 md:grid-cols-1 md:gap-x-20 relative">
          <MyForm handleSubmit={handleSubmit} state={state} />
        </div>
      </div>
    </section>
  );
}

export default Contact;

function MyForm({ handleSubmit, state }) {
  return (
    <>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email">
              Email Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="email"
              placeholder="your_address@email.com"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="message">
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              disabled={state.submitting}
              className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-acblue-light hover:bg-acblue-dark focus:bg-acblue-dark"
              type="submit">
              Send
            </button>
          </div>
          <ValidationError errors={state.errors} />
        </div>
      </form>
    </>
  );
}
