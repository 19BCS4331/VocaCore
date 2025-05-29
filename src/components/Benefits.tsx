import React from 'react';
import { Clock, Users, DollarSign, CheckCircle, TrendingUp } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 group transform hover:-translate-y-1">
      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-500 dark:to-purple-800 flex items-center justify-center mb-5 shadow-md group-hover:shadow-purple-300/30 dark:group-hover:shadow-purple-500/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "24/7 AI Assistant",
      description: "Our AI handles calls at any hour, ensuring you never miss important connections or opportunities, even outside business hours."
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Smart Lead Capture",
      description: "Qualify leads and collect information automatically, converting more callers into customers with intelligent conversation flows."
    },
    {
      icon: <DollarSign className="h-6 w-6 text-white" />,
      title: "Cost Savings",
      description: "Reduce staffing costs by up to 80% compared to human answering services while maintaining high-quality customer interactions."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-white" />,
      title: "Seamless Integration",
      description: "Easily integrates with your existing CRM, calendar, and business tools to create a unified communication ecosystem."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: "Scalable Solution",
      description: "Grows with your business needs - handle 10 or 10,000 calls with the same level of efficiency and personalization."
    }
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 dark:opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 -left-32 w-96 h-96 bg-teal-200 dark:bg-teal-900/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center bg-purple-50 dark:bg-purple-900/30 rounded-full px-4 py-2 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-purple-600 mr-2"></span>
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">AI Calling Service</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Transform your business communications with intelligent automation that works for you 24/7.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
              <BenefitCard 
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;