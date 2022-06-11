import React, {useState} from 'react';
import App from "./App";
import Options from "./Options";

function PreApp() {
    const [clicked, setClicked] = useState(false)
    return (
      <div>
          {
              !clicked ? App(clicked, setClicked) : Options(clicked, setClicked)
          }
      </div>
    );
}

export default PreApp