import React from 'react';

export default function CaseUse() {
    return (
        <div id='case-use' className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-4 font-sans text-white">
            <div>
                <h2 className="text-3xl font-bold mb-4 text-center custom-blue-text">Case Use</h2>
                <p className="text-lg text-gray-300 text-center mb-12">
                    See how healthcare providers across specialties are transforming their practice with Clin Technologies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                    <CaseUseCard
                        specialty="Primary Care"
                        description="Dr S.J.M.D reduced her documentation time by 52%, allowing her to see 3 more patients daily while finishing her charts before leaving the office."
                        quote="The AI tool streamlines a tedious process, reduces 'click fatigue', and helps me reclaim some sanity."
                        author="Dr. S.J., MD"
                    />
                    <CaseUseCard
                        specialty="Emergency Medicine"
                        description="Our ED department implemented Clin Tech, resulting in more thorough documentation and a 70% decrease in chart completion time during high-volume periods. Our nurses love it."
                        quote="Emergency Department (ED) Nurse Manager"
                    />
                    <CaseUseCard
                        specialty="Behavioral Health"
                        description="“Chartwright has been transformative for our clinic. Our therapists were drowning in documentation; We’ve slashed average charting time to under 3 minutes per patient, freeing up hours for direct care. More importantly, we’ve seen a significant reduction in documentation errors and compliance flags. It’s not just faster; it’s smarter documentation.”"
                        author="Clinical Director, Behavioral Health Practice"
                    />
                    <CaseUseCard
                        specialty="Case Management"
                        description="“Honestly, with the number of patients I manage, documentation felt like a constant, losing battle. But this AI feels like getting an assistant. It takes my detailed notes and instantly creates the clear, customized charts I need. I’m getting hours back each week - hours I can now spend directly with patients, tackling barriers, not just typing.”"
                        author="Social Worker/Case Manager"
                    />
                </div>
            </div>
        </div>
    );
};

function CaseUseCard({ specialty, description, quote, author }) {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-start text-left max-w-xl w-full h-full animated-card">
            <h3 className="text-2xl font-semibold mb-3 text-white">{specialty}</h3>
            <p className="text-gray-300 text-base leading-relaxed mb-4">{description}</p>
            {quote && (
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 text-sm mb-3">
                    "{quote}"
                </blockquote>
            )}
            {author && <p className="text-gray-500 text-xs font-medium self-end">— {author}</p>}
        </div>
    );
};