import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 0.8 seconds loading time

    return () => clearTimeout(timer);
  }, [pathname]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return null;
};

export default ScrollToTop;

