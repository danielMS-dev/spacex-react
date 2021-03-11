import React, { createContext, useEffect, useState } from "react";
import { launchesSearchGet } from "./../constanst/index";

export const LaunchesContext = createContext();

const LaunchesContextProvider = ({ children }) => {
  
  const [doneFetch, setDoneFetch] = useState(false);
  const [launches, setLaunches] = useState([]);

 
 
  useEffect(() => getLaunches(),[])

  const getLaunches = (launchesId = '') => {
    fetch(launchesSearchGet(launchesId))
      .then(res => res.json())
      .then(data => {
        setDoneFetch(true);  
        setLaunches(data);
        console.log(data)
      })
      .catch((err) => console.log(err));
  };
  
 //console.log(getLaunches())

  return (
    <LaunchesContext.Provider value={{ doneFetch, launches }}>
      {children}
    </LaunchesContext.Provider>
  );
};

export default LaunchesContextProvider;
