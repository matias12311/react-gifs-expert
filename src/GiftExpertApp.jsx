import { React, useState } from "react";
import { AddCategories,GiftGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Color"]);

  const onAddCategories = (newCategory) => {
    
      setCategories([newCategory, ...categories]);
    
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategories
        onNewCategories={(value) => onAddCategories(value)}
      />
      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
};
