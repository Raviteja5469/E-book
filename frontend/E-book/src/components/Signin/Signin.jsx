import React, { useState } from "react";

function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Data:", formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form className="bg-gray-800 p-6 rounded-lg shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-white text-2xl font-semibold text-center mb-4">Sign In</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          onChange={handleChange}
          required
        />
        <button type="submit" className="w-full bg-cyan-500 text-white py-2 rounded">Sign In</button>
      </form>
    </div>
  );
}

function SignUp() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up Data:", formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form className="bg-gray-800 p-6 rounded-lg shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-white text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          onChange={handleChange}
          required
        />
        <button type="submit" className="w-full bg-cyan-500 text-white py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}

export { SignIn, SignUp };
