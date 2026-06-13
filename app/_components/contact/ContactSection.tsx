"use client";
import { FormEvent, useState, ChangeEvent } from "react";
import { FormData } from "@/app/_types";

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted Successfully:", formData);
  };

  return (
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 bg-brand-peach rounded-2xl p-8 sm:p-16 lg:p-24 overflow-hidden">
          <div className="flex flex-col justify-center text-white lg:w-1/2">
            <h1 className="text-4xl font-medium tracking-wide mb-6 md:text-5xl">
              Contact Us
            </h1>
            <p className="text-sm leading-relaxed md:text-base opacity-90 max-w-md">
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center space-y-6 lg:w-1/2 w-full"
          >
            <div className="relative w-full">
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full bg-transparent border-b border-white border-opacity-60 py-4 px-4 text-white text-sm placeholder-white placeholder-opacity-70 focus:outline-none focus:border-opacity-100 transition-colors"
              />
            </div>

            <div className="relative w-full">
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white border-opacity-60 py-4 px-4 text-white text-sm placeholder-white placeholder-opacity-70 focus:outline-none focus:border-opacity-100 transition-colors"
              />
            </div>

            <div className="relative w-full">
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full bg-transparent border-b border-white border-opacity-60 py-4 px-4 text-white text-sm placeholder-white placeholder-opacity-70 focus:outline-none focus:border-opacity-100 transition-colors"
              />
            </div>

            <div className="relative w-full">
              <textarea
                id="message"
                rows={3}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full bg-transparent border-b border-white border-opacity-60 py-4 px-4 text-white text-sm placeholder-white placeholder-opacity-70 focus:outline-none focus:border-opacity-100 transition-colors resize-none"
              />
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-white text-dark-grey text-xs font-semibold tracking-widest uppercase px-12 py-4 rounded-lg transition-colors hover:bg-brand-peach-hover hover:text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
