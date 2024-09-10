
import React, { useState } from 'react';
import Business from '@/app/(root)/(home)/Business/page';
import Creators from '@/app/(root)/(home)/Creators/page';
import Info from '@/app/(root)/(home)/Info/page';
import Layout from "@/app/layout"

// Define types for data
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

const App: React.FC = () => {
  const [businessData, setBusinessData] = useState<BusinessDataType[] | null>(null);
  const [creatorsData, setCreatorsData] = useState<CreatorsDataType[] | null>(null);

  const handleBusinessSubmit = (data: BusinessDataType[]) => {
    setBusinessData(data);
  };

  const handleCreatorsSubmit = (data: CreatorsDataType[]) => {
    setCreatorsData(data);
  };


  return (
    <Layout> 
      <Business onsubmit={handleBusinessSubmit} />
      <Creators onsubmit={handleCreatorsSubmit} />
      {businessData && creatorsData && (
        <Info businessData={businessData} creatorsData={creatorsData} />
      )}
    </Layout>
  );
};

export default App;    
