import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(2);

  const handleClick = (nb) => {
    if (!isNaN(count)) setCount(+count + nb);
  };

  const handleChangeInput = (e) => {
    setCount(e.target.value);
  };

  return (
    <div>
      <h1>Compteur</h1>
      <div className="input-group justify-content-center">
        <button
          onClick={() => handleClick(-1)}
          type="button"
          className="btn btn-dark"
        >
          <i className="fas fa-minus"></i>
        </button>

        <input
          className="btn btn-light"
          value={count}
          onChange={handleChangeInput}
        />

        <button
          onClick={() => handleClick(1)}
          type="button"
          className="btn btn-dark"
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
}
