import React, { useEffect } from "react";

function Data() {

  useEffect(() => {
    fetch("/data")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(jsonResponse => console.log(jsonResponse));
  });

  return (<div></div>);
}

export default Data;
