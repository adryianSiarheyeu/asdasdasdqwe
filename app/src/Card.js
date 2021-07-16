import React from 'react';

const Card = ({data, handleRemove}) => {

  return (
    <div>
      <div style={{border: '1px solid red', marginBottom: 15}}>
        <p>{data.name}</p>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default React.memo(Card);
