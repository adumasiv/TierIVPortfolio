export default function Navbar() {
return (
<nav className="fixed w-full flex justify-between p-6 bg-black/70 text-white">
<h1>Avery Dumas IV</h1>
<div className="space-x-6">
<a href="#projects">Projects</a>
<a href="#experience">Experience</a>
<a href="#contact">Contact</a>
</div>
</nav>);
}