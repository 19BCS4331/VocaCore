import React, { useState } from 'react';
import { Building2, Home, Stethoscope, Car, Briefcase, Store, Headphones, GraduationCap } from 'lucide-react';

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  isActive?: boolean;
  onClick?: () => void;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, description, features, isActive = false, onClick }) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border h-full cursor-pointer transform hover:-translate-y-1 ${isActive 
        ? 'border-purple-400 dark:border-purple-500 shadow-lg shadow-purple-100 dark:shadow-purple-900/20' 
        : 'border-gray-100 dark:border-gray-700'}`}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className={`h-14 w-14 rounded-full flex items-center justify-center mb-4 mr-4 ${isActive 
          ? 'bg-gradient-to-br from-purple-500 to-teal-500' 
          : 'bg-purple-100 dark:bg-purple-900/30'}`}
        >
          {React.cloneElement(icon as React.ReactElement, { 
            className: `h-6 w-6 ${isActive ? 'text-white' : 'text-purple-600 dark:text-purple-400'}` 
          })}
        </div>
        <div>
          <h3 className={`text-xl font-bold mb-2 ${isActive 
            ? 'text-purple-600 dark:text-purple-400' 
            : 'text-gray-900 dark:text-white'}`}
          >
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          
          {isActive && (
            <div className="mt-4 space-y-2 animate-fadeIn">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                    <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Industries: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState<number>(0);

  const industries = [
    {
      icon: <Home />,
      title: "Real Estate",
      description: "Handle property inquiries, qualify buyers, and schedule viewings with AI-powered efficiency.",
      features: [
        "24/7 property inquiry handling",
        "Automated buyer qualification",
        "Instant viewing scheduling",
        "Follow-up call automation",
        "Market update notifications"
      ]
    },
    {
      icon: <Stethoscope />,
      title: "Medical Clinics",
      description: "Streamline patient communications and appointment management for improved healthcare delivery.",
      features: [
        "Patient appointment scheduling",
        "Automated appointment reminders",
        "Insurance verification calls",
        "Post-visit follow-ups",
        "Prescription refill management"
      ]
    },
    {
      icon: <Car />,
      title: "Automotive",
      description: "Enhance customer service and streamline operations for dealerships and service centers.",
      features: [
        "Service appointment scheduling",
        "Vehicle maintenance reminders",
        "Sales inquiry qualification",
        "Customer satisfaction surveys",
        "Service follow-up calls"
      ]
    },
    {
      icon: <Building2 />,
      title: "Professional Services",
      description: "Elevate client engagement and optimize scheduling for law firms, accounting, and consulting.",
      features: [
        "Client intake automation",
        "Consultation scheduling",
        "Document preparation reminders",
        "Service follow-up calls",
        "Client satisfaction surveys"
      ]
    },
    {
      icon: <Briefcase />,
      title: "Financial Services",
      description: "Improve client communications and streamline appointment scheduling for financial advisors.",
      features: [
        "Appointment scheduling",
        "Financial review reminders",
        "Document collection calls",
        "Market update notifications",
        "Client onboarding automation"
      ]
    },
    {
      icon: <Store />,
      title: "Retail & E-commerce",
      description: "Enhance customer support and drive sales with proactive outreach and follow-up.",
      features: [
        "Order status updates",
        "Abandoned cart follow-ups",
        "Product restock notifications",
        "Customer satisfaction surveys",
        "Loyalty program engagement"
      ]
    },
    {
      icon: <Headphones />,
      title: "Customer Support",
      description: "Scale your support operations and improve response times without increasing headcount.",
      features: [
        "Tier-1 support automation",
        "Ticket status updates",
        "Satisfaction follow-ups",
        "Knowledge base guidance",
        "Support queue management"
      ]
    },
    {
      icon: <GraduationCap />,
      title: "Education",
      description: "Streamline administrative communications and improve student engagement for schools and universities.",
      features: [
        "Enrollment assistance",
        "Attendance follow-ups",
        "Parent-teacher scheduling",
        "Tuition payment reminders",
        "Campus event notifications"
      ]
    }
  ];

  return (
    <section id="industries" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 dark:opacity-10">
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-teal-200 dark:bg-teal-900/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center bg-purple-50 dark:bg-purple-900/30 rounded-full px-4 py-2 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-purple-600 mr-2"></span>
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Tailored Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">We Serve</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Our AI calling assistant is customized for the unique needs of various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-10">
          {industries.map((industry, index) => (
            <button 
              key={index}
              onClick={() => setActiveIndustry(index)}
              className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${activeIndustry === index 
                ? 'bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/10 shadow-sm' 
                : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
            >
              <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-3 ${activeIndustry === index 
                ? 'bg-gradient-to-br from-purple-500 to-teal-500' 
                : 'bg-purple-100 dark:bg-purple-900/30'}`}
              >
                {React.cloneElement(industry.icon as React.ReactElement, { 
                  className: `h-6 w-6 ${activeIndustry === index ? 'text-white' : 'text-purple-600 dark:text-purple-400'}` 
                })}
              </div>
              <span className={`text-sm font-medium text-center ${activeIndustry === index 
                ? 'text-purple-600 dark:text-purple-400' 
                : 'text-gray-700 dark:text-gray-300'}`}
              >
                {industry.title}
              </span>
            </button>
          ))}
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto animate-fadeIn">
          <IndustryCard 
            icon={industries[activeIndustry].icon}
            title={industries[activeIndustry].title}
            description={industries[activeIndustry].description}
            features={industries[activeIndustry].features}
            isActive={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Industries;