import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGift';

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading,setLoading]= useState(true);
  useEffect(()=>{
      getGifs(category)
    .then(newImages => setGifs(newImages));
    setLoading(false);
  },[])
  return {
    gifs,
    isLoading
  }
    
  
}
