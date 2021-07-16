import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    window.addEventListener(
      "message",
      (event) => {
        console.log("EVENT RECIEVED IN TARGET");
        console.log(event);
        if (event.origin !== "https://co-dt-source.web.app") {
          alert("Intercepted a message from unknown source");
          return;
        }
        console.log(
          `message recieved - ClientId: ${event.data.ClientId}, ClientSecret:${event.data.ClientSecret}, User-profile-id: ${event.data["User-profile-id"]}`
        );
      },
      false
    );
    if (window.name) {
      console.log("data via window.name", window.name);
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
