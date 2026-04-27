import Navbar from "../components/Navbar";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
export default function Home() {
return (
<div className="text-white bg-black min-h-screen">
<Navbar />
<section className="h-screen flex flex-col justify-center px-8">
<h1 className="text-5xl font-bold">Software Engineer</h1>
<p className="text-gray-400 mt-4">Building intelligent systems, full-stack applications, and real-world solutions.</p>
</section>
<section id="projects" className="px-8 py-20">
<h2 className="text-3xl mb-8">Projects</h2>
{projects.map(p => (
<Link key={p.id} to={`/projects/${p.id}`}>
<div className="border p-4 mb-4">{p.title}</div>
</Link>
))}
</section>
</div>);
}