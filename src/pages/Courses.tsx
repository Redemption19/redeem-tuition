'use client'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, Globe, Code, Timer, Users, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'Flutter App Development',
      icon: <Smartphone className="h-8 w-8" />,
      description: 'Master cross-platform mobile app development with Flutter and Dart',
      duration: '12 weeks',
      level: 'Beginner to Advanced',
      features: [
        'UI/UX Design Principles',
        'State Management',
        'API Integration',
        'Firebase Backend',
        'App Store Deployment',
        'Real-world Projects',
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Web Development',
      icon: <Globe className="h-8 w-8" />,
      description: 'Learn modern web development with HTML, CSS, and JavaScript',
      duration: '10 weeks',
      level: 'Beginner to Intermediate',
      features: [
        'Responsive Design',
        'CSS Frameworks',
        'JavaScript Fundamentals',
        'DOM Manipulation',
        'Web APIs',
        'Portfolio Projects',
      ],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'React Development',
      icon: <Code className="h-8 w-8" />,
      description: 'Build modern web applications with React and its ecosystem',
      duration: '8 weeks',
      level: 'Intermediate',
      features: [
        'Component Architecture',
        'Hooks & State Management',
        'React Router',
        'API Integration',
        'Testing',
        'Production Deployment',
      ],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive courses designed to take you from beginner to professional developer
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
                      <div className="text-white p-8">
                        <div className="bg-white/10 p-3 rounded-full inline-block mb-4">
                          {course.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                        <p className="text-lg opacity-90">{course.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Timer className="h-5 w-5 mr-2" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-5 w-5 mr-2" />
                        <span>{course.level}</span>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-4">What you'll learn:</h4>
                    <ul className="space-y-3 mb-8">
                      {course.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/enroll"
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <BookOpen className="h-5 w-5 mr-2" />
                      Enroll Now
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;