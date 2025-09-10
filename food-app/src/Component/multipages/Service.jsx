import React from "react";

const Services = () => {
  const services = [
    {
      title: "Fast Delivery",
      description:
        "Get your favorite meals delivered to your doorstep quickly and safely with our fast delivery service.",
      icon: "🚚",
    },
    {
      title: "Fresh & Healthy",
      description:
        "We use only fresh ingredients to prepare healthy and delicious meals for you and your family.",
      icon: "🥗",
    },
    {
      title: "24/7 Support",
      description:
        "Our customer support is available round the clock to assist you with your orders and queries.",
      icon: "📞",
    },
    {
      title: "Secure Payment",
      description:
        "Pay online easily and securely with multiple payment options available on our platform.",
      icon: "💳",
    },
    {
      title: "Customized Orders",
      description:
        "Order food the way you like it! Customize your dishes as per your taste and preferences.",
      icon: "🍴",
    },
    {
      title: "Event Catering",
      description:
        "Make your events special with our professional catering services, tailored to your needs.",
      icon: "🎉",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our <span className="text-red-500">Services</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At our restaurant, we believe in providing the best dining and delivery experience.
          Explore our range of services designed to make your experience better every time.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
