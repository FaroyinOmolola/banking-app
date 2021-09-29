import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./screens/SignIn";
import HomeScreen from "./screens/HomeScreen";
import Register from "./screens/RegisterScreen";
import UserProfile from "./screens/UserProfile";

import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/userProfile" component={UserProfile} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
