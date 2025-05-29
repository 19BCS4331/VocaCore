import React from 'react';
import { Phone, ArrowRight, Play } from 'lucide-react';
import Button from './shared/Button';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      {/* Enhanced gradient elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-teal-500/30 rounded-full blur-3xl opacity-50 dark:from-purple-500/20 dark:to-teal-500/20 animate-pulse"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-teal-500/20 rounded-full blur-3xl opacity-30 dark:from-purple-500/10 dark:to-teal-500/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-12 animate-fadeIn">
            <div className="inline-flex items-center bg-purple-50 dark:bg-purple-900/30 rounded-full px-4 py-2 mb-6 animate-slideIn">
              <span className="flex h-2 w-2 rounded-full bg-purple-600 mr-2"></span>
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">AI-Powered Calling</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
              Never Miss a Call <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">Again</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Our AI calling assistant handles your inbound and outbound calls 24/7, delivering exceptional customer service while saving you time and money.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button href="#book-demo" size="lg">
                Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="#demo" variant="outline" size="lg">
                Hear a Sample <Play className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <span className="flex h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                <span>Always Online</span>
              </div>
              <div className="flex items-center">
                <span className="flex h-3 w-3 rounded-full bg-purple-500 mr-2"></span>
                <span>Human-like Voice</span>
              </div>
              <div className="flex items-center">
                <span className="flex h-3 w-3 rounded-full bg-teal-500 mr-2"></span>
                <span>Instant Setup</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 animate-scaleIn">
            <div className="relative mx-auto md:ml-auto md:mr-0 max-w-md">
              <div className="bg-gradient-to-br from-purple-600 to-teal-500 rounded-2xl shadow-2xl p-1">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">VocaCore</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Active and ready</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      "24/7 AI assistant handles all calls",
                      "Captures leads while you focus on growth",
                      "Saves 80% compared to human answering services"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start animate-slideIn" style={{ animationDelay: `${index * 150}ms` }}>
                        <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                          <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                        </div>
                        <p className="ml-3 text-sm text-gray-600 dark:text-gray-300">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-gray-500 dark:text-gray-400">Active Calls</div>
                      <div className="font-medium text-purple-600 dark:text-purple-400">1,234</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 h-24 w-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur-xl opacity-30 dark:opacity-20 z-[-1] animate-pulse"></div>
              <div className="absolute -top-4 -right-4 h-24 w-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full blur-xl opacity-30 dark:opacity-20 z-[-1] animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;