import Title from "@/components/common/Title"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div>
      <Title />

      <section className="panel max-w-prose my-4 text-justify">
        <p className="pb-6">
          <b>Storytime:</b><br/>
          As a final requirement for the Dev Academy Aotearoa web develelopment course, I had to build a portfolio to showcase my skills, providing a bit of a description of the projects that I've worked on.
          <br />
          Since the course started with us writing blogs to publish in our GitHub Pages user-site, I wanted to wrangle that into a React + Vite + Tailwind project - that's what we learnt, so why not lean on that for my showcase?
          <br/>
          In short, hasn't been anywhere near as easy as I thought!
          <br/>
          I’ve spent ages going down unfruitful rabbit holes to wrangle some ideas. 
          I thought it would be a fairly simple concept to write about my projects in markdown, then convert that to JSX to display in my React components...
          <br/>
          Nope.
          <br/>
          Not so straightforward. At every turn I'm getting a new problem. I've tried several different plugins, even tried them on a fresh project, but then I just encounter new problems.
          <br/>
          Sigh
          <br/>
          So I return to writing this mess in JSX/HTML for now.
          <br/>
          Maybe I should give up on React, and try Jekyl or something similar.
        </p>
        <p>
          Since you've made it this far, perhaps you want to checkout my initial writup about some of <Link to="/some-projects">{`my projects.`}</Link>
        </p>
      </section>
    </div>
    )
}
