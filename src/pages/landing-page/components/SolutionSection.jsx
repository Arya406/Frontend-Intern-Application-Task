import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SolutionSection = () => {
  const programs = [
    {
      title: "Little Explorers (4–6)",
      description:
        "Three to five-minute stories with animal friends that teach belly-breathing, noticing sounds, and gentle stretching.",
        tags: ["🏠 Cozy Corner", "🎵 Calm Music", "🖼️ Sticker Badges"],
      image: "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg", // Child meditation image
    },
    {
      title: "Brave Thinkers (7–10)",
      description:
        "Mindful stories, focus timers, and kindness practices that build confidence and decision-making.",
        tags: ["⏱️ Focus Timer", "📝 Gratitude Notes", "🔥 Streak Rewards"],
      image: "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg", // Child focusing image
    },
    {
      title: "Calm & Curious (11–14)",
      description:
        "Longer meditations, journaling thoughts, and sleep stories for deeper rest and emotional balance.",
        tags: ["🧠 Mindset Minis", "🌙 Sleep Stories", "🎯 Goal Cards"],
      image: "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg", // Teen meditation image
    },
  ];

  const features = [
    {
      title: "Ad-Free & Safe",
      description:
        "Child-first design with privacy controls and no external ads.",
    },
    {
      title: "Rewards that Motivate",
      description:
        "Stars, badges, and gentle streaks encourage healthy habits—no pressure.",
    },
    {
      title: "Offline Access",
      description: "Download favorite sessions for calm on the go.",
    },
    {
      title: "Sleep Mode",
      description:
        "Fade-out music and dim visuals help kids drift off peacefully.",
    },
    {
      title: "Classroom Friendly",
      description:
        "Teacher packs with 5-minute start-of-class resets and posters.",
    },
    {
      title: "Multi-Child Profiles",
      description: "Personalized tracks for each child in the family.",
    },
  ];

  return (
    <section id="solution" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 ">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Programs for Every Age
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl ">
            Pick a track or mix and match. Each program grows with your child.
          </p>
        </div>

        {/* Programs List */}
        <div className="space-y-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="rounded-3xl shadow-lg w-full h-[50rem] object-cover"
                />
               
              </div>

              {/* Text Content */}
              <div className={`${index % 2 !== 0 ? "md:order-first" : ""}`}>
                <h3 className="text-2xl font-bold text-black-800 mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {program.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {program.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white border border-purple-200 text-purple-700 font-medium rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for Kids, Loved by Parents
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-gray-100 bg-white shadow-md hover:shadow-lg transition-all"
              >
               
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default SolutionSection;