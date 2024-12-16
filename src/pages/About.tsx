import Title from "@/components/common/Title"

export default function About() {
  return (
    <div>
      <Title />

      <section className="panel max-w-prose my-4 text-justify">
        <p className="pb-6">
          I aim to change this up as I flesh out this website. I’ve just spent ages going down unfruitful rabbit holes to wrangle some ideas. 
          The latest of which seemed to be straightforward, which was to render markdown files within my React components - that way I can easily write a wee blurb in markdown - 
          about myself, or a project - and not have to faff around formatting it with HTML or JSX. 
          I had to park that idea in favour of actually making progress on the rest of this site!
        </p>

        <h2>About Me</h2>
        <p>
          Well, I don’t really want to repeat myself, so you could just go to my{" "}
          <a href="https://www.linkedin.com/in/zak-hynd" target="_blank" rel="noopener noreferrer">
            LinkedIn page
          </a>{" "}
          and see my detailed job history there, along with a little bio, and volunteer experience. There’s also the{" "}
          <a href="https://github.com/zak-hynd" target="_blank" rel="noopener noreferrer">
            GitHub profile
          </a>{" "}
          that has a wee blurb too.
        </p>

        <p>
          I don’t really want to add my resume/CV here, because, well, I normally tailor it to the role I’m applying to. And, I don’t really want to have to manually keep it up-to-date in another place. 
          But, in order to meet the requirements of this dev academy portfolio task, I’ll share a link to this thing here:{" "}
          <a href="https://drive.google.com/file/d/1iOLc54GpXZwv0rVwhwTjBjUSEhVY-6a7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            CV Z.Hynd 12.2024 Product Owner
          </a>.
        </p>
      </section>
    </div>
    )
}
