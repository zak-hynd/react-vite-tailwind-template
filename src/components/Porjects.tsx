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
          Let’s see how I get on!
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
            Our MVP was to allow users to create and display ratings on items and other users, along with an average score.
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
            implementation and coordination, which I enjoyed thoroughly.
          </p>
          <a href="https://stellar-share-mania-roa-24.pushed.nz/" target="_blank" rel="noopener noreferrer">
            Visit the deployed app here (available until ~June 2025)
          </a>
        </div>
  
        <div className="panel my-2">
          <h3>Kes Ke Say</h3>
          <p>
            One of the final group projects I worked on in boot camp was *Kes Ke Say*. It’s a pseudo social-media app 
            designed to help student developers practice working in a semi-structured Agile development environment. 
            The code isn’t public (Dev Academy retains ownership), but I can share my experience working on it.
          </p>
          <p>
            My teammate and I built the full-stack functionality for displaying and editing users. 
            One of the things I’m most proud of is achieving 100% test coverage. We wrote unit tests for database 
            queries and API endpoints, as well as component tests for the front-end. It was a fantastic learning 
            experience in both teamwork and testing practices.
          </p>
          <img src="/media/KesKeSayTests.webp" alt="Kes Ke Say test coverage, highlighting 100% coverage of user/profile code" style={{ maxWidth: "60%", height: "auto" }} />
        </div>
      </section>
    );
  };
  
  export default Porjects
  