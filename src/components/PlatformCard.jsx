import { motion } from 'framer-motion';

const PlatformCard = ({ link, index }) => {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 flex items-center justify-center bg-black/30 rounded-xl">
          {link.icon}
        </div>
        <span className="text-lg font-medium">{link.name}</span>
      </div>
      <div className="px-4 py-2 text-sm font-semibold text-black bg-white rounded-full">
        Open
      </div>
    </motion.a>
  );
};

export default PlatformCard;
