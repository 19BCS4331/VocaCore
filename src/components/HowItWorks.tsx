import React, { useState } from 'react';
import { PhoneIncoming, PhoneOutgoing, ArrowRight, MessageSquare, Calendar, CheckCircle, Zap, Database } from 'lucide-react';

type CallType = 'inbound' | 'outbound';

const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CallType>('inbound');
  
  const inboundSteps = [
    {
      icon: <PhoneIncoming className="h-6 w-6 text-white" />,
      title: "Customer Calls",
      description: "A potential customer calls your business phone number.",
      highlight: "Instant Connection"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: "AI Assistant Answers",
      description: "Our AI assistant answers with a natural voice, indistinguishable from a human.",
      highlight: "Human-like Voice"
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Smart Conversation",
      description: "The AI engages in natural conversation, answering questions and providing information.",
      highlight: "Contextual Understanding"
    },
    {
      icon: <Calendar className="h-6 w-6 text-white" />,
      title: "Information Collection",
      description: "The AI collects relevant information and qualifies the lead based on your criteria.",
      highlight: "Intelligent Qualification"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-white" />,
      title: "Seamless Handoff",
      description: "Information is sent to your CRM and you're notified of qualified leads.",
      highlight: "Automated Integration"
    }
  ];
  
  const outboundSteps = [
    {
      icon: <Database className="h-6 w-6 text-white" />,
      title: "Campaign Setup",
      description: "You set up call parameters, target audience, and script in our dashboard.",
      highlight: "Easy Configuration"
    },
    {
      icon: <PhoneOutgoing className="h-6 w-6 text-white" />,
      title: "AI Makes Calls",
      description: "Our AI assistant calls leads with natural conversation flow and voice.",
      highlight: "Automated Outreach"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: "Dynamic Conversation",
      description: "AI adapts to responses, handles objections, and collects information.",
      highlight: "Adaptive Intelligence"
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Real-time Analysis",
      description: "AI analyzes responses and sentiment to optimize conversation flow and outcomes.",
      highlight: "Sentiment Analysis"
    },
    {
      icon: <Calendar className="h-6 w-6 text-white" />,
      title: "Results & Follow-up",
      description: "Qualified leads are scheduled for follow-up and data is synced to your CRM.",
      highlight: "Automated Workflow"
    }
  ];
  // Add animation for tab switching
  const [animating, setAnimating] = useState(false);
  const activeSteps = activeTab === 'inbound' ? inboundSteps : outboundSteps;
  
  const handleTabChange = (tab: CallType) => {
    if (tab !== activeTab) {
      setAnimating(true);
      setTimeout(() => {
        setActiveTab(tab);
        setTimeout(() => setAnimating(false), 100);
      }, 300);
    }
  };

  // Auto-rotate tabs for demo effect
  // const [autoRotate, setAutoRotate] = useState(false);
  
  // useEffect(() => {
  //   let interval: number | undefined;
  //   if (autoRotate) {
  //     interval = window.setInterval(() => {
  //       handleTabChange(activeTab === 'inbound' ? 'outbound' : 'inbound');
  //     }, 8000); // Switch every 8 seconds
  //   }
  //   return () => {
  //     if (interval) window.clearInterval(interval);
  //   };
  // }, [activeTab, autoRotate]);
  
  return (
    <section id="how-it-works" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-purple-200/50 to-transparent dark:from-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200/50 to-transparent dark:from-teal-900/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fadeIn">
          <div className="inline-flex items-center bg-purple-50 dark:bg-purple-900/30 rounded-full px-4 py-2 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-purple-600 mr-2"></span>
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Process Flow</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            How Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">AI Calling</span> Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Our AI calling assistant seamlessly handles both inbound and outbound calls with advanced intelligence.
          </p>
          
          {/* <div className="flex items-center justify-center mt-4 mb-2">
            <label className="inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={autoRotate}
                onChange={() => setAutoRotate(!autoRotate)}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-600 dark:text-gray-300">Auto-demo</span>
            </label>
          </div> */}
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-12 p-1 animate-scaleIn overflow-hidden">
          <div className="flex flex-col sm:flex-row">
            <button
              onClick={() => handleTabChange('inbound')}
              className={`flex-1 py-4 px-6 text-center rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg transition-all duration-300 ${
                activeTab === 'inbound' 
                  ? 'bg-gradient-to-r from-purple-600 to-teal-500 text-white shadow-lg' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <div className="flex items-center justify-center">
                <PhoneIncoming className="h-5 w-5 mr-2" />
                <span className="font-medium">Inbound Calls</span>
              </div>
            </button>
            <button
              onClick={() => handleTabChange('outbound')}
              className={`flex-1 py-4 px-6 text-center rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg transition-all duration-300 ${
                activeTab === 'outbound' 
                  ? 'bg-gradient-to-r from-purple-600 to-teal-500 text-white shadow-lg' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <div className="flex items-center justify-center">
                <PhoneOutgoing className="h-5 w-5 mr-2" />
                <span className="font-medium">Outbound Calls</span>
              </div>
            </button>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-5 gap-6 transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
            {activeSteps.map((step, index) => (
              <div key={index} className="relative animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 group transform hover:-translate-y-1">
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-teal-500 text-white text-xs font-semibold rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {step.highlight}
                  </div>
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-purple-400 to-teal-600 dark:from-purple-500 dark:to-teal-700 mb-5 mx-auto shadow-md group-hover:shadow-purple-300/30 dark:group-hover:shadow-purple-500/20 transition-all duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {step.description}
                  </p>
                </div>
                
                {index < activeSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                    <ArrowRight className="h-6 w-6 text-purple-400 animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 mt-10">
            {activeSteps.map((_, index) => (
              <div 
                key={index} 
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === 0 ? 'w-6 bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;