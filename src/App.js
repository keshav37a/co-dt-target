import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    window.opener.postMessage("target loaded", "*");
    window.addEventListener(
      "message",
      (event) => {
        console.log(`recieved data from - ${event.origin}`);
        console.log(event.data);
        if (event.origin === "https://co-dt-source.web.app") {
          console.log("EVENT RECIEVED FROM SOURCE IN TARGET");
        }
        if (event.origin === "https://co-dt-target.herokuapp.com") {
          console.log("EVENT RECIEVED FROM TARGET IN TARGET");
        }
        event.source.postMessage(
          "2nd run - sent data from target to source",
          event.origin
        );
      },
      false
    );
    if (window.name) {
      console.log(JSON.parse(window.name));
      /* console.log(window);
      console.log(window.data);
      console.log(window.clientId);
      console.log("data via window.name", window.name);
      console.log(JSON.stringify(window.name));
      console.log(JSON.parse(window.name)); */
    }

    return () => {
      window.removeEventListener("message");
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Testing Cross Origin Data Transfer - Target</p>
      </header>
    </div>
  );
}

export default App;
