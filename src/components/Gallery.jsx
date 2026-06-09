import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';

const galleryItems = [
  {
    id: 1,
    title: "TeeGoat - Mask On",
    videoUrl: "/video.mp4", // Add your downloaded video to the public folder and name it video.mp4
    youtubeLink: "https://youtu.be/NTmxuwsYry4?si=h9wisXzprJEflLHr",
    type: "inline-mp4"
  },
  {
    id: 2,
    title: "TeeGoat Gallery",
    imageUrl: "/image3.jpeg", // Make sure you have image3.jpeg in the public folder
    type: "image"
  },
  {
    id: 3,
    title: "Success - TeeGoat",
    videoUrl: "/video2.mp4",
    youtubeLink: "https://youtu.be/O61tkzRSd9Q?si=QFDJogqqsOWAKKwg",
    type: "inline-mp4"
  }
];

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedVideo(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <motion.h2 
          className="text-4xl font-bold mb-3 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Gallery
        </motion.h2>
        <motion.p 
          className="text-gray-400 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Watch TeeGoat's latest visuals
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          },
          hidden: {}
        }}
      >
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg flex flex-col"
          >
            {item.type === 'inline-mp4' ? (
              <>
                <div className="aspect-video w-full bg-black relative shrink-0">
                  <video 
                    src={item.videoUrl} 
                    controls 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col space-y-1 grow">
                  <h3 className="text-lg font-medium text-gray-100 line-clamp-1">{item.title}</h3>
                  {item.youtubeLink && (
                    <a 
                      href={item.youtubeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#FF0000] text-sm font-semibold hover:underline self-start mt-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Watch full video on YouTube
                    </a>
                  )}
                </div>
              </>
            ) : item.type === 'image' ? (
              <div className="w-full h-full min-h-[250px] relative overflow-hidden bg-black flex-grow">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            ) : null}
          </motion.div>
        ))}
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[60]"
              onClick={(e) => { e.stopPropagation(); setSelectedVideo(null); }}
            >
              <FaTimes className="text-4xl drop-shadow-lg" />
            </button>
            
            <motion.div 
              className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicks in video from closing modal
            >
              {selectedVideo.type === 'youtube' ? (
                <iframe
                  src={`${selectedVideo.videoUrl}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              ) : (
                <video 
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
