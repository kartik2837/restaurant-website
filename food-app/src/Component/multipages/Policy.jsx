import React from "react";

const Policy = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Left Side Image */}
      <div className="md:w-1/2 w-full">
        <img
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Content */}
      <div className="md:w-1/2 w-full p-8 md:p-16 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Policy</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          At Food House Restaurant, your privacy is our top priority. This Privacy Policy
          explains how we collect, use, and safeguard your information when you visit
          our website, use our services, or interact with us. By accessing our website
          or services, you agree to the practices described here. Please read this
          document carefully to understand our policies.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We may collect personal information such as your name, email address, phone
          number, and payment details when you place an order or create an account. We
          also gather non-personal information such as browser type, device details, and
          your interaction with our site. This helps us improve our services and provide
          a smoother customer experience.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          Your information is primarily used to process orders, provide customer support,
          and improve our services. For example, we use your contact details to send
          order confirmations, delivery updates, and promotional offers. We may also use
          your browsing behavior to personalize your restaurant experience, recommend
          dishes, and enhance website functionality.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Sharing of Information</h2>
        <p className="text-gray-700 mb-4">
          We do not sell or rent your personal information to third parties. However, we
          may share limited data with trusted service providers such as delivery partners,
          payment gateways, and marketing platforms. These third parties are obligated to
          maintain the confidentiality and security of your data and are only permitted to
          use it for specific purposes.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Data Security</h2>
        <p className="text-gray-700 mb-4">
          Protecting your personal data is extremely important to us. We use secure
          payment gateways, encrypted communication, and firewalls to safeguard your
          information. While we take all possible precautions, no online system is 100%
          secure, and we cannot guarantee absolute protection against unauthorized access.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Cookies & Tracking</h2>
        <p className="text-gray-700 mb-4">
          Our website uses cookies to improve your browsing experience, remember your
          preferences, and analyze site performance. Cookies help us understand customer
          behavior and enhance our service offerings. You can manage or disable cookies
          from your browser settings, but some features of the website may not work
          properly without them.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6. Your Rights</h2>
        <p className="text-gray-700 mb-4">
          You have the right to access, update, or delete your personal information stored
          with us. You may also opt out of promotional emails at any time. To exercise your
          rights, please contact us through the details provided below.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7. Policy Updates</h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our
          practices, services, or legal requirements. Updated versions will be posted on
          our website, and we encourage you to review the policy periodically.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">8. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about this Privacy Policy, please reach
          out to us at:
        </p>
        <p className="text-gray-700 font-medium mb-4">
          Food House Restaurant <br />
          123 Main Street, Delhi, India <br />
          Email: support@foodhouse.com <br />
          Phone: +91 9876543210
        </p>

        <p className="text-gray-600 text-sm mt-8">
          By using our services, you acknowledge that you have read, understood, and
          agreed to this Privacy Policy. Thank you for trusting Food House Restaurant
          with your personal information.
        </p>
      </div>
    </div>
  );
};

export default Policy;
