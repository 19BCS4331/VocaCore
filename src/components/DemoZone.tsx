import React, { useState } from 'react';
import { Headphones, Play, Phone, Zap } from 'lucide-react';
import AudioPlayer from './shared/AudioPlayer';

interface DemoProps {
  title: string;
  description: string;
  audioUrl: string;
  transcript: string;
}

const Demo: React.FC<DemoProps> = ({ title, description, audioUrl, transcript }) => {
  const [showTranscript, setShowTranscript] = useState(false);
  
  // Parse the transcript into conversation parts
  const conversationParts = transcript.split('\n').reduce((acc: {speaker: string, text: string}[], line: string) => {
    if (line.trim() === 'User' || line.trim() === 'AI') {
      acc.push({ speaker: line.trim(), text: '' });
    } else if (acc.length > 0) {
      acc[acc.length - 1].text += line.trim() + ' ';
    }
    return acc;
  }, []);
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-purple-200 dark:border-purple-700 p-8 max-w-3xl mx-auto">
      <div className="flex items-center mb-6">
        <div className="h-16 w-16 rounded-full flex items-center justify-center mr-5 flex-shrink-0 bg-gradient-to-br from-purple-500 to-teal-500">
          <Zap className="h-8 w-8 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-1 text-purple-600 dark:text-purple-400">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
      
      <div className="mt-6">
        <AudioPlayer audioUrl={audioUrl} />
        
        <div className="mt-8">
          <button 
            onClick={() => setShowTranscript(!showTranscript)}
            className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center"
          >
            {showTranscript ? 'Hide transcript' : 'Show transcript'}
            <span className="ml-1">{showTranscript ? '↑' : '↓'}</span>
          </button>
          
          {showTranscript && (
            <div className="mt-4 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-gray-600 dark:text-gray-300 animate-fadeIn space-y-4 max-h-96 overflow-y-auto">
              {conversationParts.map((part, index) => (
                <div key={index} className="flex items-start">
                  <Phone className={`h-5 w-5 mr-3 mt-0.5 ${part.speaker === 'AI' ? 'text-purple-500' : 'text-gray-400'}`} />
                  <div>
                    <span className={`font-medium ${part.speaker === 'AI' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-200'}`}>
                      {part.speaker === 'User' ? 'Caller' : 'VocaCore Assistant'}:
                    </span>
                    <p className="mt-1">{part.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const DemoZone: React.FC = () => {
  const demoData = {
    title: "VocaCore Assistant Demo",
    description: "Listen to our AI voice assistant handling a cold call (Outbound Call)",
    audioUrl: "/src/assets/audio/demo.wav",
    transcript: `User
Hello. Who's calling?
AI
Hi there. This is Nova calling on behalf of Jacob. Do you have a minute to chat about an AI solution that helps businesses handle every customer call? Without hiring extra staff.
User
Sure. Go ahead.
AI
Great. I'll keep this super short. Jacob's built an AI voice assistant that handles sales, support, and queries like a trained human rep, available 24 7. It means you never miss a lead or support call. And it costs a fraction of hiring someone full time. It's already helping other businesses answer every call, book appointments, and even follow-up automatically without needing a big team
User
Okay. But what is what is like, what do you guys actually do? And how is it better than others?
AI
Absolutely. Let me quickly explain. Our AI powered voice assistant can handle customer calls for sales support and frequently asked questions just like a human agent. It works 24 7, so you never miss a call, even outside of business hours. What sets us apart is how seamlessly it integrates with your existing systems, like CRMs and booking software and its ability to respond instantly to routine inquiries. It's privacy compliant.
User
And what about outbound calls? Do you guys also have, like, you know, for lead generation? Do you guys call companies that has cold callers and you know, how does that work?
AI
That's a great question. Our AI solution is primarily designed for inbound calls. Handling sales, support, and customer queries. However, it can certainly be customized for outbound calls as well, including lead generation and follow ups. For lead generation, the AI can initiate calls based on a predefined list and script, making it easy to reach out to potential customers. It can also provide valuable data and insights about interaction outcomes. The goal is to enhance
User
Great. Thank you. You. I will actually get back to you as soon as I can.
AI
Totally get that. Would it be okay if I sent you a short email with more details for future reference?`
  };

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
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Listen to our VocaCore assistant in action.
          </p>
        </div>
        
        <Demo 
          title={demoData.title}
          description={demoData.description}
          audioUrl={demoData.audioUrl}
          transcript={demoData.transcript}
        />
        
        <div className="max-w-xl mx-auto mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Want to hear how our VocaCore assistant would handle your specific use case?
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