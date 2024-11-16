'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, BookOpen, CheckCircle } from 'lucide-react';

const Enroll = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    course: '',
    name: '',
    email: '',
    phone: '',
    startDate: '',
    paymentMethod: '',
  });

  const courses = [
    {
      id: 'flutter',
      name: 'Flutter App Development',
      price: 25,
      duration: '12 weeks',
    },
    {
      id: 'web',
      name: 'Web Development',
      price: 20,
      duration: '10 weeks',
    },
    {
      id: 'react',
      name: 'React Development',
      price: 25,
      duration: '8 weeks',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle final submission
      console.log('Form submitted:', formData);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Choose Your Course</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses.map((course) => (
                <label
                  key={course.id}
                  className={`relative rounded-lg border-2 p-6 cursor-pointer hover:border-blue-500 transition-colors ${
                    formData.course === course.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="course"
                    value={course.id}
                    checked={formData.course === course.id}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className="flex flex-col h-full">
                    <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
                    <p className="text-gray-600 mb-4">Duration: {course.duration}</p>
                    <p className="text-2xl font-bold text-blue-600 mt-auto">${course.price}</p>
                    {formData.course === course.id && (
                      <div className="absolute top-4 right-4">
                        <CheckCircle className="h-6 w-6 text-blue-600" />
                      </div>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                  Preferred Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Payment Information</h2>
            <div className="space-y-4">
              {['credit-card', 'paypal', 'bank-transfer'].map((method) => (
                <label
                  key={method}
                  className={`relative rounded-lg border-2 p-6 cursor-pointer hover:border-blue-500 transition-colors ${
                    formData.paymentMethod === method ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={formData.paymentMethod === method}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className="flex items-center">
                    <CreditCard className="h-6 w-6 text-blue-600 mr-3" />
                    <span className="font-medium capitalize">
                      {method.split('-').join(' ')}
                    </span>
                    {formData.paymentMethod === method && (
                      <CheckCircle className="h-5 w-5 text-blue-600 ml-auto" />
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Enroll Now</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Start your journey to becoming a professional developer
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-12">
              {[
                { icon: BookOpen, label: 'Choose Course' },
                { icon: Calendar, label: 'Personal Info' },
                { icon: CreditCard, label: 'Payment' },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`flex flex-col items-center ${
                      index < step ? 'text-blue-600' : 'text-gray-400'
                    }`}
                  >
                    <div
                      className={`rounded-full p-3 ${
                        index < step ? 'bg-blue-100' : 'bg-gray-100'
                      }`}
                    >
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm mt-2">{item.label}</span>
                  </div>
                  {index < 2 && (
                    <div
                      className={`w-24 h-1 mx-4 ${
                        index < step - 1 ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit}>
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {renderStepContent()}
              </motion.div>

              <div className="mt-8 flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="btn-outline"
                  >
                    Previous
                  </button>
                )}
                <button
                  type="submit"
                  className="btn ml-auto"
                >
                  {step === 3 ? 'Complete Enrollment' : 'Continue'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enroll;