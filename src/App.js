import { useEffect } from "react";
import cogoToast from "cogo-toast";
import "./App.css";

function App() {
  console.log("testing");
  useEffect(() => {
    if (window?.opener) {
      console.log("event listener added");
      window.opener.postMessage("target loaded", "*");
      window.addEventListener(
        "message",
        (event) => {
          console.log("message recieved");
          console.log(event.data);
          console.log(event.data);
          if (event.origin === "https://co-dt-src.web.app") {
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
