import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import Work from "./Work.jsx";

export default function Layout() {
    return (
        <div className="bg-surface-a0">
            <Nav />
            <main className="min-h-screen">
                <Hero />
                <Work />
            </main>
            <footer>

            </footer>
        </div>
    )
}