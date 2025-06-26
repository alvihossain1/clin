import React from 'react';


export default function OurTechnology(){
  return (
    <div id='our-technology' className="min-h-screen bg-gray-900 flex flex-col items-center p-4 font-sans text-white">
      <h2 className="text-3xl font-bold mb-4 text-center custom-blue-text">Our Technology</h2>
      <p className="text-lg text-gray-300 text-center max-w-3xl mb-12">
        At Clin Technologies, we’ve built our platform on groundbreaking AI technology specifically designed for healthcare. Our solutions
        use the latest advancements in natural language processing and machine learning to create a system that truly understands the
        complexities of medical documentation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <FeatureCard
          icon="brain"
          title="Sophisticated Natural Language Processing"
          description="At the core of our platform is an advanced foundation model. This enables our system to grasp the nuances of clinical conversations—understanding context, recognizing intent, and accurately interpreting medical terminology. This deep comprehension allows the AI to generate clear, concise, and contextually relevant medical notes automatically."
        />
        <FeatureCard
          icon="lightbulb"
          title="Learning Mode & Personalization"
          description="Our AI doesn't rely on generic templates. We initiate the process by learning directly from your specific cases and workflows. The system intelligently refines its understanding and output based on your ongoing feedback. With each processed case, its accuracy and alignment with your unique clinical documentation needs become increasingly precise, ensuring a truly personalized solution."
        />
        <FeatureCard
          icon="shield"
          title="Robust Data Privacy & Security"
          description="Protecting sensitive health information is paramount. Our AI solutions are architected with a security-first approach, incorporating principles like 'zero trust'. We utilize robust security measures, including comprehensive encryption (both at rest and in transit) and strict, role-based access controls, to ensure data integrity and confidentiality, limiting access exclusively to authorized personnel."
          badges={['HIPAA COMPLIANT', 'BUSINESS ASSOCIATE AGREEMENT']}
        />
      </div>
    </div>
  );
};


// Card component for displaying technology features
function FeatureCard ({ icon, title, description, badges = [] }){
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-start text-left max-w-sm w-full h-full animated-card">
      <div className="text-blue-400 mb-4">
        {/* Render icon based on prop. Using placeholder for now. */}
        {icon === 'brain' && (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        )}
        {icon === 'lightbulb' && (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m6.364 6.364l-.707-.707M3 9h1m6.364-1.636l-.707-.707M6 15V9a6 6 0 0112 0v6m-3 2c-1.105 0-2-.895-2-2h4c0 1.105-.895 2-2 2z"></path>
          </svg>
        )}
        {icon === 'shield' && (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002 12c0 2.83 1.044 5.412 2.709 7.417L8 21.417V19a2 2 0 012-2h4a2 2 0 012 2v2.417l3.291-1.996C20.956 17.412 22 14.83 22 12c0-3.187-1.147-6.009-3.04-8.016z"></path>
          </svg>
        )}
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
      {badges.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <span key={index} className="bg-blue-700 text-blue-100 text-xs font-medium px-2.5 py-1 rounded-full">
              {badge}
            </span>
          ))}
        </div>
      )}
      <p className="text-gray-300 text-base leading-relaxed">{description}</p>
    </div>
  );
};



