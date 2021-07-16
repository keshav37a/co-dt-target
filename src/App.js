import { useEffect } from "react";
import "./App.css";

function App() {
  // useEffect(() => {
  //   window.addEventListener(
  //     "message",
  //     (event) => {
  //       if (event.origin !== "https://co-dt-source.web.app/") {
  //         alert("Intercepted a message from unknown source");
  //         return;
  //       }
  //       console.log(event);
  //     },
  //     false
  //   );

  //   /* return () => {
  //     window.removeEventListener("message");
  //   }; */
  // }, []);

  window.addEventListener(
    "message",
    (event) => {
      console.log(event.origin);
      console.log(event);
      if (event.origin !== "https://co-dt-source.web.app/") {
        alert("Intercepted a message from unknown source");
        return;
      }
      console.log(event);
    },
    false
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>Testing Cross Origin Data Transfer - Target</p>
      </header>
    </div>
  );
}

export default App;
