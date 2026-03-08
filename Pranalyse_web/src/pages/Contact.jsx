import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out. Our team will get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
<section
  className="relative min-h-screen px-6 py-20 overflow-hidden"
style={{
  background: "linear-gradient(to bottom, #d5a6efff, #8b4ccfff, #431564ff)"
}}

>
      
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-white/90">
          We’d love to hear from you. Whether you have a question, feedback, or
          a collaboration idea, our team is here to help.
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Contact Info */}
        <div className="text-white space-y-6">
          <h2 className="text-2xl font-semibold">
            Get in Touch
          </h2>
          <p className="text-white/85 leading-relaxed">
            Pranalyse is building the future of AI-powered movement and wellness
            intelligence. Reach out to learn more, partner with us, or share your
            thoughts.
          </p>

          <div className="space-y-2 text-white/90">
            <p><span className="font-semibold">Email:</span> support@onbeat.com</p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-xl p-8 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet"
              placeholder="Ananya V A"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue"
              placeholder="ananya@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple"
              placeholder="Tell us how we can help you..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-purple-600 hover:to-violet-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
