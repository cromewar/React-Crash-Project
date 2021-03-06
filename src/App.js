import { Route, Routes } from "react-router-dom";

//pages
import { AllMeetupsPage } from "./pages/AllMeetup";
import { NewMeetupPage } from "./pages/NewMeetup";
import { FavoritesPage } from "./pages/Favorites";

// Components

import { Layout } from "./components/layout/Layout";

function App() {
  // for development the route is localhost:3000
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />

        <Route path="/new-meetup" element={<NewMeetupPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
