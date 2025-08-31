import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const benefits = [
    {
      badge: "Story Meditations",
      badgeColor: "bg-green-100 text-green-600",
      title: "Guided Adventures",
      description:
        "Short, age-wise journeys that help kids calm their bodies and name their feelings.",
    },
    {
      badge: "Anytime Calm",
      badgeColor: "bg-green-100 text-green-600",
      title: "Tools for Big Feelings",
      description:
        "Quick “reset” audios for anger, worry, pre-exam jitters, and bedtime battles.",
    },
    {
      badge: "Parent Hub",
      badgeColor: "bg-green-100 text-green-600",
      title: "Guides & Routines",
      description:
        "Weekly tips, printable charts, and simple routines you can use at home or school.",
    },
  ];


  return (
    <section id="problem" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Mindery Kids?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Children learn best through play and stories. Our sessions blend
            gentle breathing, guided imagery, and music to make mindfulness
            enjoyable and effective.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition"
            >
              <span
                className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-3 ${item.badgeColor}`}
              >
                {item.badge}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default ProblemSection;