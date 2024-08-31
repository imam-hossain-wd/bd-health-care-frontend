/* eslint-disable react/no-unescaped-entities */
'use client'
import {  ClipboardText, ChatCircleDots,Question ,Heart,FirstAid } from "phosphor-react";
// import { HandHeart } from "phosphor-react";

const ClinicSection = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* <h2 className="text-3xl font-bold text-center mb-8">Get Care</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Appointment Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-center mb-4">
            <FirstAid size={60} color="#3b82f6" />
            {/* <HandHeart size={32} color="#3b82f6" /> */}
          </div>

          <h2 className="text-4xl mb-2 text-center font-bold text-[#3E8CFF]">Get Care</h2>
          <h3 className=" font-semibold mb-4">Getting an appointment at Cleveland Clinic is easy. Schedule using any of these convenient options:</h3>
          <ul className="space-y-2">
            <li className="text-blue-500 font-bold">866.320.4573</li>
            <li className="text-gray-700">Appointment request form</li>
            <li className="text-gray-700">Virtual visits</li>
            <li className="text-gray-700">Express Care and Urgent Care</li>
            <li className="text-gray-700">Virtual second opinions</li>
          </ul>
        </div>

        {/* Health and Wellness Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-center mb-4">
            <Heart size={60} color="#3b82f6" />
          </div>
          <h2 className="text-4xl mb-2 text-center font-bold text-[#3E8CFF]">Live Healthier</h2>
          <h3 className=" font-semibold mb-4">Find health and wellness information to help you and your family live a bit healthier each day:</h3>
          <ul className="space-y-2">
            <li className="text-gray-700">Health news and trends</li>
            <li className="text-gray-700">Sign up for our newsletter</li>
            <li className="text-gray-700">Tune in to our podcast</li>
            <li className="text-gray-700">Nutrition and healthy eating</li>
            <li className="text-gray-700">Exercise & Fitness</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-center mb-4">
            <Question size={60} color="#3b82f6" />
          </div>
          <h2 className="text-4xl mb-2 text-center font-bold text-[#3E8CFF]">Need Help?</h2>
          <h3 className=" font-semibold mb-4">Have a question? We want to make it easy to find what you're looking for. Get answers online fast:</h3>
          <ul className="space-y-2">
            <li className="text-blue-500 font-bold">216.444.2200</li>
            <li className="text-gray-700">Visiting our main campus</li>
            <li className="text-gray-700">Pay your bill online</li>
            <li className="text-gray-700">MyChart</li>
            <li className="text-gray-700">Request your medical records</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClinicSection;
