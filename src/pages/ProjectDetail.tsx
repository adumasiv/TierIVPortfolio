import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
export default function ProjectDetail() {
const { id } = useParams();
const p = projects.find(x=>x.id===id);
if(!p) return <div>Not found</div>;
return (
<div className="text-white bg-black min-h-screen p-8">
<h1 className="text-3xl">{p.title}</h1>
<div className="mt-6 border h-48 flex items-center justify-center">Demo placeholder</div>
<p className="mt-4">{p.content.problem}</p>
</div>);
}