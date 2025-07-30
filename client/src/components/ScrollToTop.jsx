// Import necessary hooks from React and React Router
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component ensures the window scrolls to the top when the route changes
const ScrollToTop = () => {
    // useLocation gives access to the current URL path
  const { pathname } = useLocation();

  useEffect(() => {
    // Whenever the pathname changes, scroll to the top of the page
    window.scrollTo(0, 0);
  }, [pathname]); // Effect runs only when 'pathname' changes

  // This component doesn't render anything in the DOM
  return null;
};

// Export the component so it can be used in your app (typically inside Router)
export default ScrollToTop;
