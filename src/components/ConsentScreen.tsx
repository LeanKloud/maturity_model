import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

interface ConsentScreenProps {
  onBack: () => void;
  onContinue: () => void;
}

export default function ConsentScreen({ onBack, onContinue }: ConsentScreenProps) {
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>
          
          <h1 className="text-3xl font-bold text-white mb-2">
            Quick Insight Assessment
          </h1>
          <p className="text-gray-300 text-lg">
            Before we begin, please review the following information
          </p>
          
          <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium mt-4">
            <span className="font-semibold">Free Assessment</span>
          </div>
        </div>

        {/* Cloud Focus Reminder */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 mb-8">
          <div className="flex items-start mb-6">
            <AlertCircle className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Cloud Focus Reminder
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                This assessment is designed to evaluate your cloud maturity across architecture, security, 
                operations, cost, etc. While some questions may feel generic, please answer in the context 
                of your cloud environments (AWS, Azure, GCP, or multi-cloud).
              </p>
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="border-t border-gray-700 pt-6">
            <label className="flex items-start cursor-pointer">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                    isAgreed
                      ? 'bg-green-600 border-green-600'
                      : 'border-gray-400 hover:border-gray-300'
                  }`}
                >
                  {isAgreed && (
                    <CheckCircle className="h-4 w-4 text-white" />
                  )}
                </div>
              </div>
              <span className="ml-3 text-white font-medium">
                I understand this assessment focuses on cloud environments and I agree to continue.
              </span>
            </label>
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={onContinue}
            disabled={!isAgreed}
            className={`px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center mx-auto ${
              isAgreed
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isAgreed ? (
              <>
                <CheckCircle className="h-5 w-5 mr-2" />
                Agree & Continue
              </>
            ) : (
              'Please agree to continue'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}