import Feedback from "../components/Feedback";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const handleClickOpen = () => {
    setIsFeedbackModalOpen(true);
  };
  const handleClose = () => {
    setIsFeedbackModalOpen(false);
  };
  return (
    <>
      <Navbar handleClickOpen={handleClickOpen} />
      <main>
        <Outlet />
      </main>
      <Feedback
        isFeedbackModalOpen={isFeedbackModalOpen}
        handleClose={handleClose}
      />
      <Player />
    </>
  );
};

export default Layout;
