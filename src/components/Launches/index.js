import React, { Fragment, useEffect, useContext } from "react";
import { LaunchesContext } from "./../..//contexts/LaunchesContext";
import LaunchesList from "./../Launches/LaunchesList";
import ProgressBar from "./../Common/progressBar";
import Message from "./../Common/Messege";

const Launches = () => {
  /*     const { doneFetch } = useContext(LaunchesContext)
    console.log(doneFetch)
    return(
        <p>HOLA</p>
    )
} */

  const { doneFetch, launches } = useContext(LaunchesContext);
  console.log(`${doneFetch}  YYYY  ${launches.length}`);
  return (
    <Fragment>
      {doneFetch ? (
        launches.length > 0 ? (
          <LaunchesList launches={launches} />
        ) : (
          <Message text={"esto no hace nada"} />
        )
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
};

export default Launches;
