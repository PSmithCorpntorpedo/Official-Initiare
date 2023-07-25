import React from "react";
import JournalCard from "./JournalCard";
import image from "../assets/Image.png";

const JournalSection = () => {
  return (
    <div>
      <JournalCard
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        image={image}
      />
      <JournalCard
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        image={image}
      />
    </div>
  );
};

export default JournalSection;
