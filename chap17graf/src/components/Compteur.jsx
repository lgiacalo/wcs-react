/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';

function useIncrement(initialValue = 0, step = 1) {
  const [count, setCount] = useState(initialValue);

  // function incremente() {
  const incremente = () => {
    setCount((c) => c + step);
  };

  return [count, incremente];
}

function useAutoIncrement(initiaValue = 0, step = 1) {
  const [count, setCount] = useState(initiaValue);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCount((c) => c + step);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return count;
}

function useToogle(initialValue = true) {
  const [value, setValue] = useState(initialValue);

  function toogleValue() {
    setValue((v) => !v);
  }

  return [value, toogleValue];
}

function Compteur() {
  // const [count, incremente] = useIncrement(0, 2);
  const count = useAutoIncrement(0, 2);

  console.log('count :>> ', count);
  return (
    // <button onClick={incremente}>
    <button>
      Incrementer
      {` ${count}`}
    </button>
  );
}

function Appp() {
  const [compteurVisible, toggleCompteur] = useToogle(true);

  return (
    <>
      Afficher le Compteur
      <input
        type="checkbox"
        onChange={toggleCompteur}
        checked={compteurVisible}
      />
      {compteurVisible && <Compteur compteurVisible={compteurVisible} />}
    </>
  );
}

export default Appp;
