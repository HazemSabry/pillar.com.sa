import React, { useState } from "react";

import NavBar from "./component/UI/NavBar";
import LandingPage from "./component/LandingPage(Home)/LandingPage";
// import ProjectsPage from "./component/ProjectsPage/ProjectsPage";
// import LoginSystem from "./component/LoginSystem/LoginSystem";
// import ContactUs from "./component/ContactUs/ContactUs";
// import About from "./component/About/About";
// import Career from "./component/Career/Career";
// import UserChat from "./component/UserChat/UserChat";
import Footer from "./component/UI/Footer";

function App() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <Footer />
    </>
  );
}

export default App;
