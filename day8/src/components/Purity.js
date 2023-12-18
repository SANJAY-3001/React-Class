import React, { useEffect } from "react";
let count = 1; 
function Purity({ theme }) {
  useEffect(() => {
    count++;
    console.log(count);
  }, []);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Purity;