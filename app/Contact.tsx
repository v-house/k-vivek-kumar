"use client";

import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <section id="contact" className="my-12 py-12">
      <div className="text-2xl lg:text-4xl text-center font-mono font-extrabold">
        Lets Collaborate
      </div>
      <div className="flex my-12">
        <div className="w-1/2"></div>
        <div className="w-1/2 p-6">
          <div className="w-full">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-4 flex items-center justify-start space-x-4">
                <div className="text-2xl">{"~"}</div>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Your Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-slate-300 py-1 focus:outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block font-semibold mb-2">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
