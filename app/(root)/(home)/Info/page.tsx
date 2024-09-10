"use client";

import React from 'react';
import BusinessResults from '@/context/BusinessResults';
import CreatorsResults from '@/context/CreatorsResults';


// Define types for businessData and creatorsData
type BusinessDataType = {
  fullName: string;
  companyLink: string;
  linkedinLink: string;
  previousPartners: string[];
};

type CreatorsDataType = {
  fullName: string;
  emailId: string;
  facebookLink: string;
  instagramLink: string;
  keyFeatures: string[];
  aboutYou: string;
};

// Define the props type
type InfoProps = {
  businessData: BusinessDataType[];
  creatorsData: CreatorsDataType[];
};


const Info: React.FC<InfoProps> = ({ businessData = [], creatorsData = [] }) => {
  return (
    <div className="results-page p-6">
      <h1 className=" text-white text-3xl font-bold mb-4">Submitted Data</h1>
      <p className="text-white mb-6">
        Here, you can view the submitted data from both the business and creator forms.
      </p>
      <div className="flex justify-between">
        {/* Creators Column */}
        <div className="w-full gap-5 columns-2 space-y-5 px-4 py-8 ml-8">
          <h2 className=" text-white text-2xl font-semibold mb-4">Creators</h2>
          <div className="space-y-4">
            {creatorsData.length > 0 ? (
              creatorsData.map((creator, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{creator.fullName}</h3>
                  <p className="text-gray-700 mb-2">Email: {creator.emailId}</p>
                  <p className="text-gray-700 mb-2">Facebook: <a href={creator.facebookLink} className="text-blue-500 hover:underline">{creator.facebookLink}</a></p>
                  <p className="text-gray-700 mb-2">Instagram: <a href={creator.instagramLink} className="text-blue-500 hover:underline">{creator.instagramLink}</a></p>
                  <p className="text-gray-700 mb-2">Key Features: {creator.keyFeatures.join(', ')}</p>
                  <p className="text-gray-700">About You: {creator.aboutYou}</p>
                </div>
              ))
            ) : (
              <p className=' '>No creators available.</p>
            )}
            <div className='className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <h3 className="text-xl font-semibold mb-2">Alex Parker</h3>
              <p className="text-gray-700 mb-2">Email: alex.parker@example.com</p>
              <p className="text-gray-700 mb-2">Facebook: https://www.facebook.com/alexparker.dev</p>
              <p className="text-gray-700 mb-2">Instagram: https://www.instagram.com/alexparker_dev</p>
              <p className="text-gray-700 mb-2">Key Features: Full-Stack Development ,React & Node.js Expertise ,Cloud Computing & DevOps</p>
              <p className="text-gray-700 mb-2">About You: I’m a passionate Full-Stack Developer with over 6 years of experience in building scalable web applications. </p>
            </div>
            {/*
            <div className='className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <h3 className="text-xl font-semibold mb-2"></h3>
              <p className="text-gray-700 mb-2">Email:</p>
              <p className="text-gray-700 mb-2">Facebook:</p>
              <p className="text-gray-700 mb-2">Instagram:</p>
              <p className="text-gray-700 mb-2">Key Features: </p>
              <p className="text-gray-700 mb-2">About You:</p>
            </div>
          </div>  */}
            {/* Business Column */}
            <div className="w-full md:w-1/2 pl-4">
              <h2 className=" text-white text-2xl font-semibold mb-4">Business</h2>
              <div className="space-y-4">
                {businessData.length > 0 ? (
                  businessData.map((business, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-semibold mb-2">{business.fullName}</h3>
                      <p className="text-gray-700 mb-2">Company Link: <a href={business.companyLink} className="text-blue-500 hover:underline">{business.companyLink}</a></p>
                      <p className="text-gray-700 mb-2">LinkedIn: <a href={business.linkedinLink} className="text-blue-500 hover:underline">{business.linkedinLink}</a></p>
                      <p className="text-gray-700 mb-2">Previous Partners: {business.previousPartners.join(', ')}</p>
                    </div>
                  ))
                ) : (
                  <p className='' >No businesses available.</p>
                )}
                <div className='className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                  <h3 className="text-xl font-semibold mb-2">Emily Johnson</h3>
                  <p className="text-gray-700 mb-2">Company Link:  https://www.codefusion.io/</p>
                  <p className="text-gray-700 mb-2">LinkedIn: https://www.linkedin.com/in/emily-johnson-dev</p>
                  <p className="text-gray-700 mb-2">Previous Partners: TechSynergy Labs: Worked together on advanced data processing systems.
                    CodeFusion: Partnered on a mobile app development project with integrated AI capabilities.
                    DataPulse Labs: Collaborated on data visualization and business intelligence solutions.
                  </p>
                </div>
                {/*
              <div className='className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <h3 className="text-xl font-semibold mb-2"></h3>
                <p className="text-gray-700 mb-2">Company Link: </p>
                <p className="text-gray-700 mb-2">Previous Partners:</p>
                <p className="text-gray-700 mb-2">Previous Partners:</p>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

      export default Info;
