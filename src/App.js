import { useEffect } from "react";
import cogoToast from "cogo-toast";
import "./App.css";

function App() {
  useEffect(() => {
    window.opener.postMessage("target loaded", "*");
    window.addEventListener(
      "message",
      (event) => {
        if (event.origin === "https://co-dt-source.web.app") {
          cogoToast.success(JSON.stringify(event.data));
          console.log("EVENT RECIEVED FROM SOURCE IN TARGET");
        }
      },
      false
    );
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
