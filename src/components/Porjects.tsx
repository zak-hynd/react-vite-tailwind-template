import { Link } from "react-router-dom";

const Porjects = () => {
    return (
      <section className="text-justify mx-2">
        <h2>Projects</h2>
        <p>
          Ooof, this website is still more like a construction site. In trying to build my portfolio site, 
          I’ve had several ideas that sucked up *a lot* of time to implement. So, in the interest of getting *something* 
          displayed to finish the Dev Academy Aotearoa course, I’m throwing in some basic content below. 
          Ideally, I’d like to route each of these projects to separate pages, each with a micro blurb and image.
          <br/>
          Tech... I initially wanted to try using Next.js or React Native for this portfolio, just to try something different from what we were taught in the Dev Academy course, but given the basic static content, it made sense to just use React!
          So I went about converting my old JS/HTML/CSS GitHub Pages user-repo into a React app with Vite, Typescript, and Tailwind, but after installing everything I couldn't wrangle all the deployment errors, so I decided to nuke it and start again with a fresh template.
          Fork. <br/>
          That was initially successful, until I tried to rename it and make it my "user-page" in GitHub... then all my routing broke. It took hours to fix. Just getting this site deployed with basic hard-coded content has been a LOT more effort than I expected!  
          <br/>
          Well, I think I've met the requirements for the course. Let’s see how I get on from here
        </p>
        <p>...</p>
  
        <div className="panel my-2">
          <h3>Conway’s Game of Life</h3>
          <p>
            Perhaps not the most technically challenging, but definitely the most fun thing I’ve built. 
            This was one of the “extra for experts” challenges we were given in boot camp. 
            The initial challenge was to build the game using JavaScript and render it in the terminal. 
            Later, I ported the code to a React app to render it in the browser.
          </p>
          <img src="/media/conways.webp" alt="screenshot of the game of life" style={{ maxWidth: "80%", height: "auto" }} />
          <p>
            When implementing pre-canned boards (like Gosper’s gliders), I discovered a bug in the game logic. 
            I painstakingly added nearly 20 different console logs, methodically debugging to find where the 
            logic went awry. Ultimately, the issue was with my logic for creating the “next board.” I needed to 
            create a “true” copy of the “current board” because my initial implementation caused incorrect 
            neighbor counts. Debugging can be painful, but the reward of solving it was worth every moment!
          </p>
          
          <Link to="/conways">{`See the working version`}</Link>
        </div>
  
        <div className="panel my-2">
          <h3>Stellar Share</h3>
          <p>
            The final week of boot camp was dedicated to group projects. My team of six decided to build a 
            sci-fi-themed satirical trading/lending app. We were intrigued by the idea of a weighted ratings system 
            where a user’s review on an item (or another user) would be influenced by their personal rating profile. 
            Our MVP was to allow users to rate items and other users, and display the average score - which we managed to achieve in 4 working days.
            Unfortunately we didn't manage to add any fancy weighted stats, but we hacked around with some "prototype code" to test different algorithms.
          </p>
          <img src="/media/StellarShare.gif" alt="quick demo gif of stellar-share app" style={{ maxWidth: "60%", height: "auto" }} />
          <p>
            During this project, I naturally gravitated toward project management. I led the team in designing and 
            planning the idea, component structure, and database schema. I documented the product roadmap, broke 
            work into logical tasks, wrote user stories, and assigned tasks to avoid bottlenecks. 
          </p>
          <p>
            As for development, I contributed the majority of the back-end functionality for user-related features and 
            collaborated on the front-end display of users and ratings. This project was a blend of technical 
            implementation and coordination.
          </p>
          <p>Tech-wise, this is another React app, with Typescript, Vite, Tailwind styling, Express SQL db, and Auth0 for authentication.</p>
          <a href="https://stellar-share-mania-roa-24.pushed.nz/" target="_blank" rel="noopener noreferrer">
            Visit the deployed app here (available until ~June 2025)
          </a>
        </div>
  
        <div className="panel my-2">
          <h3>Kes Ke Say</h3>
          <p>
            One of the final group projects I worked on in boot camp was *Kes Ke Say*. It’s a pseudo social-media app 
            designed to help student developers practice working in a semi-structured Agile development environment. 
            The code isn’t public (Dev Academy retains ownership), but I can share my experience working on it. It is a React app, using Typescript, Vite, Express, Knex, and Tailwind.
          </p>
          <p>
            My teammate and I built the full-stack functionality for displaying and editing users. 
            One of the things I’m most proud of is achieving 100% test coverage. We wrote unit tests for database 
            queries and API endpoints, as well as component tests for the front-end. It was a fantastic learning 
            experience in both teamwork and testing practices.
          </p>
          <img src="/media/KesKeSayTests.webp" alt="Kes Ke Say test coverage, highlighting 100% coverage of user/profile code" style={{ maxWidth: "60%", height: "auto" }} />
        </div>

        <div className="panel my-2">
          <h3>Other projects</h3>
          <p>
            The "personal project" I started months ago hasn't had much love in a while.
            It was started when I was still working with simple JavaScript and HTML pages, but once we started learning TypeScript and React, I found that a lot of my previous work was obsolete!
            My intention is to be able to upload, parse, and analyse electricity usage data (csv files), initially just from Electric Kiwi, and compare the usage costs accross a range of Electricity pricing plans.
            Now that I have a better understanding of how to structure and write code, and have a bit more time on my hands, I ought to be able to make more progress on this.
          </p>
          <p></p>
          <p>
            Comprehensive weather alerts.<br/> A good friend of mine, Shub, and I plan to build an old idea of mine.
            One of the problems that we're intending to solve is that when you want to do an outdoor activity, you often have to consult multiple sources in order to figure out if it's going to be suitable. Surfing, Paragliding, Kitesurfing, Rock climbing, Mountain Biking, Skiing, Garden watering, Stargazing, Aurora Watching...
            Perhaps we can monetise it... Perhaps we <i>have to</i> monetise it to cover the costs of all the API calls! Things to discover...
          </p>
        </div>
      </section>
    );
  };
  
  export default Porjects
  