import React from 'react';
import Card from "./Card";

const TW = ({items, handleRemove}) => {
  return (
    <div style={{border: '2px solid #000', padding: 20}}>
      {items.map((item, index) => {
        return (
         <Card data={item} key={item.name} handleRemove={() => handleRemove(index)}/>
         //  <div key={item.name}>
         //    <div style={{border: '1px solid red', marginBottom: 15}}>
         //      <p>{item.name}</p>
         //      <button onClick={() => handleRemove(index)}>Remove</button>
         //    </div>
         //  </div>
        )
      })}
    </div>
  );
};

export default TW;
