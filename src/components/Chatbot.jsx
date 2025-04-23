import React, { useState } from "react";
import { MessageCircle } from "lucide-react"; // Optional icon lib

const KanooraChatbot = () => {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
    interest: "",
  });

  const steps = [
    { question: "Hi, I'm Your Personal Assitance ChatBot🌿 — your Uttara Kannada trip assistant. What’s your name?", field: "name" },
    { question: "Nice to meet you! Can I get your email to send trip details?", field: "email" },
    { question: "Your phone number for quick updates?", field: "phone" },
    { question: "What are you most interested in? (Resorts, Waterfalls, Temples, Beaches, Food, etc.)", field: "interest" },
    { question: "Any specific questions or requirements you have?", field: "query" },
  ];

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      const formattedData = `
        <h2>🧭 Kanoora Chatbot Enquiry</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Interest:</strong> ${formData.interest}</p>
        <p><strong>Query:</strong> ${formData.query}</p>
        <hr/>
        <p>✨ Sent from Kanoora on the Uttara Kannada Tourism Website</p>
      `;
      console.log("Email payload:", formattedData); // Placeholder
      setSubmitted(true);
    }
  };

  return (
    <>
      {/* Chat Icon Button */}
      <button
        className="fixed bottom-4 right-4 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Open Kanoora Chatbot"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Popup */}
      {open && !submitted && (
        <div className="fixed bottom-20 right-4 p-4 bg-white shadow-xl rounded-xl w-[320px] z-50">
          <p className="text-sm text-gray-800 mb-3">{steps[step].question}</p>
          <input
            name={steps[step].field}
            value={formData[steps[step].field]}
            onChange={handleInput}
            className="w-full p-2 border rounded-md text-sm text-black"
            placeholder="Your answer..."
          />
          <button
            onClick={handleNext}
            className="mt-3 bg-green-600 text-white text-sm px-4 py-2 rounded-md hover:bg-green-700"
          >
            {step === steps.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      )}

      {/* Thank You Message */}
      {submitted && (
        <div className="fixed bottom-20 right-4 p-4 bg-green-600 text-white rounded-xl shadow-xl w-[300px] z-50">
          <h3 className="text-lg font-semibold">Thank you, {formData.name}!</h3>
          <p className="text-sm">We'll contact you shortly with more details ✨</p>
        </div>
      )}
    </>
  );
};

export default KanooraChatbot;
