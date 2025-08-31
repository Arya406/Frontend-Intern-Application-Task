import React from "react";
import { Star } from "lucide-react"; // for star icons

const SuccessStoriesSection = () => {
  return (
    <section id="success-stories" className="py-20 bg-white">
      {/* What Families Say */}
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          What Families Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-xl shadow-sm p-6">
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-700 text-sm mb-4">
              “Bedtime is finally peaceful. My 6-year-old asks for the Star Boat
              story every night.”
            </p>
            <p className="text-sm text-gray-500">— Priya, Mom of 6-year-old</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-xl shadow-sm p-6">
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-700 text-sm mb-4">
              “The 5-minute ‘reset’ before homework has been a game changer for
              focus.”
            </p>
            <p className="text-sm text-gray-500">— Ravi, Dad of 10-year-old</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-xl shadow-sm p-6">
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-700 text-sm mb-4">
              “Our class uses the breathing games after lunch. Kids come back
              calm and ready.”
            </p>
            <p className="text-sm text-gray-500">— Anita, Grade 4 Teacher</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-gray-800">
                What ages is this for?
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                How long are the sessions?
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Is it safe and ad-free?</p>
              <p className="text-gray-600">
                Yes. We designed this for children. No external ads, clear
                privacy options, and parent controls.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Can schools use it?</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Start Your Child’s Mindfulness Journey
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Try it free. Build calm, focus, and kindness—one small practice a
            day.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-2 rounded-[0.5rem] bg-purple-600 text-white text-sm font-medium shadow hover:bg-purple-700 transition">
              Create Account
            </button>
            <button className="px-6 py-2 rounded-[0.5rem] bg-green-500 text-white text-sm font-medium shadow hover:bg-green-600 transition">
              Download App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
