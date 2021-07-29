import { useEffect } from "react";
import cogoToast from "cogo-toast";
import "./App.css";

function App() {
  useEffect(() => {
    if (window?.opener) {
      window.opener.postMessage("target loaded", "*");
      window.addEventListener(
        "message",
        (event) => {
          if (event.origin === "https://co-dt-source.web.app") {
            cogoToast.success(`data recieved - ${JSON.stringify(event.data)}`);
          }
        },
        false
      );
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
