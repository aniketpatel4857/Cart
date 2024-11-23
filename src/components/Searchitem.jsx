import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";  
import Products from "./Products";

const Searchitem = () => {
  const { term } = useParams();
  const [filterdata, setfilterdata] = useState([]);

  useEffect(() => {
    const filtereddata = items.filter((p) => 
      p.title.toLowerCase().includes(term.toLowerCase())
    );
    
    setfilterdata(filtereddata);   

  }, [term]);

  return (
    <Products  items={filterdata}/>
  );
};

export default Searchitem;
