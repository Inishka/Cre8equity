"use client";

import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Image from "next/image";
import axios from 'axios';
import CreatorsResults from "@/context/CreatorsResults";

type CreatorsDataType = {
  fullName: string;
  emailId: string;
  facebookLink: string;
  instagramLink: string;
  keyFeatures: string[];
  aboutYou: string;
};

type CreatorsProps = {
  onsubmit?: (data: CreatorsDataType[]) => void;
};


type ExtractedDataType = { label: string; value: any };

const creators = [
  {
    name: 'Carryminati',
    image: '/images/carryminati.png',
    partnerships: 14,
    followers: 10000,
    subscribers: 5000,
  },
  {
    name: 'Bhuvan Bam',
    image: '/images/bhuvanbam.png',
    partnerships: 15,
    followers: 15000,
    subscribers: 8000,
  },
  {
    name: 'Ashish Chanchlani',
    image: '/images/ashishchanchalani.png',
    partnerships: 5,
    followers: 12000,
    subscribers: 6000,
  },
  {
    name: 'Dhruv Rathee',
    image: '/images/dhruvrathee.png',
    partnerships: 8,
    followers: 12000,
    subscribers: 7000,
  },
  {
    name: 'Abhishek Upmanyu',
    image: '/images/abhishekupmanyu.png',
    partnerships: 9,
    followers: 13000,
    subscribers: 5500,
  },
  {
    name: 'Harsh Beniwal',
    image: '/images/harshbeniwal.png',
    partnerships: 6,
    followers: 11000,
    subscribers: 6200,
  },
  {
    name: 'Carryminati',
    image: '/images/carryminati.png',
    partnerships: 14,
    followers: 10000,
    subscribers: 5000,
  },
  {
    name: 'Bhuvan Bam',
    image: '/images/bhuvanbam.png',
    partnerships: 15,
    followers: 15000,
    subscribers: 8000,
  }
];


const Creators = ({ onsubmit }: CreatorsProps) => {
  const [fullName, setFullName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [keyFeatures, setKeyFeatures] = useState<string[]>([]);
  const [aboutYou, setAboutYou] = useState('');
  const [extractedData, setExtractedData] = useState<ExtractedDataType[] | null>(null);
  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm(prevShowForm => !prevShowForm);
  };

  const handleKeyFeaturesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const features = event.target.value.split(',').map(feature => feature.trim());
    setKeyFeatures(features);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      fullName,
      emailId,
      facebookLink,
      instagramLink,
      keyFeatures,
      aboutYou,
    };

    try {

      // Call Open AI API to extract employer name
      const openAIResponse = await axios.post('https://api.openai.com/v1/completions', {
        prompt: `Extract employer name from ${facebookLink}`,
        max_tokens: 50,
      });
      const employerName = openAIResponse.data.choices[0].text;

      // Search in Seamless.AI for phone number or email address of manager or executive
      const seamlessAIResponse = await axios.get(`https://login.seamless.ai/search?q=${employerName}`);
      const contactInfo = seamlessAIResponse.data.results[0].contact_info;

      const newData: ExtractedDataType[] = [
        { label: 'Full Name', value: fullName },
        { label: 'Email Id', value: emailId },
      ];

      setExtractedData(newData);

      alert('Form submitted successfully!');

      if (onsubmit) {
        onsubmit([data]);
      }

      // Optionally hide the form after submission
      setShowForm(false);

    } catch (error) {
      console.error('Error during form submission:', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12">
      <div className="w-full h-full mx-auto ">
        <h2 className="text-4xl font-bold mb-12 text-white text-center">Meet Our Top Creators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-full ml-8">
          {creators.map((creator, index) => (
            <HoverCard key={index} >
              <HoverCardTrigger>
                <Image
                  src={creator.image}
                  alt={creator.name}
                  width={100}
                  height={100}
                  className="w-32 h-32 rounded-full overflow-x-hidden object-cover shadow-lg transition-transform transform hover:scale-105"
                />
              </HoverCardTrigger>
              <HoverCardContent className="p-4 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{creator.name}</h3>
                <p className="text-gray-600 mb-2">Partnerships: {creator.partnerships}</p>
                <p className="text-gray-600 mb-2">Followers: {creator.followers}</p>
                <p className="text-gray-600">Subscribers: {creator.subscribers}</p>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        <div className="min-h-screen flex flex-col items-center justify-center mt-64">
          {/* Image Grid */}
          <div className=" w-full h-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 2, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-5">
                <Image
                  src="/images/images (4).jpeg"
                  alt="Image 1"
                  width={200}
                  height={200}
                  className="w-full h-full rounded-lg"
                />
                <Image
                  src="/images/image.png"
                  alt="Image 3"
                  width={200}
                  height={200}
                  className=" w-full h-full rounded-lg"
                />
                <Image
                  src="/images/download.jpeg"
                  alt="Image 4"
                  width={200}
                  height={200}
                  className=" w-full h-full rounded-lg"
                />
                <Image
                  src="/images/images (3).jpeg"
                  alt="Image 4"
                  width={200}
                  height={200}
                  className=" w-full h-full rounded-lg"
                />
                <Image
                  src="/images/download (3).jpeg"
                  alt="Image 4"
                  width={200}
                  height={200}
                  className="w-full h-full rounded-lg"
                />
                <Image
                  src="/images/images..webp"
                  alt="Image 4"
                  width={200}
                  height={200}
                  className="w-full h-full rounded-lg"
                />
              </div>
            </motion.div>
          </div>

          {/* Content Part */}
          <motion.div
            className="w-full max-w-3xl mx-auto text-center md:text-left py-12 px-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl mb-6 text-white font-sans font-extrabold">
              Where Creativity Meets Opportunity
            </h2>
            <p className="text-lg mb-8 text-white font-sans font-bold">
              At Cre8Equity, we are dedicated to forging meaningful connections between creative minds and innovative businesses. Whether you are an artist, influencer, or a brand with a vision, this is your space to collaborate, innovate, and grow together.
            </p>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg text-white font-sans font-semibold">
                  Creators, bring your vision to life.
                </p>
                <p className="text-white font-sans font-semibold">
                  Join us and partner with forward-thinking businesses eager to tap into your unique talents. Share your story, showcase your work, and earn equity for your contributions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleFormVisibility}
                  className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md mt-6"
                >
                  Join the Movement
                </motion.button>
              </motion.div>
            </div>

            {showForm && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="bg-dark-1 p-8 rounded-lg shadow-lg w-full max-w-md"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl text-white font-bold mb-4">Join as a Creator</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="fullName" className="block text-white">Full Name</label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="emailId" className="block text-white">Email Id</label>
                      <input
                        type="email"
                        value={emailId}
                        onChange={(event) => setEmailId(event.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="facebook" className="block text-white">Facebook URL</label>
                      <input
                        type="text"
                        value={facebookLink}
                        onChange={(event) => setFacebookLink(event.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Your Facebook profile URL"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="instagram" className="block text-white">Instagram URL</label>
                      <input
                        type="text"
                        value={instagramLink}
                        onChange={(event) => setInstagramLink(event.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Your Instagram profile URL"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="keyFeatures" className="block text-white">Key Features</label>
                      <input
                        type="text"
                        value={keyFeatures.join(', ')}
                        onChange={handleKeyFeaturesChange}
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Key features of your work"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="aboutYou" className="block text-white">About You</label>
                      <textarea
                        value={aboutYou}
                        onChange={(event) => setAboutYou(event.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Tell us more about you"
                        rows={4}
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md mr-4"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded-md"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  {extractedData && <CreatorsResults data={extractedData} />}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Creators;

