import React, { useState } from 'react';

export default function SolutionInAction() {
    const [isContent, setIsContent] = useState(true)
    const [activeMainTab, setActiveMainTab] = useState('TranscriptX');

    function renderContent(){
        switch (activeMainTab) {
            case 'TranscriptX':
                return (
                    <div className="p-6 bg-gray-800 rounded-b-lg">
                        <h3 className="text-xl font-semibold mb-4 text-white">Experience TranscriptX - Effortless, Accurate Medical Transcription</h3>
                       {isContent && (
                         <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               
                                <div className="bg-gray-900 p-4 rounded-lg shadow-md">
                                    <div className="py-2 px-4 rounded-t-lg text-sm font-medium bg-gray-700 text-white">
                                        Doctor's Dictation (Audio Input Simulation)
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2 text-gray-200">Doctor's Dictation (Audio Input Simulation)</h4>
                                    <div className="bg-gray-700 p-3 rounded-md text-gray-300 text-sm h-64 overflow-y-auto">
                                      
                                        <p>"Okay, uh, patient is Sarah Chen, DOB 02/22/1978. Seen today, October 20th, 2023. Chief complaint, uh... right knee pain, ongoing for about 3 months, worse with activity, especially stairs. Subjective: Patient describes the pain as a dull ache, located medially. Rates it a 6/10 currently, can go up to 8/10 after exercise. Some morning stiffness. Uses maybe 15 minutes. No significant swelling reported, denies locking or giving way. Uh... tried over-the-counter ibuprofen with some partial relief. No history of trauma. Otherwise healthy. Objective: Gait is, non-antalgic. Right knee, uh, no effusion, no visible mild tenderness to palpation over the medial joint line. McMurray's test is negative. Lachman and drawer tests stable. Range of motion is full, though terminal flexion elicits some discomfort medially. Assessment: Likely medial compartment osteoarthritis of the right knee. Differential includes medial meniscus tear, although less likely given exam findings. Plan: Uh... obtain bilateral weight-bearing knee X-rays. Recommend continued NSAID use as needed, consider switching to Nabumetone. Discussed physical therapy options for strengthening."</p>
                                    </div>
                                </div>

                                <div className="bg-gray-900 p-4 rounded-lg shadow-md">
                                    <div className="py-2 px-4 rounded-t-lg text-sm font-medium bg-yellow-600">
                                        TranscriptX - AI-Generated Note
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2 text-gray-200">TranscriptX - AI-Generated Note</h4>
                                    <div className="bg-yellow-800 p-3 rounded-md text-white text-sm h-64 overflow-y-auto">
                                      
                                        <p><span className="font-semibold">Patient:</span> Sarah Chen</p>
                                        <p><span className="font-semibold">DOB:</span> 02/22/1978</p>
                                        <p><span className="font-semibold">Date of Service:</span> October 20, 2023</p>
                                        <p><span className="font-semibold">Chief Complaint:</span></p>
                                        <p>Right knee pain x 3 months.</p>
                                        <p><span className="font-semibold">Subjective:</span></p>
                                        <p>Patient reports right knee pain ongoing for approximately 3 months, described as a dull ache located medially. Pain worsens with activity, particularly stair climbing. Pain rated 6/10 currently, increasing to 8/10 post-exercise. Reports approximately 15 minutes of morning stiffness. Denies significant swelling, locking, or episodes of giving way. Partial relief noted with over-the-counter Ibuprofen. No history of trauma. Patient is otherwise healthy.</p>
                                        <p><span className="font-semibold">Objective:</span></p>
                                        <p>Gait non-antalgic.</p>
                                        <p>Right knee exam: No visible effusion. Mild tenderness to palpation over the medial joint line. McMurray's test negative. Lachman and drawer tests stable. Full range of motion, with terminal flexion eliciting medial discomfort.</p>
                                        <p><span className="font-semibold">Assessment:</span></p>
                                        <p>1. Likely medial compartment osteoarthritis of the right knee.</p>
                                        <p>2. Differential diagnosis includes medial meniscus tear.</p>
                                        <p><span className="font-semibold">Plan:</span></p>
                                        <p>1. Obtain bilateral weight-bearing knee X-rays.</p>
                                        <p>2. Continue NSAID use as needed; consider switching to Nabumetone.</p>
                                        <p>3. Discussed physical therapy options for strengthening.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between mt-4">
                                <button className="py-2 px-4 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 text-sm">Previous Example</button>
                                <button className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">Next Example</button>
                            </div>
                        </div>
                       )}
                    </div>
                );
            case 'Chartwright':
                return <div className="p-6 bg-gray-800 rounded-b-lg">
                    <h3 className="text-xl font-semibold mb-4 text-white">Messy Original Doctor Note</h3>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  

                        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
                            <div className="py-2 px-4 rounded-t-lg text-sm font-medium bg-gray-700 text-white">
                                Doctor's Dictation (Audio Input Simulation)
                            </div>
                            <h4 className="text-lg font-semibold mb-2 text-gray-200">Nurse's Quick Report (Simulated Verbal Input/Jotted Notes)</h4>
                            <div className="bg-gray-700 p-3 rounded-md text-gray-300 text-sm h-64 overflow-y-auto">
                   
                                <p>"Okay, uh, patient is Sarah Chen, DOB 02/22/1978. Seen today, October 20th, 2023. Chief complaint, uh... right knee pain, ongoing for about 3 months, worse with activity, especially stairs. Subjective: Patient describes the pain as a dull ache, located medially. Rates it a 6/10 currently, can go up to 8/10 after exercise. Some morning stiffness. Uses maybe 15 minutes. No significant swelling reported, denies locking or giving way. Uh... tried over-the-counter ibuprofen with some partial relief. No history of trauma. Otherwise healthy. Objective: Gait is, non-antalgic. Right knee, uh, no effusion, no visible mild tenderness to palpation over the medial joint line. McMurray's test is negative. Lachman and drawer tests stable. Range of motion is full, though terminal flexion elicits some discomfort medially. Assessment: Likely medial compartment osteoarthritis of the right knee. Differential includes medial meniscus tear, although less likely given exam findings. Plan: Uh... obtain bilateral weight-bearing knee X-rays. Recommend continued NSAID use as needed, consider switching to Nabumetone. Discussed physical therapy options for strengthening."</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 p-4 rounded-lg shadow-md">
                            <div className="py-2 px-4 rounded-t-lg text-sm font-medium bg-yellow-600">
                                TranscriptX - AI-Generated Note
                            </div>
                            <h4 className="text-lg font-semibold mb-2 text-gray-200">TranscriptX - AI-Structured Nursing Note/Handover</h4>
                            <div className="bg-yellow-800 p-3 rounded-md text-white text-sm h-64 overflow-y-auto">
                             
                                <p><span className="font-semibold">Patient:</span> Sarah Chen</p>
                                <p><span className="font-semibold">DOB:</span> 02/22/1978</p>
                                <p><span className="font-semibold">Date of Service:</span> October 20, 2023</p>
                                <p><span className="font-semibold">Chief Complaint:</span></p>
                                <p>Right knee pain x 3 months.</p>
                                <p><span className="font-semibold">Subjective:</span></p>
                                <p>Patient reports right knee pain ongoing for approximately 3 months, described as a dull ache located medially. Pain worsens with activity, particularly stair climbing. Pain rated 6/10 currently, increasing to 8/10 post-exercise. Reports approximately 15 minutes of morning stiffness. Denies significant swelling, locking, or episodes of giving way. Partial relief noted with over-the-counter Ibuprofen. No history of trauma. Patient is otherwise healthy.</p>
                                <p><span className="font-semibold">Objective:</span></p>
                                <p>Gait non-antalgic.</p>
                                <p>Right knee exam: No visible effusion. Mild tenderness to palpation over the medial joint line. McMurray's test negative. Lachman and drawer tests stable. Full range of motion, with terminal flexion eliciting medial discomfort.</p>
                                <p><span className="font-semibold">Assessment:</span></p>
                                <p>1. Likely medial compartment osteoarthritis of the right knee.</p>
                                <p>2. Differential diagnosis includes medial meniscus tear.</p>
                                <p><span className="font-semibold">Plan:</span></p>
                                <p>1. Obtain bilateral weight-bearing knee X-rays.</p>
                                <p>2. Continue NSAID use as needed; consider switching to Nabumetone.</p>
                                <p>3. Discussed physical therapy options for strengthening.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between mt-4">
                        <button className="py-2 px-4 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 text-sm">Previous Example</button>
                        <button className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">Next Example</button>
                    </div>
                </div>;
            case 'Redactify':
                return <div className="p-6 bg-gray-800 rounded-b-lg text-white"></div>;
            case 'Validify':
                return <div className="p-6 bg-gray-800 rounded-b-lg text-white"></div>;
            default:
                return null;
        }
    };

    return (
        <div id='solution-in-action' className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-4 font-sans text-white">
            <div>
                <h1 className="text-3xl font-bold mb-8 text-center custom-blue-text">See Our Solutions in Action</h1>

                {/* Main Tabs */}
                <div className="w-full max-w-6xl bg-gray-800 rounded-t-lg p-2 flex justify-between space-x-2">
                    {['TranscriptX', 'Chartwright', 'Redactify', 'Validify'].map((tab) => (
                        <button
                            key={tab}
                            className={`flex-1 py-3 px-4 rounded-t-lg font-medium transition-all duration-300 ease-in-out ${activeMainTab === tab
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                }`}
                            onClick={() => setActiveMainTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="w-full max-w-6xl bg-gray-800 rounded-b-lg shadow-xl">
                    <div className='w-full'>
                        <button onClick={() => { setIsContent(!isContent) }} className="w-full bg-gray-700 p-3 text-center text-gray-300 text-sm rounded-t-lg">
                            Click to collapse comparison
                        </button>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};