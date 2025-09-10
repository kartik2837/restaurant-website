import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * Restaurant About Section (500 words content + animated image)
 */

export default function About({
  title = "Food Our Restaurant",
  subtitle = "Good food. Good mood.",
  image = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop",
  flip = false,
}) {
  const [expanded, setExpanded] = useState(false);

  const brief =
    "Welcome to our restaurant, where flavor meets tradition and innovation. We are passionate about creating memorable dining experiences that bring people together. From the moment you walk in, you will notice the cozy ambiance, the aroma of fresh ingredients, and the warmth of our hospitality. Our mission is simple: to serve delicious, high-quality food that satisfies both the heart and the soul.";

  const more =
    "At our restaurant, every dish tells a story. Our chefs carefully curate a menu that combines traditional recipes with modern twists, ensuring every bite is filled with freshness, authenticity, and creativity. We source our produce daily from trusted local farmers to guarantee the highest quality. From farm-fresh vegetables and seasonal fruits to premium meats and dairy, our ingredients speak for themselves. We also focus on sustainability, reducing food waste, and supporting eco-friendly practices. Whether you are enjoying a quick lunch, a romantic dinner, or a family gathering, our space is designed to make you feel at home. Our staff is trained to offer not just service, but a genuine connection, because we believe that dining is more than just eating—it’s about creating memories. Over the years, we have grown into a community hub where friends meet, families celebrate, and food lovers explore new flavors. Our menu covers a wide variety of cuisines, from local delicacies to international favorites, ensuring that there’s something for everyone. Beyond the food, we also provide catering services, host special events, and partner with delivery apps to bring our food directly to your doorstep. Hygiene and safety are at the core of everything we do, with strict quality checks and modern kitchen practices. We aim to delight every customer by blending taste, health, and happiness into every plate we serve. Come join us, and let us take you on a journey of flavors that you will cherish for a lifetime.";

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div
          className={[
            "grid items-center gap-8 md:gap-12",
            "md:grid-cols-2",
            flip ? "md:[&>*:first-child]:order-2" : "",
          ].join(" ")}
        >
          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: flip ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl shadow-lg"
          >
            <motion.img
              src={image}
              alt={title}
              className="h-64 w-full object-cover sm:h-80 md:h-[26rem] lg:h-[28rem]"
              loading="lazy"
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </motion.div>

          {/* Content Side */}
          <div>
            <p className="text-sm uppercase tracking-wider text-rose-600 font-medium">
              {subtitle}
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">{brief}</p>

            <div className="mt-4">
              <div
                className={[
                  "grid transition-all duration-300 ease-in-out",
                  expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-90",
                ].join(" ")}
                aria-hidden={!expanded}
              >
                <div className="overflow-hidden">
                  <p className="mt-2 text-gray-700 leading-relaxed">{more}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-rose-500 px-5 py-2.5 text-sm font-semibold text-rose-700 hover:bg-rose-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 active:scale-[0.99] shadow-sm"
                aria-expanded={expanded}
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
