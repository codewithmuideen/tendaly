import React from 'react';
import { FiUserCheck } from 'react-icons/fi';

const PrivacyRequestPage = () => {
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

        <form
          action="/privacy_submit.php"
          method="POST"
          className="mt-16 space-y-8"
        >
          {/* Personal Information */}
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-slate-900">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                className="mt-2 block w-full rounded-md border-0 py-2 px-3 shadow-sm ring-1 ring-slate-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-2 block w-full rounded-md border-0 py-2 px-3 shadow-sm ring-1 ring-slate-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Request Type */}
          <fieldset>
            <legend className="text-sm font-semibold text-slate-900">Type of Request</legend>
            <div className="mt-4 space-y-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="requestType"
                  value="know"
                  required
                  className="h-4 w-4 text-indigo-600"
                />
                <span>Right to Know - Request info about your data</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="requestType"
                  value="delete"
                  className="h-4 w-4 text-indigo-600"
                />
                <span>Right to Delete - Request data deletion</span>
              </label>
            </div>
          </fieldset>

          {/* Details */}
          <div>
            <label htmlFor="details" className="block text-sm font-medium text-slate-900">
              Details (optional)
            </label>
            <textarea
              name="details"
              id="details"
              rows={4}
              className="mt-2 block w-full rounded-md border-0 py-2 px-3 shadow-sm ring-1 ring-slate-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              placeholder="Please provide details to help us process your request."
            ></textarea>
          </div>

          {/* Authorized Agent */}
          <fieldset>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="isAgent"
                id="isAgent"
                className="h-4 w-4 rounded border-slate-300 text-indigo-600"
              />
              <label htmlFor="isAgent" className="text-sm font-medium text-slate-900">
                I am an authorized agent submitting on behalf of someone
              </label>
            </div>
            <div className="mt-4">
              <label htmlFor="agentDetails" className="block text-sm font-medium text-slate-900">
                Agent Authorization Details (if applicable)
              </label>
              <textarea
                name="agentDetails"
                id="agentDetails"
                rows={3}
                className="mt-2 block w-full rounded-md border-0 py-2 px-3 shadow-sm ring-1 ring-slate-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                placeholder="Provide name of user and proof of authorization."
              ></textarea>
            </div>
          </fieldset>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Submit Privacy Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrivacyRequestPage;
