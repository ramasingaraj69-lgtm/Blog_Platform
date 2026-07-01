import {

  createContext,

  useContext,

  useState,

} from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {

  const [mobileMenu, setMobileMenu] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  return (

    <BlogContext.Provider

      value={{

        mobileMenu,

        setMobileMenu,

        darkMode,

        setDarkMode,
      }}
    >
      {children}

    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);