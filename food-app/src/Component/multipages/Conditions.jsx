// import React from "react";
// import { motion } from "framer-motion";
// import { Shield, Truck, CreditCard, UserCheck } from "lucide-react"; // icons

// export default function Conditions() {
//   return (
//     <section className="w-full bg-gray-50">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">

//         {/* Animated Image */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="overflow-hidden rounded-2xl shadow-lg"
//         >
//           <motion.img
//             src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1600&auto=format&fit=crop"
//             alt="Food Delivery"
//             className="w-full h-80 object-cover"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.5 }}
//           />
//         </motion.div>

//         {/* Terms Content */}
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             Terms & Conditions
//           </h2>
//           <p className="text-gray-700 leading-relaxed mb-6">
//             Welcome to <strong>Food House</strong>! By using our services, you
//             agree to the following terms and conditions. Please read them
//             carefully before placing any order. Your use of our website
//             signifies acceptance of these terms.
//           </p>

//           {/* Icons with Highlights */}
//           <ul className="space-y-4">
//             <li className="flex items-start gap-3">
//               <Shield className="w-6 h-6 text-rose-600" />
//               <span className="text-gray-800">
//                 <strong>Secure Payments:</strong> All transactions are encrypted
//                 and processed safely.
//               </span>
//             </li>
//             <li className="flex items-start gap-3">
//               <Truck className="w-6 h-6 text-rose-600" />
//               <span className="text-gray-800">
//                 <strong>Fast Delivery:</strong> Orders are delivered on time,
//                 ensuring freshness and quality.
//               </span>
//             </li>
//             <li className="flex items-start gap-3">
//               <CreditCard className="w-6 h-6 text-rose-600" />
//               <span className="text-gray-800">
//                 <strong>Refund Policy:</strong> Refunds are issued for wrong or
//                 undelivered items within 7–10 days.
//               </span>
//             </li>
//             <li className="flex items-start gap-3">
//               <UserCheck className="w-6 h-6 text-rose-600" />
//               <span className="text-gray-800">
//                 <strong>User Responsibility:</strong> Users must provide
//                 accurate information and avoid misuse.
//               </span>
//             </li>
//           </ul>
//           <p className="text-dark-600 mt-6 text-sm font-bold">
//             By accessing or using this website, you acknowledge that you have read,
//             understood, and agreed to be bound by our updated Terms & Conditions.
//             These terms are designed to ensure a safe, transparent, and fair experience
//             for all visitors. Please revisit this page regularly, as we may update our
//             policies, practices, or guidelines without prior notice. Continued use of
//             the site after such changes signifies your acceptance of the revised terms.
//             If you do not agree with any part of these conditions, we recommend that you
//             discontinue the use of our services immediately.
//           </p>
//        </div>
//       </div>
//     </section>
//   );
// }




import React from "react";
import { motion } from "framer-motion";
import { Shield, Truck, CreditCard, UserCheck } from "lucide-react"; // icons

export default function Conditions() {
  return (
    <section className="w-full bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-2xl shadow-lg"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1600&auto=format&fit=crop"
            alt="Food Delivery"
            className="w-full h-72 md:h-96 lg:h-[28rem] object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Terms Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to <strong>Food House</strong>! By using our services, you
            agree to the following terms and conditions. Please read them
            carefully before placing any order. Your use of our website
            signifies acceptance of these terms.
          </p>

          {/* Icons with Highlights */}
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-rose-600" />
              <span className="text-gray-800">
                <strong>Secure Payments:</strong> All transactions are encrypted
                and processed safely.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Truck className="w-6 h-6 text-rose-600" />
              <span className="text-gray-800">
                <strong>Fast Delivery:</strong> Orders are delivered on time,
                ensuring freshness and quality.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CreditCard className="w-6 h-6 text-rose-600" />
              <span className="text-gray-800">
                <strong>Refund Policy:</strong> Refunds are issued for wrong or
                undelivered items within 7–10 days.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <UserCheck className="w-6 h-6 text-rose-600" />
              <span className="text-gray-800">
                <strong>User Responsibility:</strong> Users must provide
                accurate information and avoid misuse.
              </span>
            </li>
          </ul>

          <p className="text-dark-600 mt-6 text-sm font-bold">
            By accessing or using this website, you acknowledge that you have read,
            understood, and agreed to be bound by our updated Terms & Conditions.
            These terms are designed to ensure a safe, transparent, and fair experience
            for all visitors. Please revisit this page regularly, as we may update our
            policies, practices, or guidelines without prior notice. Continued use of
            the site after such changes signifies your acceptance of the revised terms.
            If you do not agree with any part of these conditions, we recommend that you
            discontinue the use of our services immediately.
          </p>
        </div>
      </div>
    </section>
  );
}


