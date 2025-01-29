import Hero from "../components/Hero";
import TopAlbum from "../components/TopAlbum";
import NewAlbums from "../components/NewAlbums";
import Songs from "../components/Songs";
import Faq from "../components/Faq";
import Feedback from "../components/Feedback";
import { useState } from "react";
const Router = () => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const handleClose = () => {
    setIsFeedbackModalOpen(false);
  };
  return (
    <>
      <Hero />
      <TopAlbum />
      <NewAlbums />
      <Songs />
      <Faq />
      <Feedback
        isFeedbackModalOpen={isFeedbackModalOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default Router;
