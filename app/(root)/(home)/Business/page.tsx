"use client";

import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Image from "next/image";
import axios from 'axios';
import BusinessResults from "@/context/BusinessResults";

type BusinessDataType = {
  fullName: string;
  companyLink: string;
  linkedinLink: string;
  previousPartners: string[];
};

type BusinessProps = {
  onsubmit?: (data: BusinessDataType[]) => void;
};


type ExtractedDataType = { label: string; value: any };

const businesses = [
  {
    name: 'Tech Innovators Inc.',
    logo: '/images/tech-innovators.png',
    description: 'Leading tech solutions provider.',
  },
  {
    name: 'Green Ventures Ltd.',
    logo: '/images/green-ventures.png',
    description: 'Sustainable business initiatives.',
  },
  {
    name: 'Creative Minds Studio',
    logo: '/images/creative-minds.png',
    description: 'Creative solutions for modern challenges.',
  },
  {
    name: 'Future Horizons',
    logo: '/images/future-horizons.png',
    description: 'Innovative approaches to future technologies.',
  },
  {
    name: 'Tech Innovators Inc.',
    logo: '/images/tech-innovators.png',
    description: 'Leading tech solutions provider.',
  },
  {
    name: 'Green Ventures Ltd.',
    logo: '/images/green-ventures.png',
    description: 'Sustainable business initiatives.',
  },
  {
    name: 'Creative Minds Studio',
    logo: '/images/creative-minds.png',
    description: 'Creative solutions for modern challenges.',
  },
  {
    name: 'Future Horizons',
    logo: '/images/future-horizons.png',
    description: 'Innovative approaches to future technologies.',
  }
];

const Business = ({ onsubmit }: BusinessProps) => {
  const [fullName, setFullName] = useState('');
  const [companyLink, setCompanyLink] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  const [previousPartners, setPreviousPartners] = useState<string[]>([]);
  const [extractedData, setExtractedData] = useState<ExtractedDataType[] | null>(null);
  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm(prevShowForm => !prevShowForm);
  };
  
  const handlePreviousPartnersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const PreviousPartners  = event.target.value.split(',').map(PreviousPartners => PreviousPartners.trim());
    setPreviousPartners(PreviousPartners);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      fullName,
      companyLink,
      linkedinLink,
      previousPartners,
    };

    try {

      // Call Open AI API to extract company name
      const openAIResponse = await axios.post('https://api.openai.com/v1/completions', {
        prompt: `Extract company name from ${companyLink}`,
        max_tokens: 50,
      });
      const companyName = openAIResponse.data.choices[0].text;

      // Search in Seamless.AI for phone number or email address of manager or executive
      const seamlessAIResponse = await axios.get(`https://login.seamless.ai/search?q=${companyName}`);
      const contactInfo = seamlessAIResponse.data.results[0].contact_info;

      // Send follow-up email to the person
      await axios.post('/api/send-email', {
        to: contactInfo.email,
        subject: 'Collaboration Opportunity',
        body: `Hi ${fullName}, we're interested in collaborating with your company, ${companyName}.`,
      });

      const newData: ExtractedDataType[] = [
        { label: 'Company Name', value: companyName },
        { label: 'Contact Info', value: contactInfo },
      ];

      setExtractedData(newData);

      alert('Form submitted successfully!');

      if (onsubmit) {
        onsubmit([ data ]);
      }

      // Optionally hide the form after submission
      setShowForm(false);

    } catch (error) {
      console.error('Error during form submission:', error);
      alert('There was an error submitting the form.');
    }

  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 ">
      <div className="w-full mx-auto ">
        <h2 className="text-4xl font-bold mb-12 text-white text-center">Partner with Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-8 mb-28 ml-8">
          {businesses.map((business, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger>
                <Image
                  src={business.logo}
                  alt={business.name}
                  width={100}
                  height={100}
                  className="w-32 h-32 rounded-full overflow-x-hidden object-cover shadow-lg transition-transform transform hover:scale-105"
                />
              </HoverCardTrigger>
              <HoverCardContent className="p-4 bg-white rounded-lg shadow-lg ">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{business.name}</h3>
                <p className="text-gray-600 mb-2">{business.description}</p>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        <div className="min-h-screen flex items-center justify-between absolute left-14 mb-12">
          <motion.div
            className="flex-1 max-w-3xl py-12 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl mb-6 text-white font-sans font-extrabold">
              Where Creativity Meets Opportunity
            </h2>
            <p className="text-lg mb-8 text-white font-sans font-bold">
              At Cre8Equity, we are dedicated to forging meaningful connections between creative minds and innovative businesses. Whether you are an artist, influencer, or a brand with a vision, this is your space to collaborate, innovate, and grow together.
            </p>

            <div className="mb-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg text-white font-sans font-semibold">
                  Businesses, innovate with the best creative talents.
                </p>
                <p className="mb-4 text-white font-sans font-semibold">
                  Collaborate with creators who bring fresh perspectives and creative solutions. Expand your brands reach and impact by offering equity-based partnerships.
                </p>
              </motion.div>

              <motion.div
                className="flex"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleFormVisibility}
                  className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md"
                >
                  Join as a Partner
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
                  <h2 className="text-2xl text-white font-bold mb-4">Join Us as a Business</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="fullName" className="block text-white">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="companyLink" className="block text-white">
                        Company Link
                      </label>
                      <input
                        type="text"
                        value={companyLink}
                        onChange={(event) => setCompanyLink(event.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Your company's website link"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="linkedinLink" className="block text-white">
                        LinkedIn Link
                      </label>
                      <input
                        type="text"
                        value={linkedinLink}
                        onChange={(event) => setLinkedinLink(event.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Your LinkedIn profile link"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="previousPartners" className="block text-white">
                        Previous Partners
                      </label>
                      <input
                        type="text"
                        value={previousPartners.join(', ')}
                        onChange={handlePreviousPartnersChange}
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Previous partners or notable collaborations"
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
                  {extractedData && <BusinessResults data={extractedData} />}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/resize.jpeg" 
              alt="imageee"
              width={400} // Adjust size as needed
              height={400}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Business;


