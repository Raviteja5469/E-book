import React from "react";

export function Pricing() {
  const pricingPlans = [
    {
      name: "Basic Plan",
      price: "$9",
      features: ["5 Projects", "Basic Support", "1 User"],
      gradient: "from-blue-500 to-blue-700",
      buttonColor: "bg-blue-600 hover:bg-blue-500",
    },
    {
      name: "Pro Plan",
      price: "$29",
      features: ["50 Projects", "Priority Support", "5 Users"],
      gradient: "from-purple-500 to-purple-700",
      buttonColor: "bg-purple-600 hover:bg-purple-500",
      popular: true,
    },
    {
      name: "Enterprise Plan",
      price: "$99",
      features: ["Unlimited Projects", "Dedicated Support", "Unlimited Users"],
      gradient: "from-yellow-500 to-yellow-700",
      buttonColor: "bg-yellow-600 hover:bg-yellow-500",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-black py-16 px-6 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-yellow-500 mb-12">
          Choose Your Plan
        </h2>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative transform hover:scale-105 transition-transform duration-300 shadow-lg rounded-xl bg-gradient-to-br ${plan.gradient} p-6`}
            >
              {/* Popular Tag */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 text-sm font-bold rounded-bl-lg">
                  Popular
                </div>
              )}

              {/* Plan Details */}
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <p className="text-5xl font-extrabold text-white mb-6">
                {plan.price}
                <span className="text-xl font-normal">/month</span>
              </p>

              {/* Features */}
              <ul className="text-sm text-white mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-300 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.68-8.943l-2.12-2.12 1.414-1.414L8.32 6.114l4.95-4.95L14.684 2.8l-5.364 5.365L8.32 8.114z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`${plan.buttonColor} px-6 py-3 w-full rounded-lg text-white font-bold transition-all duration-300 shadow-lg`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
