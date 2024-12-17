import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import {motion} from 'framer-motion';
import { AppContext } from '../context/AppContext';

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const {generateImage} = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input){
      const image = await generateImage(input);
      if(image){
        setImage(image);
        setIsImageLoaded(true);
        setLoading(false);
        
      }

    }




    // Simulated backend call (replace with actual logic)
    setTimeout(() => {
      setImage(assets.sample_img_2); // Replace with the generated image from your backend
      setIsImageLoaded(true);
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">AI Image Generator</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Generate creative visuals by describing your ideas. Upload your imagination and let AI bring it to life!
      </p>


      <motion.form 
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler} className="flex flex-col items-center w-full max-w-lg">
        <div className="relative flex flex-col items-center">
          <div className="relative">
            <img
              src={image}
              alt="Generated Result"
              className="max-w-sm rounded shadow-lg"
            />
            {loading && (
              <span
                className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-[10s] ${
                  loading ? 'w-full' : 'w-0'
                }`}
              />
            )}
          </div>
          {loading && <p className="mt-2 text-blue-500 font-medium">Loading...</p>}
        </div>

        {!isImageLoaded && (
          <div className="flex w-full bg-neutral-500 text-white text-sm p-1 mt-10 rounded-full shadow">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Describe what you want to generate"
              className="flex-1 bg-transparent outline-none px-4 placeholder-gray-300 text-white"
            />
            <button
              type="submit"
              className="bg-zinc-900 px-8 py-3 rounded-full hover:bg-zinc-800 transition"
            >
              Generate
            </button>
          </div>
        )}

        {isImageLoaded && (
          <div className="flex gap-4 flex-wrap mt-10 justify-center text-white">
            <button
              onClick={() => setIsImageLoaded(false)}
              className="bg-transparent border border-zinc-900 text-zinc-900 px-6 py-2 rounded-full hover:bg-zinc-900 hover:text-white transition cursor-pointer"
            >
              Generate Another
            </button>
            <a
              href={image}
              download
              className="bg-zinc-900 px-6 py-2 rounded-full hover:bg-zinc-800 transition cursor-pointer"
            >
              Download
            </a>
          </div>
        )}
      </motion.form>
    </div>
  );
};

export default Result;
