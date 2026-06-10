import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSpotify, FaYoutube, FaApple, FaInstagram } from 'react-icons/fa';
import PlatformCard from '../components/PlatformCard';
import Gallery from '../components/Gallery';
import About from '../components/About';

const Links = () => {
  const links = [
    {
      name: 'Spotify',
      icon: <FaSpotify className="text-[#1DB954] text-3xl" />,
      url: 'https://open.spotify.com/artist/1YC2R7TvIPVfrVJAi9lwRk?si=bqE8t4oDTzyrkka9eMEs5w',
    },
    {
      name: 'YouTube',
      icon: <FaYoutube className="text-[#FF0000] text-3xl" />,
      url: 'https://youtube.com/@teegoat_?si=a9qTmPrEjlymxxl-',
    },
    {
      name: 'Apple Music',
      icon: <FaApple className="text-white text-3xl" />,
      url: 'https://music.apple.com/us/artist/teegoat/1562030295',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="text-[#E1306C] text-3xl" />,
      url: 'https://www.instagram.com/teegoat_?igsh=MWNwYnh0MXZxeDI4MQ==',
    },
  ];

  const [scrollY, setScrollY] = useState(0);
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      if (currentScrollY > 100 && !hasScrolledPast) {
        setHasScrolledPast(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to handle initial load case
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledPast]);

  const indicatorOpacity = Math.max(0, 1 - scrollY / 50);

  return (
    <div className="min-h-screen w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center relative overflow-hidden">
      {/* Cinematic Blurred Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="/image2.jpeg" 
          alt="" 
          className="w-full h-full object-cover blur-3xl scale-110 opacity-60" 
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="w-full max-w-xl mx-auto space-y-12 relative z-10">
        {/* Profile Section */}
        <motion.div 
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-800 shadow-2xl">
            {/* Profile Image */}
            <img 
              src="/image2.jpeg" // Assuming image 2 is named image2.png in the public folder
              alt="TeeGoat" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">TeeGoat</h1>
            <p className="text-gray-400 mt-2 font-light">Choose your platform</p>
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div 
          className="space-y-4 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {links.map((link, index) => (
            <PlatformCard 
              key={link.name}
              link={link}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Gallery Section */}
      <div className="w-full mt-24 border-t border-white/10 pt-4 relative z-10">
        <Gallery />
      </div>

      {/* Premium Scroll Indicator */}
      {!hasScrolledPast && (
        <>
          <div 
            className="fixed bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10"
            style={{ opacity: indicatorOpacity }}
          ></div>
          <motion.div 
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center pointer-events-none z-20"
            style={{ opacity: indicatorOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="text-white/70 text-xl mb-4 font-light"
            >
              ↓
            </motion.div>
            <motion.div
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="text-white/80 text-[10px] tracking-[0.4em] uppercase font-light"
            >
              Explore TeeGoat
            </motion.div>
          </motion.div>
        </>
      )}

      {/* About Section */}
      <About />
    </div>
  );
};

export default Links;
