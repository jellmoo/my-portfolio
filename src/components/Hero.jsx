import OutlineButton from "./OutlineButton.jsx";

export default function Hero() {
    return (
        <>
            <section className="bg-[url('./assets/gradient.svg')] bg-cover bg-center w-full h-screen text-white">
                <div className="flex flex-col justify-center items-center h-full mx-10">
                    
                    <OutlineButton text="View my work" />
                </div>
            </section>
        </>
    )
}