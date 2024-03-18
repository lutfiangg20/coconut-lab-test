import { useState } from "react";
import "./App.css";
import { Theme, ThemeContext } from "./context/theme";

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <body className={theme === "light" ? "lightMode" : "darkMode"}>
          <div className={` container`}>
            <div
              className="main"
              style={{ color: theme === "light" ? "black" : "white" }}
            >
              <div className="grid-item1">
                <div>
                  <b>2m+</b>
                  <br />
                  nisi ut aliquid
                </div>
                <hr />
                <div>
                  <b>100m+</b>
                  <br />
                  autem quibusdam
                </div>
              </div>
              <div className="grid-item2">
                <div style={{ margin: "auto" }}>
                  <p
                    className="subText"
                    style={{
                      margin: "0px",
                      color: theme === "light" ? "black" : "white",
                    }}
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam
                  </p>
                </div>
                <h1>
                  Consectetur,
                  <span style={{ color: "#ff0000" }}> adipisci </span>
                  velit, sed
                  <span style={{ color: "#ff0000" }}> quia non </span>
                </h1>
              </div>
              <div className="grid-item3">
                <div>
                  <b>1k+</b>
                  <br />
                  rerum facilis
                </div>
                <hr />
                <div>
                  <b>120k</b>
                  <br />
                  libero tempore
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="toggleButton"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                TOGGLE DARK MODE
              </button>
            </div>
          </div>
        </body>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
