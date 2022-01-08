import React, { useState } from "react";

import ReactSwitch from "react-switch";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";

function App() {
  const [checked, setChecked] = useState(true);
  const [theme, setTheme] = useState("dark");

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    if (!checked) {
      setTheme("dark");
    } else if (checked) {
      setTheme("light");
    }
  };
  return (
    <div className="app" data-theme={theme}>
      <div className="app_nav">
        <Navbar
          switches={
            <ReactSwitch
              onChange={handleChange}
              checked={checked}
              height={25}
              width={50}
              handleDiameter={30}
              onColor="#FDB813"
              offColor="#1d1f2f"
              offHandleColor="#FDB813"
              onHandleColor="#1d1f2f"
              uncheckedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <IoMdSunny />
                </div>
              }
              checkedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "white",
                  }}
                >
                  <IoMdMoon />
                </div>
              }
              checkedIcon={false}
              uncheckedIcon={false}
            />
          }
        />
      </div>
      <div className="app_body">
        <Body />
      </div>
    </div>
  );
}

export default App;
