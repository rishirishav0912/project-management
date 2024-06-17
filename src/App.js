import { BrowserRouter,Route,Routes } from "react-router-dom";

import ChatRoom from "./pages/ChatRoom";
import EventRoom from "./pages/EventRoom";


const App =()=> {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<ChatRoom />} /> */}
      <Route path="/" element={<EventRoom />} />
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
