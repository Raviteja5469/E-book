import React from "react";
import { CheckCircle2 } from "lucide-react";

export function Pricing() {
  const pricingPlans = [
    {
      name: "Basic Reader",
      price: "$9",
      features: ["5 Chapter Previews", "Email Support", "1 Device Access"],
      gradient: "from-[#6B21A8] to-[#2DD4BF]",
      buttonColor: "bg-[#FBBF24] hover:bg-[#FBBF24]/90",
    },
    {
      name: "Pro Reader",
      price: "$29",
      features: ["Full Book Access", "Priority Support", "3 Device Access"],
      gradient: "from-[#6B21A8] to-[#2DD4BF]",
      buttonColor: "bg-[#FBBF24] hover:bg-[#FBBF24]/90",
      popular: true,
    },
    {
      name: "Library Access",
      price: "$99",
      features: ["Unlimited Books", "Dedicated Support", "Unlimited Devices"],
      gradient: "from-[#6B21A8] to-[#2DD4BF]",
      buttonColor: "bg-[#FBBF24] hover:bg-[#FBBF24]/90",
    },
  ];

  return (
    <section className="bg-[#0F172A] py-16 px-6 lg:px-20 text-[#F1F5F9] relative overflow-hidden">
      {/* Cosmic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B21A8]/20 via-[#2DD4BF]/10 to-[#0F172A] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl lg:text-5xl font-playfair font-extrabold text-center text-[#F1F5F9] mb-12">
          Unlock Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#2DD4BF]">
            Reading Journey
          </span>
        </h2>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative transform hover:scale-105 transition-all duration-300 rounded-xl bg-[#1E293B]/80 backdrop-blur-sm border border-[#2DD4BF]/20 p-6 ${
                plan.popular ? "shadow-lg shadow-[#2DD4BF]/30" : ""
              }`}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-20 rounded-xl`}
              ></div>

              {/* Popular Tag */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#FBBF24] text-[#0F172A] px-3 py-1 text-sm font-inter font-bold rounded-bl-lg">
                  Most Popular
                </div>
              )}

              {/* Plan Details */}
              <h3 className="text-2xl font-playfair font-bold text-[#FBBF24] mb-4 relative z-10">
                {plan.name}
              </h3>
              <p className="text-5xl font-extrabold text-[#F1F5F9] mb-6 relative z-10">
                {plan.price}
                <span className="text-xl font-normal font-inter">/month</span>
              </p>

              {/* Features */}
              <ul className="text-sm text-[#F1F5F9]/80 font-inter mb-6 relative z-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center mb-3">
                    <CheckCircle2
                      size={20}
                      className="text-[#2DD4BF] mr-2"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`${plan.buttonColor} px-6 py-3 w-full rounded-full text-[#0F172A] font-inter font-bold transition-all duration-300 shadow-md hover:shadow-[#FBBF24]/40`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-1/3 left-1/3 w-36 h-36 bg-[#2DD4BF]/20 rounded-full blur-3xl animate-[float_7s_infinite_alternate]" aria-hidden="true"></div>
    </section>
  );
}

export default Pricing;