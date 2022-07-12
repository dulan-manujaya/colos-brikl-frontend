import Head from "next/head";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [colors, setColors] = useState([]);

  useEffect(async () => {
    getColors();
  }, []);

  const getColors = async () => {
    const colorCount = 5;
    const res = await fetch(`http://localhost:7000/colors/${colorCount}`);
    const resJSON = await res.json();
    setColors(resJSON);
  };

  return (
    <>
      <Head>
        <title>Color Swatches challenge</title>
      </Head>
      <div className="box">
        {colors.map((colorObj, id) => (
          <div
            key={id}
            style={{
              backgroundColor:
                colorObj.type == "rgb"
                  ? `rgb(${colorObj.red}, ${colorObj.green}, ${colorObj.blue})`
                  : `hsl(${colorObj.hue}, ${colorObj.saturation}%, ${colorObj.lightness}%)`,
            }}
          ></div>
        ))}
      </div>
      <div className="buttonBox">
        <button className="button" onClick={getColors}>
          Generate Colors
        </button>
      </div>
    </>
  );
}
