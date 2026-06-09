import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image Layer */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img 
          src="/image1.jpeg" 
          alt="TeeGoat" 
          className="absolute inset-0 w-full h-full object-cover object-[center_top] md:object-[center_20%]" 
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>
      </motion.div>

      {/* Logo in top-left corner */}
      <motion.div 
        className="absolute top-6 left-6 md:top-8 md:left-8 z-20 w-16 h-16 md:w-20 md:h-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img 
          src="/logo.png" 
          alt="TeeGoat Logo" 
          className="w-full h-full object-contain mix-blend-screen" 
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          TeeGoat
        </motion.h1>
        
        <motion.p 
          className="text-gray-300 text-lg md:text-xl mb-12 tracking-wide font-light"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          The New Wave of Sound
        </motion.p>

        <motion.button
          onClick={() => navigate('/links')}
          className="px-8 py-4 bg-white text-black font-semibold rounded-full text-lg uppercase tracking-widest hover:bg-gray-200 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
        >
          Listen Now
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
