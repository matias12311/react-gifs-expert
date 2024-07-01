
import { React ,useEffect, useState} from "react";
import { Gifitems } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


// eslint-disable-next-line react/prop-types
export const GiftGrid = ({category}) => {
  const {gifs,isLoading}= useFetchGifs(category);
  /* console.log(gifs,isLoading); */
  return (
    <>
      <h3>{category}</h3>
      {
      /* isLoading
      ?(<h2>Cargando...</h2>):null */
      isLoading&& (<h2>Cargando...</h2>)
      }
      
     <div className="card-grid">
        { gifs.map((gifs)=>(
           <Gifitems key={gifs.id}
           {...gifs} />
        ))
        }
      </div>
      {/* SMmfpaD3FUY7oZY4IqT7JtbU0EwKYX2X */}
    </>
  );
};
