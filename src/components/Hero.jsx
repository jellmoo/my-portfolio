import OutlineButton from "./OutlineButton.jsx";

export default function Hero() {
    return (
        <>
            <section className="bg-[url('./assets/gradient.svg')] bg-cover bg-center w-full h-screen text-white">
                <div className="flex flex-col justify-center items-center h-full mx-10">
                    <h1 className="font-body text-3xl flex flex-col items-center tracking-wider mb-2">Hi, my name is <br />
                    <span className="text-7xl font-heading font-bold uppercase mix-blend-overlay">Morgan</span></h1>
                    <p className="opacity-75 font-body text-sm text-center">A junior front end developer located in the US</p>
                    <div>
                        <ul className="flex gap-8 mt-10">
                            <li><OutlineButton text="Home" /></li>
                            <li><OutlineButton text="Work" /></li>
                            <li><OutlineButton text="Contact" /></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}