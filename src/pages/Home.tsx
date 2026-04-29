import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const navigate = useNavigate();

  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "loading"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xaqageno", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <div id="top"></div>
      <Navbar />
      {/* HERO */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* 🎥 VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* 🌑 GRADIENT OVERLAY (more premium than flat black) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <FadeIn>
            <div className="text-center max-w-2xl">
              <h1 className="heading gradient-text leading-[1.2] pb-2">
                <Typewriter
                  words={[
                    "Software Engineer",
                    "Full Stack Developer",
                    "AI Engineer",
                    "Cloud Developer",
                    "Problem Solver",
                    "All Around Cool Guy",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={125}
                  deleteSpeed={100}
                  delaySpeed={1500}
                />
              </h1>

              <p className="subtext mt-4">
                Building intelligent systems, full-stack applications, and
                real-world solutions.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {/* VIEW WORK */}
                <a
                  href="#projects"
                  className="px-6 py-3 border border-white rounded-lg font-medium hover:bg-white hover:text-black transition shadow-lg"
                >
                  View Work
                </a>

                {/* VIEW RESUME */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white rounded-lg font-medium hover:bg-white hover:text-black transition shadow-lg"
                >
                  View Resume
                </a>
              </div>
              <div className="mt-8 flex justify-center gap-10">
                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/averydumasiv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white hover:scale-110 transition"
                >
                  {/* LinkedIn SVG */}
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.33V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
                  </svg>
                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/adumasiv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white hover:scale-110 transition"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.42-4.04-1.42-.54-1.38-1.32-1.75-1.32-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.06 1.82 2.78 1.3 3.46.99.1-.77.42-1.3.76-1.6-2.66-.3-5.46-1.34-5.46-5.96 0-1.32.46-2.4 1.22-3.24-.12-.3-.53-1.52.12-3.16 0 0 1-.32 3.3 1.24a11.4 11.4 0 0 1 6 0C17 4.6 18 4.92 18 4.92c.65 1.64.24 2.86.12 3.16.76.84 1.22 1.92 1.22 3.24 0 4.64-2.8 5.66-5.48 5.96.44.38.82 1.12.82 2.26v3.36c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:adumasiv@emich.edu"
                  className="text-gray-400 hover:text-white hover:scale-110 transition"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 13.065L.75 6.75v10.5A2.25 2.25 0 003 19.5h18a2.25 2.25 0 002.25-2.25V6.75L12 13.065z" />
                    <path d="M23.25 4.5A2.25 2.25 0 0021 2.25H3A2.25 2.25 0 00.75 4.5l11.25 6.315L23.25 4.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <FadeIn>
          <h2 className="heading text-center mb-12">About Me</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {/* LEFT CARD — PROFILE */}
          <FadeIn>
            <div className="h-full p-6 border border-gray-800 rounded-2xl bg-white/5 backdrop-blur flex flex-col items-center text-center">
              {/* IMAGE PLACEHOLDER */}
              <div>
                <img
                  src="/images/HeadshotMK5.jpg"
                  alt="Avery Dumas"
                  className="w-48 h-48 object-cover rounded-xl mb-6 border border-gray-700 shadow-[0_0_25px_rgba(99,102,241,0.3)]"
                />
              </div>

              {/* NAME */}
              <h3 className="text-xl font-semibold">Avery Dumas IV</h3>

              {/* LOCATION */}
              <div>
                <p className="text-xs text-gray-500"></p>
                <a
                  href="https://www.google.com/maps/place/Underground+Sounds/@42.280303,-83.7501978,17z/data=!3m2!4b1!5s0x883cae3c54825ea5:0x841726ee11b2be2a!4m6!3m5!1s0x883cae3c28033af1:0x3e62b3976fdf7556!8m2!3d42.2802991!4d-83.7476229!16s%2Fg%2F1tj4hqp0?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                >
                  Ann Arbor, MI
                </a>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-8">
            {/* STORY CARD */}
            <FadeIn>
              <div className="p-6 border border-gray-800 rounded-2xl bg-white/5 backdrop-blur h-full">
                <h2 className="text-xl font-semibold mb-4 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                  My Journey Into Tech
                </h2>

                <p className="text-gray-400 leading-relaxed">
                  I got into technology through a passion for problem solving
                  and building systems that have real-world impact. What started
                  as curiosity quickly turned into a deep interest in software
                  engineering, AI, and creating tools that improve efficiency
                  and decision-making. Over time, I’ve developed a strong
                  foundation in full-stack development and machine learning,
                  working on projects that bridge theory with practical
                  application.
                </p>
              </div>
            </FadeIn>

            {/* EDUCATION / GOALS CARD */}
            <FadeIn>
              <div className="p-6 border border-gray-800 rounded-2xl bg-white/5 backdrop-blur h-full">
                <h2 className="text-xl font-semibold mb-4 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                  Education & Goals
                </h2>
                <h4 className="text-xl font-bold mb-4">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  I graduated from Eastern Michigan University with a Bachelor
                  of Science in Computer Science in December 2024. Since then,
                  I’ve continued building hands-on experience through real-world
                  projects and internships. I’m also working toward industry
                  certifications such as AWS to strengthen my cloud and systems
                  knowledge. Going forward, my goal is to continue developing
                  scalable applications and AI-driven solutions while growing
                  into a well-rounded software engineer.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="section">
        <FadeIn>
          <h2 className="heading"> Featured Projects</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {projects.map((p) => (
            <FadeIn key={p.id}>
              <div
                onClick={() => window.open(p.github, "_blank")}
                className="group relative cursor-pointer border border-gray-800 rounded-xl overflow-hidden bg-white/5 backdrop-blur transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:-translate-y-1"
              >
                <div className="h-48 bg-gray-900 overflow-hidden relative">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-600 text-sm">
                      Project Image
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      

                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2 border border-white rounded-lg text-sm font-medium hover:bg-white hover:text-black transition shadow-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.42-4.04-1.42-.54-1.38-1.32-1.75-1.32-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.06 1.82 2.78 1.3 3.46.99.1-.77.42-1.3.76-1.6-2.66-.3-5.46-1.34-5.46-5.96 0-1.32.46-2.4 1.22-3.24-.12-.3-.53-1.52.12-3.16 0 0 1-.32 3.3 1.24a11.4 11.4 0 0 1 6 0C17 4.6 18 4.92 18 4.92c.65 1.64.24 2.86.12 3.16.76.84 1.22 1.92 1.22 3.24 0 4.64-2.8 5.66-5.48 5.96.44.38.82 1.12.82 2.26v3.36c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                    {p.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">{p.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 border border-gray-700 rounded-md text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition shadow-lg"
          >
            See the rest of my work
          </a>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <FadeIn>
          <h2 className="heading text-center mb-12">Experience</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* DTE ENERGY */}
          <FadeIn>
            <div className="p-6 border border-gray-800 rounded-2xl bg-white/5 backdrop-blur h-full flex flex-col gap-4">
              {/* LOGO PLACEHOLDER */}
              <img
                src="/images/dte.png"
                alt="DTE Energy"
                className="w-16 h-16 object-contain"
              />

              <div>
                <h3 className="text-lg font-bold">
                  Software Developer Co-op
                </h3>
                <h3 className="text-lg font-semibold">
                  DTE Energy
                </h3>
                <p className="text-gray-500 text-sm mt-1">2023</p>
              </div>

              <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                <li>
                  Developed an internal inventory tracking application using
                  JavaScript and Power BI.
                </li>
                <li>
                  Managed and optimized a database containing over 2,000 items.
                </li>
                <li>
                  Improved team productivity by streamlining workflows and data
                  access.
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* EASTERN MICHIGAN UNIVERSITY */}
          <FadeIn>
            <div className="p-6 border border-gray-800 rounded-2xl bg-white/5 backdrop-blur h-full flex flex-col gap-4">
              {/* LOGO PLACEHOLDER */}
              <img
                src="/images/EMU.png"
                alt="EMU"
                className="w-16 h-16 object-contain"
              />


              <div>
                <h3 className="text-lg font-bold">
                  Technology Manager
                </h3>
                <h3 className="text-lg font-semibold">
                  Eastern Michigan University
                </h3>
                <p className="text-gray-500 text-sm mt-1">2023 – Present</p>
              </div>

              <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                <li>
                  Led a team of 10 technicians supporting over 800 events
                  annually.
                </li>
                <li>
                  Designed and implemented systems to improve operational
                  efficiency.
                </li>
                <li>
                  Reduced setup time and increased reliability across event
                  workflows.
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* NEW GRACE APOSTOLIC TEMPLE */}
          <FadeIn>
            <div className="p-6 border border-gray-800 rounded-2xl bg-white/5 backdrop-blur h-full flex flex-col gap-4 md:col-span-2">
              {/* LOGO PLACEHOLDER */}
              <img
                src="/images/NGAT.png"
                alt="NGAT"
                className="w-14 h-14 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">
                  IT Technician
                </h3>
                <h3 className="text-lg font-semibold">
                  New Grace Apostolic Temple
                </h3>
                <p className="text-gray-500 text-sm mt-1">2022 – Present</p>
              </div>

              <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                <li>
                  Upgraded network infrastructure to improve connectivity and
                  performance.
                </li>
                <li>
                  Developed and deployed a company website to enhance online
                  presence.
                </li>
                <li>Trained staff on new systems and technical workflows.</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Let’s Build Something Great Together.
            </h2>
          </div>
        </FadeIn>

        {/* GRID */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* LEFT CARD — CONTACT INFO */}
          <FadeIn>
            <div className="p-8 border border-gray-800 rounded-2xl bg-white/5 backdrop-blur space-y-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>

                <div className="space-y-6">
                  {/* EMAIL */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-400 mt-1 drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]" />
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <a
                        href="mailto:adumasiv@emich.edu"
                        className="hover:text-primary transition"
                      >
                        adumasiv@emich.edu
                      </a>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-green-400 mt-1 drop-shadow-[0_0_6px_rgba(34,197,94,0.5)]" />

                    <div>
                      <p className="text-xs text-gray-500">Phone</p>
                      <a
                        href="tel:+17343304381"
                        className="hover:text-primary transition"
                      >
                        (734) 330-4381
                      </a>
                    </div>
                  </div>

                  {/* LOCATION */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-400 mt-1 drop-shadow-[0_0_6px_rgba(239,68,68,0.5)]" />

                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <a
                        href="https://www.google.com/maps/place/Underground+Sounds/@42.280303,-83.7501978,17z/data=!3m2!4b1!5s0x883cae3c54825ea5:0x841726ee11b2be2a!4m6!3m5!1s0x883cae3c28033af1:0x3e62b3976fdf7556!8m2!3d42.2802991!4d-83.7476229!16s%2Fg%2F1tj4hqp0?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition"
                      >
                        Ann Arbor, MI
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* SOCIALS */}
              <div>
                <p className="text-sm text-gray-500 mb-3">Connect with me on</p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="www.linkedin.com/in/averydumasiv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-white hover:text-black transition"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/adumasiv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-white hover:text-black transition"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.instagram.com/iv_avery/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-white hover:text-black transition"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT CARD — FORM */}
          <FadeIn>
            <div className="p-8 border border-gray-800 rounded-2xl bg-white/5 backdrop-blur h-full flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full p-3 bg-white/5 border border-gray-800 rounded-lg"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 bg-white/5 border border-gray-800 rounded-lg"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full p-3 bg-white/5 border border-gray-800 rounded-lg"
                  rows={4}
                  required
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 bg-primary rounded-lg hover:opacity-90 transition disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="text-green-400 text-sm">
                    Message sent successfully.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Try again.
                  </p>
                )}
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
