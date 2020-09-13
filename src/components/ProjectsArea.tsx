import React from "react";
import styled from "styled-components";
import ProjectTile from "./ProjectTile";
import SectionTitle from "./SectionTitle";

export function ProjectsArea() {
  return (
    <Container>
      <SectionTitle id="projects-area">Projects</SectionTitle>
      <ProjectTile
        title="Twatter"
        description="A Twitter clone. As a personal challenge I've tried to make a Twitter
          clone that looks just like the real Twitter. I used React/Redux (using
          typescript) for the front end, and GraphQL for the back end. It's
          still a work in progress, but please check it out! If you want to skip
          registration, log in with username/password: testuser/testuser"
        skills={["HTML5", "CSS3"]}
        projectImgURL="https://res.cloudinary.com/twatter/image/upload/v1599958179/portfolio/twatter2_nzydug.png"
        url="https://twatter-dev.xyz/"
        sourceURL="https://github.com/ekerik220/twitter-clone-frontend"
      />
      <ProjectTile
        title="ACNH Tracker"
        description="Animal Crossing New Horizons catalogue tracking application. Made with React, Redux, Express, MongoDB, and Node.js. You can login and save items that you own or want, view lists and statistics about your catalogue, and compare your catalogue with other users to see what you can offer each other at a catalogue party! If you want to skip registration, log in with email: acnh.tester@gmail.com, password: tester"
        skills={["HTML5", "CSS3"]}
        projectImgURL="https://res.cloudinary.com/twatter/image/upload/v1599959100/portfolio/acnh-tracker_q7mk7c.png"
        url="https://www.acnh-tracker.net/"
        sourceURL="https://github.com/ekerik220/acnh-tracker-front"
      />
      <ProjectTile
        title="Recipe Finder"
        description="A personal project I made to get my hands wet with React Router, React Bootstrap, and get a bit more familiar with APIs. Simply use the search bar to search for recipes and select the one you're interested in. The application will display an ingredient list, nutrition info, and a link to the preparation instructions for the recipe."
        skills={["HTML5", "CSS3"]}
        projectImgURL="https://res.cloudinary.com/twatter/image/upload/v1599959365/portfolio/recipefinder_vvs4xk.png"
        url="https://ekerik220.github.io/recipe-search/"
        sourceURL="https://github.com/ekerik220/recipe-search"
      />
      <ProjectTile
        title="First Trend"
        description="A personal project I made to learn React Hooks and Redux. It's a section of a mock shopping website. You can filter clothing by type, color, size, and price, and add them to the cart."
        skills={["HTML5", "CSS3"]}
        projectImgURL="https://res.cloudinary.com/twatter/image/upload/v1599959575/portfolio/firsttrend_ehhkjj.png"
        url="https://ekerik220.github.io/First-Trend-Clothing/"
        sourceURL="https://github.com/ekerik220/First-Trend-Clothing"
      />
      <ProjectTile
        title="Weather"
        description="A personal project I made to learn how to use an API and location services in Javascript. The application displays the current and weekly weather conditions for the user's current location. Weather data is from Dark Sky API (https://darksky.net/dev). Locationiq API is used for reverse geocoding the user's city name (https://locationiq.com/)."
        skills={["HTML5", "CSS3"]}
        projectImgURL="https://res.cloudinary.com/twatter/image/upload/v1599959705/portfolio/weather_vhk4ph.png"
        url="https://ekerik220.github.io/weather/"
        sourceURL="https://github.com/ekerik220/weather"
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
