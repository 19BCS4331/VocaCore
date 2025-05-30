import React, { useState, useRef } from 'react';
import Button from './shared/Button';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id === 'first-name' ? 'firstName' : 
       id === 'last-name' ? 'lastName' : id]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.firstName || !formData.lastName) {
      setSubmitStatus({
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Replace these with your actual EmailJS service ID, template ID, and public key
      // You'll need to sign up at emailjs.com and create these
      const serviceId = 'service_msk2nm9'; // Create a service that connects to your Zoho Mail
      const templateId = 'template_po9q4p8'; // Create a template for your contact form
      const publicKey = 'qPCKCHVrzX_AfNt5L';
      
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
        to_name: 'VocaCore Team'
      };
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus({
        success: true,
        message: 'Thank you! Your demo request has been received. We will contact you shortly.'
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your request. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="book-demo" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Book a Demo
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Experience our AI calling assistant in action. Fill out the form and we'll schedule a personalized demo for your business.
                </p>
                
                {submitStatus && (
                  <div className={`p-4 mb-6 rounded-lg ${
                    submitStatus.success ? 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
                    'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        First name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Last name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      What are you looking to achieve?
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button 
                      type="submit" 
                      variant="primary" 
                      fullWidth
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Schedule Demo'}
                    </Button>
                  </div>
                </form>
              </div>
              
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-900">
                  <div className="absolute inset-0 bg-pattern opacity-10"></div>
                </div>
                
                <div className="relative h-full flex flex-col justify-center p-12 text-white">
                  <div className="max-w-lg">
                    <h3 className="text-2xl font-bold mb-6">
                      Why Book a Demo?
                    </h3>
                    
                    <ul className="space-y-4">
                      {[
                        "See the AI calling assistant in action with your specific use case",
                        "Get personalized insights on how it can benefit your business",
                        "Learn about our easy integration process",
                        "Discover pricing options tailored to your needs",
                        "Have all your questions answered by our experts"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-6 w-6 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;