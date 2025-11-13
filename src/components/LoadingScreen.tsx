import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Title Container with 2026 Background */}
        <div className="relative mb-8 sm:mb-12">
          {/* Background 2026 - Only behind title */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <span className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black opacity-10 text-white select-none pointer-events-none" style={{textShadow: '0 0 30px rgba(255,255,255,0.2), 0 0 60px rgba(255,255,255,0.15)'}}>
              2026
            </span>
          </div>

          {/* Title with Gradient Animation */}
          <h1 className="relative z-10 font-black uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl whitespace-nowrap animate-gradient-shift-text" style={{lineHeight: '1.3', textShadow: '0 2px 8px rgba(0,0,0,0.3)'}}>
            Alternative Energy Summit & Award
          </h1>
        </div>

        {/* Loading Bar Container */}
        <div className="relative z-10 w-full max-w-md">
          {/* Loading Bar Background */}
          <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            {/* Loading Bar Fill */}
            <div 
              className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
          
          {/* Progress Percentage */}
          <div className="mt-4 text-white/80 text-sm font-semibold">
            {progress}%
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex gap-2 mt-8">
          <div className="w-2 h-2 bg-sky-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-sky-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-sky-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

    </div>
  );
};

export default LoadingScreen;

