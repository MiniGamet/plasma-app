import React from "react";
import "./ourstory.css";

const OurStory: React.FC = () => {
  return (
    <div id="ourStory" className="ourStory">
      <div className="ourStoryInfo">
        <div className="ourStoryInfo__title">
          <span className="ourStoryInfo__title__boldedTitle">Our</span> Story
        </div>
        <div className="ourStoryInfo__msg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus laboriosam distinctio quisquam officiis mollitia,
            adipisci omnis. Corporis voluptatem similique quibusdam?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            consequatur! Pariatur explicabo soluta quos magni atque similique
            quae ipsa facilis!
          </p>
        </div>
      </div>
      <div className="ourStoryImg">
        <img
          src="https://static.wixstatic.com/media/1c388a_3f0014766d774744834ba7910fa190ab~mv2.jpg/v1/fill/w_1439,h_730,al_c,q_85,usm_0.66_1.00_0.01/1c388a_3f0014766d774744834ba7910fa190ab~mv2.webp"
          alt="image"
        />
      </div>
    </div>
  );
};

export default OurStory;
