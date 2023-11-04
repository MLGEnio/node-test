"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState<object>({});

  useEffect(() => {
    axios("http://localhost:5000/api")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <></>;
}

export default Home;
