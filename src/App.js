import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    window.addEventListener(
      "message",
      (event) => {
        console.log("EVENT RECIEVED IN TARGET");
        console.log(
          `message recieved - ClientId: ${event.data.ClientId}, ClientSecret:${event.data.ClientSecret}, User-profile-id: ${event.data["User-profile-id"]}`
        );
        if (event.origin !== "https://co-dt-source.web.app") {
          alert("Intercepted a message from unknown source");
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

    window.parent.postMessage("loaded", "*");

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
