import "./App.css";

import flaticonWelcomeImage from "./assets/images/flaticon-welcome-image.png";
import backArrow from "./assets/icons/back-arrow.png";
import downloadButton from "./assets/icons/download-button.png";
import rateStarButton from "./assets/icons/rate-star-button.png";
import rubbishButton from "./assets/icons/rubbish-bin-delete-button.png";
import Headeri from "./header";
import Leftmenu from "./leftmenu";
import Emailtb from "./emailtoolbar";
import Emailcontent from "./emailcontent";



function App(): JSX.Element {
  return (
    <div className="app">
     <Headeri/>
      <Leftmenu/>
      <main className="email-view">
        
        
        
        
      </main>
    </div>
  );
}

export default App;
