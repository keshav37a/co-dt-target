import { useEffect } from "react";
import "./App.css";

function App() {
  if (window) {
    console.log(window.parent);
  }

  useEffect(() => {
    window.opener.postMessage("loaded", "*");

    console.log(window.parent);

    window.addEventListener(
      "message",
      (event) => {
        console.log(`recieved data from - ${event.origin}`);
        console.log("EVENT RECIEVED IN TARGET");
        console.log(event.data);
        if (event.origin === "https://co-dt-source.web.app") {
          console.log("EVENT RECIEVED FROM SOURCE IN TARGET");
          return;
        }
        if (event.origin === "https://co-dt-target.herokuapp.com") {
          console.log("EVENT RECIEVED FROM TARGET IN TARGET");
          return;
        }
        event.source.postMessage(
          "hi there yourself!  the secret response " + "is: rheeeeet!",
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
