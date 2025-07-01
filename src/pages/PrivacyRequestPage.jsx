import React, { useState } from 'react';
import { FiSend, FiCheckCircle, FiUserCheck } from 'react-icons/fi';

const PrivacyRequestPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    requestType: '',
    details: '',
  });
  const [isAgent, setIsAgent] = useState(false);
  const [agentDetails, setAgentDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // In a real application, you would send this data to your backend API.
    // For this example, we'll simulate an API call with a timeout.
    console.log("Submitting Request:", { ...formData, isAgent, agentDetails });
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500); // Simulate 1.5 second network request
  };

  const handleReset = () => {
    setFormData({ fullName: '', email: '', requestType: '', details: '' });
    setIsAgent(false);
    setAgentDetails('');
    setSubmitted(false);
  };


  // Success view shown after submission
  if (submitted) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center font-sans">
        <div className="text-center max-w-lg mx-auto p-8">
            <FiCheckCircle className="text-green-500 h-16 w-16 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Request Submitted</h1>
            <p className="text-lg text-slate-600 mb-8">
                Thank you. We have received your privacy request and will process it in accordance with our policies and applicable law. We will contact you at <strong>{formData.email}</strong> if we need more information.
            </p>
            <button
                onClick={handleReset}
                className="text-indigo-600 font-semibold hover:underline"
            >
                Submit another request
            </button>
        </div>
      </div>
    );
  }

  // Form view
  return (
    <div className="bg-slate-50 min-h-screen font-sans py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-6 lg:px-8">
        <div className="text-center">
          <FiUserCheck className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Your Privacy Choices
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Use this form to exercise your privacy rights under CCPA/CPRA and other applicable regulations.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-16 space-y-8">
          {/* Personal Information */}
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-slate-900">
                Full Name
              </label>
              <div className="mt-2">
                <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleInputChange} required className="block w-full rounded-md border-0 py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-900">
                Email Address
              </label>
              <div className="mt-2">
                <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required className="block w-full rounded-md border-0 py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>

          {/* Request Type */}
          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-slate-900">Type of Request</legend>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <input id="right-to-know" name="requestType" type="radio" value="know" onChange={handleInputChange} required className="h-4 w-4 border-slate-300 text-indigo-600 focus:ring-indigo-600" />
                <label htmlFor="right-to-know" className="ml-3 block text-sm font-medium leading-6 text-slate-900">Right to Know <span className="text-slate-500 font-normal">- Request information about your data.</span></label>
              </div>
              <div className="flex items-center">
                <input id="right-to-delete" name="requestType" type="radio" value="delete" onChange={handleInputChange} className="h-4 w-4 border-slate-300 text-indigo-600 focus:ring-indigo-600" />
                <label htmlFor="right-to-delete" className="ml-3 block text-sm font-medium leading-6 text-slate-900">Right to Delete <span className="text-slate-500 font-normal">- Request deletion of your personal information.</span></label>
              </div>
            </div>
          </fieldset>

           {/* Details */}
           <div>
              <label htmlFor="details" className="block text-sm font-medium leading-6 text-slate-900">
                Details
              </label>
              <div className="mt-2">
                <textarea name="details" id="details" rows={4} value={formData.details} onChange={handleInputChange} className="block w-full rounded-md border-0 py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Please provide any specific details to help us process your request (optional)." />
              </div>
            </div>

          {/* Authorized Agent */}
          <fieldset>
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input id="is-agent" name="is-agent" type="checkbox" checked={isAgent} onChange={(e) => setIsAgent(e.target.checked)} className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="is-agent" className="font-medium text-slate-900">I am an authorized agent submitting this request on behalf of a user.</label>
              </div>
            </div>
            {isAgent && (
                <div className="mt-4">
                    <label htmlFor="agentDetails" className="block text-sm font-medium leading-6 text-slate-900">
                        Please provide the name of the user you represent and evidence of your authorization.
                    </label>
                    <div className="mt-2">
                        <textarea name="agentDetails" id="agentDetails" rows={3} value={agentDetails} onChange={(e) => setAgentDetails(e.target.value)} required className="block w-full rounded-md border-0 py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
            )}
          </fieldset>

          {/* Submission Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full justify-center items-center gap-2 rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300 disabled:cursor-not-allowed"
            >
              <FiSend />
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrivacyRequestPage;