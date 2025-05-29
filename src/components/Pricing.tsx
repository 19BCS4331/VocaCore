import React, { useState } from 'react';
import { Check, X, DollarSign, Zap, Shield, Headphones, ArrowRight } from 'lucide-react';
import Button from './shared/Button';

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  isPopular?: boolean;
  icon: React.ReactNode;
  billingPeriod: 'monthly' | 'yearly';
  yearlyPrice?: string;
  ctaText?: string;
  highlight?: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ 
  name, 
  price, 
  description, 
  features, 
  notIncluded = [],
  isPopular = false,
  icon,
  billingPeriod,
  yearlyPrice,
  ctaText = "Get Started",
  highlight
}) => {
  return (
    <div className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border transition-all duration-300 group ${
      isPopular 
        ? 'border-purple-500 shadow-lg transform hover:scale-105 md:-translate-y-2' 
        : 'border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-purple-200 dark:hover:border-purple-700'
    }`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-teal-500 text-white text-xs font-bold uppercase py-1.5 px-4 rounded-bl-lg">
          Most Popular
        </div>
      )}
      
      {highlight && (
        <div className="bg-purple-50 dark:bg-purple-900/30 py-2 px-4 text-center text-sm text-purple-700 dark:text-purple-300 font-medium">
          {highlight}
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <div className="flex items-center mb-4">
          <div className={`h-12 w-12 rounded-full flex items-center justify-center mr-4 ${
            isPopular 
              ? 'bg-gradient-to-br from-purple-500 to-teal-500' 
              : 'bg-purple-100 dark:bg-purple-900/30'
          }`}>
            {React.cloneElement(icon as React.ReactElement, { 
              className: `h-6 w-6 ${isPopular ? 'text-white' : 'text-purple-600 dark:text-purple-400'}` 
            })}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
        
        <div className="mb-6 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
          <div className="flex items-end">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">{billingPeriod === 'monthly' ? price : yearlyPrice}</span>
            <span className="text-gray-500 dark:text-gray-400 ml-1 mb-1">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
          </div>
          {billingPeriod === 'yearly' && (
            <div className="text-sm text-green-600 dark:text-green-400 mt-1 font-medium">
              Save 20% with annual billing
            </div>
          )}
        </div>
        
        <div className="mb-6">
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Includes:</div>
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          
          {notIncluded.length > 0 && (
            <>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 mt-6">Not included:</div>
              <ul className="space-y-2">
                {notIncluded.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <X className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        
        <Button 
          href="#book-demo" 
          variant={isPopular ? "primary" : "outline"}
          fullWidth
          className="group-hover:shadow-md transition-all duration-300"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  
  // Yearly prices are pre-calculated with 20% discount
  
  const plans = [
    {
      name: "Starter",
      icon: <DollarSign />,
      price: "$249",
      yearlyPrice: "$2,390",
      description: "Perfect for small businesses just getting started",
      features: [
        "Up to 100 inbound minutes/month",
        "Basic call routing",
        "Business hours coverage",
        "Email notifications",
        "Basic reporting"
      ],
      notIncluded: [
        "24/7 coverage",
        "Outbound calling",
        "CRM integration"
      ],
      ctaText: "Start Free Trial",
      highlight: ""
    },
    {
      name: "Growth",
      icon: <Zap />,
      price: "$499",
      yearlyPrice: "$4,790",
      description: "Ideal for growing businesses with regular call volume",
      features: [
        "Up to 500 inbound minutes/month",
        "50 outbound minutes/month",
        "24/7 coverage",
        "CRM integration",
        "Advanced call routing",
        "SMS & email notifications",
        "Detailed analytics"
      ],
      notIncluded: [
        "Custom voice training",
        "API access"
      ],
      isPopular: true,
      ctaText: "Get Started",
      highlight: "Most businesses choose this plan"
    },
    {
      name: "Enterprise",
      icon: <Shield />,
      price: "$999",
      yearlyPrice: "$9,590",
      description: "For established businesses with high call volume",
      features: [
        "Up to 2,000 inbound minutes/month",
        "500 outbound minutes/month",
        "24/7 priority coverage",
        "Advanced CRM integration",
        "Custom voice & script training",
        "Multi-location support",
        "API access",
        "Dedicated account manager"
      ],
      ctaText: "Contact Sales",
      highlight: ""
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 dark:opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-purple-200/50 to-transparent dark:from-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-teal-200/50 to-transparent dark:from-teal-900/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fadeIn">
          <div className="inline-flex items-center bg-purple-50 dark:bg-purple-900/30 rounded-full px-4 py-2 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-purple-600 mr-2"></span>
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">Pricing Plans</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Choose the plan that fits your business needs with no hidden fees.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 text-sm font-medium ${billingPeriod === 'monthly' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={billingPeriod === 'yearly'}
                onChange={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
            </label>
            <span className={`ml-3 text-sm font-medium ${billingPeriod === 'yearly' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'}`}>
              Yearly
            </span>
            {billingPeriod === 'yearly' && (
              <span className="ml-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-medium px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
              <PricingPlan 
                name={plan.name}
                price={plan.price}
                yearlyPrice={plan.yearlyPrice}
                description={plan.description}
                features={plan.features}
                notIncluded={plan.notIncluded}
                isPopular={plan.isPopular}
                icon={plan.icon}
                billingPeriod={billingPeriod}
                ctaText={plan.ctaText}
                highlight={plan.highlight}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fadeIn bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Headphones className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Need a custom solution?</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We can tailor a plan specifically for your business needs and call volume requirements.
          </p>
          <Button href="#book-demo" variant="primary" className="inline-flex items-center">
            Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;