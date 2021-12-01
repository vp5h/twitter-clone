import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";
import { LeftPane } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <LeftPane />
        <Routes>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="/explore" element={"explore"}>Explore</Route>
          <Route path="/notifications">Notifications</Route>
          <Route path="/messages">Messages</Route>
          <Route path="/bookmarks">Bookmarks</Route>
          <Route path="/lists">Listsfdfd</Route>
          <Route path="/profile">Profile</Route>
        </Routes>
        <div className="right-pane">Right Pane</div>
      </div>
    </BrowserRouter>
  );
};

export default App;
