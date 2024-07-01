import React, { useState } from "react";


// eslint-disable-next-line react/prop-types
export const AddCategories = ({onNewCategories}) => {
  const [inputValue, setinputValue] = useState("");
  const inputChange = ({ target }) => {
    /* console.log(target.value); */
    setinputValue(target.value);
    
  };

  const onSubmitEvent = (event)=>{
    event.preventDefault();
    if (inputValue.trim().length<=1) return;/* 
    onNewCategories(categories =>[inputValue,...categories]) */
    onNewCategories(inputValue.trim())
    setinputValue('');
  }
  return (
    <form action="" onSubmit={onSubmitEvent}>
      <input
        type="text"
        placeholder="Buscar"
        value={inputValue}
        onChange={inputChange}

      />
    </form>
  );
};
