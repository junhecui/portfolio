import React from 'react';

const Contact = () => (
  <section id="contact" className="py-16 bg-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name:</label>
          <input className="w-full px-3 py-2 border rounded-lg" type="text" id="name" name="name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email:</label>
          <input className="w-full px-3 py-2 border rounded-lg" type="email" id="email" name="email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message:</label>
          <textarea className="w-full px-3 py-2 border rounded-lg" id="message" name="message"></textarea>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" type="submit">Submit</button>
      </form>
    </div>
  </section>
);

export default Contact;
