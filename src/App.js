import { Route, Routes } from "react-router-dom";

//pages
import { AllMeetupsPage } from "./pages/AllMeetup";
import { NewMeetupPage } from "./pages/NewMeetup";
import { FavoritesPage } from "./pages/Favorites";

// Components

import { MainNavigation } from "./components/layout/MainNavigation";

function App() {
  // for development the route is localhost:3000
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />

        <Route path="/new-meetup" element={<NewMeetupPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
