import React from 'react';

import Navbar from "./components/Navbar";
import Men from "./components/Men";
import Women from "./components/Women";

const App = () => {

  function btnClicked(a) {
    console.log('Button is Clicked!!!', a);
  }

  return (
    <div>

      <Navbar
        color="black"
        title="My Website"
        links={["Home", "About", "Contact"]}
      />

      <Men />

      <Women />

      <button
        onClick={function () {
          btnClicked(10);
        }}
        className='active:scale-95 bg-emerald-600 text-white px-6 py-3 rounded font-bold m-2'
      >
        Click to Download
      </button>

    </div>
  );
}

export default App;