import React, { Fragment } from "react";
import Launche from "./../Launches/Launche";
import { Card, CardColumns, CardDeck,CardGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import InfiniteScroll from "react-infinite-scroll-component";
const LaunchesList = ({ launches }) => {
  
  return (
    <Fragment>
      <div > 
      <CardColumns>
        <InfiniteScroll
        dataLength={launches.length}
        hasMore={true}
        >
          {launches.map((launche) => {
            const { details, 
              id ,
              links,
              date_local,
            name,
            success} = launche;
           
            console.log(links);
            return (
               <Launche
                key={id} 
                details = {!details? '' : details}
                links = {links}
                date_local = {date_local}
                name = {name}
                success = {success}
            /> 
            );
          })}
          </InfiniteScroll>
       </CardColumns>
      </div>
    </Fragment>
  );
};

export default LaunchesList;
