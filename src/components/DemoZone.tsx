import React, { useState } from 'react';
import { Headphones, Play, Phone, Home, Stethoscope, Car, Building2 } from 'lucide-react';
import AudioPlayer from './shared/AudioPlayer';

interface DemoCardProps {
  industry: string;
  description: string;
  audioUrl: string;
  isActive: boolean;
  icon: React.ReactNode;
  transcript: string;
  onClick: () => void;
}

const DemoCard: React.FC<DemoCardProps> = ({ industry, description, audioUrl, isActive, icon, transcript, onClick }) => {
  const [showTranscript, setShowTranscript] = useState(false);
  
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border cursor-pointer ${isActive 
        ? 'border-purple-400 dark:border-purple-500 shadow-lg' 
        : 'border-gray-100 dark:border-gray-700'}`}
      onClick={onClick}
    >
      <div className="flex items-start mb-4">
        <div className={`h-16 w-16 rounded-full flex items-center justify-center mr-5 flex-shrink-0 ${isActive 
          ? 'bg-gradient-to-br from-purple-500 to-teal-500' 
          : 'bg-purple-100 dark:bg-purple-900/30'}`}
        >
          {React.cloneElement(icon as React.ReactElement, { 
            className: `h-8 w-8 ${isActive ? 'text-white' : 'text-purple-600 dark:text-purple-400'}` 
          })}
        </div>
        <div>
          <h3 className={`text-xl font-bold mb-1 ${isActive 
            ? 'text-purple-600 dark:text-purple-400' 
            : 'text-gray-900 dark:text-white'}`}
          >
            {industry}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
      
      {isActive && (
        <div className="mt-6 animate-fadeIn">
          <AudioPlayer audioUrl={audioUrl} />
          
          <div className="mt-6">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowTranscript(!showTranscript);
              }}
              className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center"
            >
              {showTranscript ? 'Hide transcript' : 'Show transcript'}
              <span className="ml-1">{showTranscript ? '↑' : '↓'}</span>
            </button>
            
            {showTranscript && (
              <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-sm text-gray-600 dark:text-gray-300 animate-fadeIn">
                <div className="flex items-start mb-2">
                  <Phone className="h-4 w-4 mr-2 mt-0.5 text-gray-400" />
                  <p><span className="font-medium">Caller:</span> {transcript.split('\n')[0]}</p>
                </div>
                <div className="flex items-start">
                  <Phone className="h-4 w-4 mr-2 mt-0.5 text-purple-500" />
                  <p><span className="font-medium text-purple-600 dark:text-purple-400">AI Assistant:</span> {transcript.split('\n')[1]}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const DemoZone: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<number>(0);
  
  const demos = [
    {
      industry: "Real Estate",
      icon: <Home />,
      description: "AI assistant handling a property inquiry and scheduling a viewing",
      audioUrl: "https://example.com/demos/real-estate-demo.mp3", // This would be a real URL in production
      transcript: "Hi, I'm interested in the 3-bedroom house on Oak Street. Can I schedule a viewing this weekend?\nHello! I'd be happy to help you schedule a viewing for the 3-bedroom house on Oak Street. We have availability this Saturday at 10 AM or 2 PM, or Sunday at 1 PM. Which time works best for you?"
    },
    {
      industry: "Medical Clinic",
      icon: <Stethoscope />,
      description: "AI assistant scheduling a doctor's appointment and collecting patient information",
      audioUrl: "https://example.com/demos/medical-demo.mp3", // This would be a real URL in production
      transcript: "I need to schedule an appointment with Dr. Johnson for my annual check-up.\nI'd be happy to help you schedule that appointment. Dr. Johnson has availability next Tuesday at 9 AM or Thursday at 2 PM. Before I book that for you, could you please confirm your name and date of birth?"
    },
    {
      industry: "Automotive",
      icon: <Car />,
      description: "AI assistant handling a service inquiry and booking a maintenance appointment",
      audioUrl: "https://example.com/demos/automotive-demo.mp3", // This would be a real URL in production
      transcript: "My car is making a strange noise when I brake. I need to bring it in for service.\nI understand that can be concerning. I'd be happy to schedule a service appointment for you. We have openings tomorrow at 8 AM or Friday at 10 AM. Also, could you tell me the make, model, and year of your vehicle?"
    },
    {
      industry: "Professional Services",
      icon: <Building2 />,
      description: "AI assistant handling a consultation request for a law firm",
      audioUrl: "https://example.com/demos/professional-demo.mp3", // This would be a real URL in production
      transcript: "I need to speak with an attorney about setting up an LLC for my new business.\nThank you for reaching out. I'd be happy to schedule a consultation with one of our business attorneys. To help match you with the right specialist, could you tell me a bit more about your business and when you're looking to establish the LLC?"
    }
  ];

  return (
    <section id="demo" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 dark:opacity-10">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-teal-200 dark:bg-teal-900/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-purple-50 dark:bg-purple-900/30 rounded-full px-4 py-2 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-purple-600 mr-2"></span>
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Hear It In Action</span>
          </div>
          <div className="flex items-center justify-center mb-4">
            <Headphones className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Demo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">Zone</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Listen to our AI assistant in action across different industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {demos.map((demo, index) => (
            <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
              <DemoCard 
                industry={demo.industry}
                description={demo.description}
                audioUrl={demo.audioUrl}
                icon={demo.icon}
                transcript={demo.transcript}
                isActive={activeDemo === index}
                onClick={() => setActiveDemo(index)}
              />
            </div>
          ))}
        </div>
        
        <div className="max-w-xl mx-auto mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Want to hear how our AI assistant would handle your specific use case?
          </p>
          <a 
            href="#book-demo" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-teal-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Play className="h-5 w-5 mr-2" />
            Request a Custom Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoZone;