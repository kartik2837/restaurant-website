import React from "react";

const Return = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 p-8">
      {/* Left Side Image */}
      <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1586281380349-632531db7ed4"
          alt="Restaurant Return"
          className="rounded-2xl shadow-lg w-full md:w-4/5"
        />
      </div>

      {/* Right Side Content */}
      <div className="md:w-1/2 w-full bg-white p-8 rounded-2xl shadow-lg text-gray-800 overflow-y-auto max-h-[80vh]">
        <h1 className="text-3xl font-bold mb-6 text-orange-600">
          Return & Refund Policy
        </h1>
        <p className="mb-4">
          At <span className="font-semibold">FoodHouse Restaurant</span>, we
          strive to deliver fresh, hygienic, and delicious meals to all our
          customers. Your satisfaction is our top priority. However, we
          understand that sometimes you may not be fully satisfied with your
          order. This Return and Refund Policy explains the conditions under
          which returns and refunds are possible. By placing an order on our
          website, you agree to the terms of this policy.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Eligibility for Returns</h2>
        <p className="mb-4">
          We only accept returns or issue refunds in specific circumstances.
          Since food is perishable, once it is delivered and consumed, we cannot
          take it back. Returns are only eligible if:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>The order delivered is incorrect.</li>
          <li>
            The food was spoiled, contaminated, or did not meet quality
            standards at the time of delivery.
          </li>
          <li>You received an incomplete order (missing items).</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Non-Returnable Items</h2>
        <p className="mb-4">
          We do not accept returns for items that have been partially eaten,
          tampered with, or kept outside for a long time after delivery. Beverages,
          desserts, and promotional/complimentary items are also non-returnable.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Refund Conditions</h2>
        <p className="mb-4">
          Refunds will be processed only after verifying the issue. If your
          request is valid, we may:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Refund the full amount to your original payment method.</li>
          <li>Provide store credits or a discount voucher for future use.</li>
          <li>Replace the incorrect or damaged order at no extra cost.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. How to Request a Refund</h2>
        <p className="mb-4">
          If you face any issue with your order, you must contact us within{" "}
          <span className="font-semibold">2 hours of delivery</span>. Please
          provide:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Order ID and receipt details.</li>
          <li>A clear description of the problem.</li>
          <li>Photographs of the delivered food (if applicable).</li>
        </ul>
        <p className="mb-4">
          You can reach us through our customer support email or phone number
          mentioned on the Contact Us page.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Cancellations</h2>
        <p className="mb-4">
          Orders once confirmed cannot be cancelled unless they are delayed
          excessively due to unforeseen circumstances. If an order is cancelled
          before preparation, we will issue a full refund. For third-party
          delivery cancellations, please refer to the respective partner’s
          policy.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Processing Time</h2>
        <p className="mb-4">
          Approved refunds will usually be processed within{" "}
          <span className="font-semibold">5-7 business days</span>. However,
          depending on your bank or payment provider, it may take additional
          time for the amount to reflect in your account.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Information</h2>
        <p className="mb-4">
          If you have any questions about our Return & Refund Policy, feel free
          to contact us at:
        </p>
        <p className="mb-4">
          📧 Email: <span className="font-semibold">support@foodhouse.com</span>
          <br />
          📞 Phone: +91-9876543210
          <br />
          🏠 Address: 123, Food Street, New Delhi, India
        </p>

        <p className="mt-6 text-sm text-gray-600">
          Note: This Return & Refund Policy is subject to change at any time
          without prior notice. Please review it periodically to stay informed.
        </p>
      </div>
    </div>
  );
};

export default Return;
