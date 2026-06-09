import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGlobe, FaMusic, FaBullseye } from 'react-icons/fa';

const About = () => {
  const stats = [
    {
      icon: <FaMapMarkerAlt className="text-red-500 text-xl" />,
      label: "Origin",
      value: "India"
    },
    {
      icon: <FaGlobe className="text-blue-400 text-xl" />,
      label: "Raised In",
      value: "Middle East"
    },
    {
      icon: <FaMusic className="text-purple-400 text-xl" />,
      label: "Music Career Started",
      value: "Canada"
    },
    {
      icon: <FaBullseye className="text-green-400 text-xl" />,
      label: "Current Focus",
      value: "India"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4 border-t border-white/10 mt-16 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column - Image */}
        <motion.div 
          className="lg:col-span-5 flex justify-center w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-full max-w-md lg:max-w-none aspect-[3/4] rounded-[20px] overflow-hidden group shadow-2xl shadow-black/85 border border-white/10">
            <motion.img 
              src="/artist.jpeg" 
              alt="TeeGoat portrait" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* Subtle Gradient Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Right Column - Text & Stats */}
        <motion.div 
          className="lg:col-span-7 flex flex-col justify-center text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section Header */}
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider text-white uppercase">
              About TeeGoat
            </h2>
            <p className="text-gray-400 font-light text-lg tracking-wide mt-2">
              The Story Behind The Sound
            </p>
          </div>

          {/* Bio Text */}
          <p className="text-gray-300 text-lg leading-relaxed font-light mb-8">
            Born in India and raised in the Middle East, TeeGoat started his music career in Canada with the help and recognition of SeanStylz, Gary Guitz, and Enveeproductionz. Drawing inspiration from both American and UK artists, he developed his own unique style and flow. Today, TeeGoat is focused on expanding his reach back in India through Pune Recording Studio, bringing together global influences and authentic artistry to create a sound that connects with audiences worldwide.
          </p>

          {/* Stats Cards Section */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ 
                  y: -4, 
                  backgroundColor: "rgba(255, 255, 255, 0.08)", 
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3)"
                }}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 shadow-md"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-black/40 rounded-xl border border-white/5 shadow-inner">
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{stat.label}</span>
                  <span className="text-base font-medium text-white mt-0.5">{stat.value}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
