import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';


const InteractiveDemoSection = ({ onDemoClick }) => {


  return (
    <section id="demo" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-20">
        {/* Comparison Table */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Why Choose Mindery Kids Over Others?
          </h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-6 py-3 text-sm font-semibold">Feature</th>
                  <th className="px-6 py-3 text-sm font-semibold">Mindery Kids</th>
                  <th className="px-6 py-3 text-sm font-semibold">Other Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                <tr>
                  <td className="px-6 py-4">Child-Friendly Guided Meditations</td>
                  <td className="px-6 py-4 text-black-600">✅ Story-based, fun & short</td>
                  <td className="px-6 py-4 text-red-500">✘ <span className="text-black">Generic adult content</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Safe & Ad-Free Environment</td>
                  <td className="px-6 py-4 text-black-600">✅ 100% secure for kids</td>
                  <td className="px-6 py-4 text-red-500">✘  <span className="text-black">One-size-fits-all</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Age-Specific Programs</td>
                  <td className="px-6 py-4 text-black-600">✅ Tailored for 4–14</td>
                  <td className="px-6 py-4 text-red-500">✘ <span className="text-black">one-size-fit-all</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Parent & Teacher Support</td>
                  <td className="px-6 py-4 text-black-600">
                    ✅ Guides, printables, progress insights
                  </td>
                  <td className="px-6 py-4 text-red-500">✘ <span className="text-black">Limited or none</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Plans */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Choose Your Plan
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Start free, cancel anytime. No hidden charges.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Starter</h3>
              <p className="text-gray-600 mb-4 text-center">Perfect for new explorers</p>
              <p className="text-3xl font-bold text-indigo-600 mb-6 text-center">Free</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✅ 5 guided meditations</li>
                <li>✅ 2 sleep stories</li>
                <li>✅ Parent starter kit</li>
              </ul>
              <div className="flex justify-center">
                <button className="w-40 py-2 px-4 bg-indigo-600 text-white font-medium rounded-[0.5rem] hover:bg-green-700 transition text-center">
                  Get Started
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md ring-2 ring-indigo-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Premium</h3>
              <p className="text-gray-600 mb-4 text-center">Unlock full potential</p>
              <p className="text-3xl font-bold text-indigo-600 mb-6 text-center">₹299/mo</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✅ Unlimited meditations</li>
                <li>✅ Sleep stories & calming music</li>
                <li>✅ Printable guides for parents</li>
              </ul>
              <div className="flex justify-center">
                <button className="w-40 py-2 px-4 bg-indigo-600 text-white font-medium rounded-[0.5rem] hover:bg-green-700 transition text-center">
                  Upgrade Now
                </button>
              </div>
            </div>

            {/* Family Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Family</h3>
              <p className="text-gray-600 mb-4 text-center">For multiple kids</p>
              <p className="text-3xl font-bold text-indigo-600 mb-6 text-center">₹499/mo</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✅ 4 child profiles</li>
                <li>✅ Rewards & streaks</li>
                <li>✅ Classroom meditation pack</li>
              </ul>
              <div className="flex justify-center">
                <button className="w-40 py-2 px-4 bg-indigo-600 text-white font-medium rounded-[0.5rem] hover:bg-green-700 transition text-center">
                  Get Family Plan
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Parent & Teacher Hub */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Parent & Teacher Hub
          </h2>
          <p className="text-gray-600 mb-6">
            Practical guides, printable routines, and progress insights so you can
            support mindfulness at home and school.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-5 py-2 rounded-[0.5rem] bg-gray-100 text-indigo-700 font-bold hover:bg-indigo-200 transition">
              📄 Download Starter Kit (PDF)
            </button>
            <button className="px-5 py-2 rounded-[0.5rem] bg-gray-100 text-indigo-700 font-bold hover:bg-pink-200 transition">
              🎯 7-Day Calm Plan
            </button>
            <button className="px-5 py-2 rounded-[0.5rem] bg-gray-100 text-indigo-700 font-bold hover:bg-green-200 transition">
              🏫 Classroom Pack
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default InteractiveDemoSection;