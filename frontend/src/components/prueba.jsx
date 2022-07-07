/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from "react";

function prueba() {
  function encrypt(e) {
    e.preventDefault();

    var baseString = document.getElementById("en").value;
    const encodedString = window.btoa(baseString);
    document.getElementById("de").value = encodedString;
  }

  function decrypt(e) {
    e.preventDefault();
    var encodedString = document.getElementById("de").value;
    var decodedString = window.atob(encodedString);
    document.getElementById("de").value = decodedString;
  }

  return (
    <div>
      <form>
        <input type="text" id="en" /> <br />
        <input type="text" id="de" /> <br />
        <button onClick={(e) => encrypt(e)}>Encrypt</button>
        <br />
        <button onClick={(e) => decrypt(e)}>Decrypt</button>
        <br />
      </form>
    </div>
  );
}

export default prueba;
