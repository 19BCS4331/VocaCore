import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare, Zap, Layers, Settings } from 'lucide-react';
import Button from './shared/Button';

interface FAQItemProps {
  question: string;
  answer: string;
  category?: string;
  icon?: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, category, icon, isOpen, onToggle }) => {
  return (
    <div 
      className={`mb-4 rounded-xl overflow-hidden border transition-all duration-300 ${isOpen 
        ? 'border-purple-300 dark:border-purple-700 shadow-md' 
        : 'border-gray-200 dark:border-gray-700'}`}
    >
      <button
        className={`flex justify-between items-center w-full py-5 px-6 text-left focus:outline-none ${isOpen 
          ? 'bg-purple-50 dark:bg-purple-900/20' 
          : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750'}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          {icon && (
            <div className={`mr-4 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${isOpen 
              ? 'bg-gradient-to-br from-purple-500 to-teal-500 text-white' 
              : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'}`}
            >
              {icon}
            </div>
          )}
          <div>
            {category && (
              <div className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-1">{category}</div>
            )}
            <span className={`text-lg font-medium ${isOpen 
              ? 'text-purple-700 dark:text-purple-300' 
              : 'text-gray-900 dark:text-white'}`}
            >
              {question}
            </span>
          </div>
        </div>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400 dark:text-gray-500" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-6 pt-2 text-gray-600 dark:text-gray-300 animate-fadeIn">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = [
    { name: 'Technology', icon: <Zap className="h-5 w-5" /> },
    { name: 'Features', icon: <Layers className="h-5 w-5" /> },
    { name: 'Integration', icon: <Settings className="h-5 w-5" /> },
    { name: 'Support', icon: <MessageSquare className="h-5 w-5" /> },
    { name: 'All', icon: <HelpCircle className="h-5 w-5" /> }
  ];
  
  const faqs = [
    {
      question: "How natural does the AI voice sound?",
      answer: "Our AI voice technology is virtually indistinguishable from a human voice. We use state-of-the-art neural speech models that include natural pauses, intonation, and conversational elements that make the experience feel completely human.",
      category: "Technology",
      icon: <Zap className="h-5 w-5" />
    },
    {
      question: "Can the AI assistant understand different accents?",
      answer: "Yes, our AI is trained on diverse speech patterns and can understand various accents and dialects. It's continually learning and improving its comprehension abilities for even better performance over time.",
      category: "Technology",
      icon: <Zap className="h-5 w-5" />
    },
    {
      question: "How does the AI handle complex or unexpected questions?",
      answer: "The AI is trained to handle a wide range of scenarios. For unexpected questions, it can either provide relevant information based on its training, politely explain limitations, or escalate to a human representative if needed, depending on your configuration.",
      category: "Features",
      icon: <Layers className="h-5 w-5" />
    },
    {
      question: "Can I customize what the AI says?",
      answer: "Absolutely! You can fully customize the AI's script, conversation flow, responses, and even the voice itself. Our platform allows you to tailor the experience to match your brand voice and specific business needs.",
      category: "Features",
      icon: <Layers className="h-5 w-5" />
    },
    {
      question: "How does the system integrate with my existing tools?",
      answer: "We offer seamless integration with popular CRM systems, calendars, and business tools through our API and direct integrations. This allows the AI to access necessary information and update your systems in real-time.",
      category: "Integration",
      icon: <Settings className="h-5 w-5" />
    },
    {
      question: "What happens if the AI can't resolve an issue?",
      answer: "You can configure escalation paths based on your preferences. The AI can transfer to a human agent, schedule a callback, send detailed information to your team, or take other actions you specify when it encounters situations beyond its capabilities.",
      category: "Support",
      icon: <MessageSquare className="h-5 w-5" />
    },
    {
      question: "Do you offer training for our team?",
      answer: "Yes, we provide comprehensive training for your team on how to configure, manage, and optimize your AI calling assistant. Our training includes dashboard usage, script customization, analytics interpretation, and best practices for maximizing ROI.",
      category: "Support",
      icon: <MessageSquare className="h-5 w-5" />
    },
    {
      question: "Can I get a trial before committing to a plan?",
      answer: "Absolutely! We offer a 14-day free trial that gives you full access to our platform features. You can set up your AI assistant, test calls, and experience the quality and capabilities firsthand before making a commitment.",
      category: "Support",
      icon: <MessageSquare className="h-5 w-5" />
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const filteredFaqs = activeCategory && activeCategory !== 'All' 
    ? faqs.filter(faq => faq.category === activeCategory)
    : faqs;

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 dark:opacity-10">
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-teal-200 dark:bg-teal-900/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fadeIn">
          <div className="inline-flex items-center bg-purple-50 dark:bg-purple-900/30 rounded-full px-4 py-2 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-purple-600 mr-2"></span>
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Everything you need to know about our AI calling service.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.name 
                  ? 'bg-gradient-to-r from-purple-600 to-teal-500 text-white shadow-md' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'}`}
                onClick={() => setActiveCategory(category.name)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
              <FAQItem 
                question={faq.question}
                answer={faq.answer}
                category={faq.category}
                icon={faq.icon}
                isOpen={activeIndex === index}
                onToggle={() => toggleFAQ(index)}

              />
            </div>
          ))}
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <p className="text-gray-600 dark:text-gray-300">No questions found in this category.</p>
            </div>
          )}
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 text-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 animate-fadeIn">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Still have questions?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our team is ready to answer any questions you might have about our AI calling service.
          </p>
          <Button 
            href="#book-demo" 
            variant="primary"
          >
            Contact our support team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;