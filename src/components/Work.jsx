import Card from "./Card.jsx";

export default function Work() {
    return (
        <>
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card
                    name="Project One"
                    lang1="React"
                    lang2="Tailwind CSS"
                    lang3="Vite"
                    description="A brief description of Project One."
                />
            </section>
        </>
    )
}