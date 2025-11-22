import Card from "./Card.jsx";

export default function Work() {
    return (
        <main className="min-h-screen p-10">
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card
                    name="Project One"
                    lang1="React"
                    lang2="Tailwind CSS"
                    lang3="Vite"
                    description="A brief description of Project One."
                />
            </section>
        </main>
    )
}