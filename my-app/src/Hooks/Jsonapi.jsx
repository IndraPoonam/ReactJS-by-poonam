import React, { useEffect, useState } from "react";
import Jsondata from "./Jsondata";

function Jsonapi() {
  const [url, setUrl] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [url]);
  console.log("data is ", data);
  return (
    <>
      <button
        onClick={() => setUrl("https://jsonplaceholder.typicode.com/users")}
      >
        Show user
      </button>
      <button
        onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts")}
      >
        Show post{" "}
      </button>
      { data && <Jsondata data={data}/>}
    </>
  );
}
export default Jsonapi;