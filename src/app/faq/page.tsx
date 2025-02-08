'use client';
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const faqs = [
    {
      question: "How do I book a car with Qversity?",
      answer: "Booking a car with Qversity is simple! Visit our booking page, enter your details, choose your car, and confirm your rental."
    },
    {
      question: "What are the payment options available?",
      answer: "We accept various payment methods, including credit/debit cards and secure online payment gateways."
    },
    {
      question: "Can I modify or cancel my booking?",
      answer: "Yes, you can modify or cancel your booking through our website or by contacting our customer support team."
    },
    {
      question: "What should I do if the car breaks down during my rental?",
      answer: "If your car breaks down, contact our 24/7 roadside assistance immediately for support and guidance."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, Qversity believes in transparent pricing. What you see is what you pay."
    },
  ];

  return (
    <div className="bg-[#F8F9FA] text-[#212529] py-16 px-6 mt-48 sm:mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-6 cursor-pointer" onClick={() => toggle(i)}>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <span>{selected === i ? <FaChevronUp /> : <FaChevronDown />}</span>
              </div>
              {selected === i && (
                <p className="text-[#6C757D] mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
