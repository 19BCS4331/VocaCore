import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Custom CSS for Swiper
import './TestimonialsSwiper.css';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  rating: number;
  avatar: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "VocaCore has completely transformed how we handle customer inquiries. We've increased our response rate by 95% and our customers love the natural conversation flow.",
    author: "Sarah Johnson",
    role: "Small Business Owner",
    rating: 4.5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    content: "I was skeptical about AI voice assistants, but VocaCore changed my mind. The voice is incredibly natural, and it handles complex inquiries with ease.",
    author: "Michael Chen",
    role: "Operations Director",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    content: "The outbound calling feature has revolutionized our lead generation process. We've seen a 40% increase in qualified leads since implementing VocaCore.",
    author: "Jessica Rodriguez",
    role: "Sales Manager",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    content: "As someone running a one-person business, VocaCore has been a game-changer. I never miss important calls anymore, and the AI handles scheduling perfectly.",
    author: "David Wilson",
    role: "Independent Consultant",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    content: "The integration with our CRM was seamless, and the data we get from call analytics has helped us improve our service offerings. VocaCore pays for itself many times over.",
    author: "Priya Patel",
    role: "Customer Success Lead",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/90.jpg"
  },
  {
    content: "We implemented VocaCore across our multiple locations, and the consistency in customer service has been remarkable. Our clients receive the same high-quality experience.",
    author: "Robert Thompson",
    role: "Regional Manager",
    rating: 4.5,
    avatar: "https://randomuser.me/api/portraits/men/29.jpg"
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="inline-flex items-center bg-purple-50 dark:bg-purple-900/30 rounded-full px-4 py-2 mb-2">
            <span className="flex h-2 w-2 rounded-full bg-purple-600 mr-2"></span>
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">TESTIMONIAL</span>
          </span>
          <h2 className="text-4xl text-center font-bold text-gray-900 dark:text-white">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">Happy Users Say!</span>
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 32,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white dark:bg-gray-800 border border-solid border-gray-300 dark:border-gray-700 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 dark:hover:border-indigo-500 hover:shadow-sm slide_active:border-indigo-600">
                <div>
                  <div className="flex items-center mb-7 gap-2 text-amber-500">
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                    </svg>
                    <span className="text-base font-semibold text-indigo-600 dark:text-indigo-400">{testimonial.rating}</span>
                  </div>
                  <p className="text-base text-gray-600 dark:text-gray-300 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800 dark:group-hover:text-gray-200 slide_active:text-gray-800">
                    {testimonial.content}
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 dark:border-gray-700 pt-5">
                  <img className="rounded-full h-10 w-10 object-cover" src={testimonial.avatar} alt={`${testimonial.author} avatar`} />
                  <div className="block">
                    <h5 className="text-gray-900 dark:text-white font-medium transition-all duration-500 mb-1">{testimonial.author}</h5>
                    <span className="text-sm leading-4 text-gray-500 dark:text-gray-400">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
