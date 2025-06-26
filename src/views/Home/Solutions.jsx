import React from "react";

export default function Solutions() {
  return (
    <section id="solutions" className="bg-[#0A0F2C] text-white py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-[#4B8CFF] mb-3">Our Solutions</h2>
      <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
        Our comprehensive suite of AI-powered solutions transforms every aspect of healthcare documentation:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
      
        <div className="bg-[#111C44] rounded-lg border-t-4 border-[#00D991] p-6 text-left shadow-md animated-card">
          <div className="flex items-start gap-4 mb-4">
            <div className="py-4 px-5 bg-[#1A264A] rounded-full flex items-center justify-center rounded-full">
              ✓
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#4B8CFF] mb-2">Validify</h3>
              <p className="text-base text-gray-300">
                Mitigate compliance risk with powerful AI that optimizes chart reviews for accuracy, integrity, coding, and compliance. Validify automatically identifies documentation gaps, ensures coding accuracy, and maintains regulatory compliance.
              </p>
            </div>
          </div>
        </div>

  
        <div className="bg-[#111C44] rounded-lg border-t-4 border-[#FF9C33] p-6 text-left shadow-md animated-card">
          <div className="flex items-start gap-4 mb-4">
            <div className="py-4 px-5 bg-[#1A264A] rounded-full flex items-center justify-center rounded-full">
              🚫
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#4B8CFF] mb-2">Redactify</h3>
              <p className="text-base text-gray-300">
                Effortlessly redact HIPAA identifiers from text, documents, and structured data with Redactify – automating your compliance workflow. Protect sensitive patient information while maintaining clinical context.
              </p>
            </div>
          </div>
        </div>

    
        <div className="bg-[#111C44] rounded-lg border-t-4 border-[#4B8CFF] p-6 text-left shadow-md animated-card">
          <div className="flex items-start gap-4 mb-4">
            <div className="py-3.5 px-5 bg-[#1A264A] rounded-full flex items-center justify-center rounded-full">
              🗣️
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#4B8CFF] mb-2">TranscriptX</h3>
              <p className="text-base text-gray-300">
                Spend less time documenting. TranscriptX dictates highly accurate medical transcriptions of patient encounters into text, understanding complex medical terminology and clinical context for superior accuracy.
              </p>
            </div>
          </div>
        </div>

     
        <div className="bg-[#111C44] rounded-lg border-t-4 border-[#FF5CA8] p-6 text-left shadow-md animated-card">
          <div className="flex items-start gap-4 mb-4">
            <div className="py-3.5 px-5 bg-[#1A264A] rounded-full flex items-center justify-center rounded-full">
              📝
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#4B8CFF] mb-2">Chartwright</h3>
              <p className="text-base text-gray-300">
                Your best friend with charting – turn any normal text into a high-quality chart, delivered exactly how healthcare professionals need it with extensive customization options to match your workflow and documentation standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
