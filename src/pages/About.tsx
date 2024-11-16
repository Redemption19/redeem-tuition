'use client'
import { motion } from 'framer-motion';
import { Award, Code, Brain, Target, Users, Rocket } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Students Taught', value: '500+' },
    { label: 'Success Rate', value: '95%' },
    { label: 'Years Experience', value: '8+' },
    { label: 'Projects Completed', value: '200+' },
  ];

  const values = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'Personalized Learning',
      description: 'We adapt our teaching methods to match your learning style and pace.',
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Goal-Oriented',
      description: 'Focus on achieving your specific career and learning objectives.',
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Practical Experience',
      description: 'Learn through hands-on coding and real-world project development.',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About RedeemTuition</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering the next generation of developers through personalized education
              and hands-on experience in modern technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At RedeemTuition, we believe that everyone deserves access to high-quality
                programming education. Our mission is to bridge the gap between theoretical
                knowledge and practical application, helping students become confident
                developers ready for real-world challenges.
              </p>
              <p className="text-gray-600">
                Through personalized mentorship and hands-on projects, we guide our
                students from beginners to professional developers, focusing on modern
                technologies like Flutter and React that are in high demand in today's
                job market.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Team meeting"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-4 rounded-lg shadow-lg">
                <Award className="h-12 w-12 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide our teaching methodology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-6 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Your Mentor</h2>
            <p className="text-xl text-gray-600">
              Expert guidance from industry professionals
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <img
                src="src/assets/images/redeem-pic.JPG"
                alt="Lead Instructor"
                className="w-48 h-48 rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2">Bismark Abban</h3>
                <p className="text-blue-600 mb-4">Lead Technical Instructor</p>
                <p className="text-gray-600 mb-4">
                  With over 2 years of experience in mobile and web development,
                  Bismark has worked on several projects and helped 20+
                  of students launch their development careers.
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span>30+ Students</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Rocket className="h-5 w-5 mr-2" />
                    <span>200+ Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;