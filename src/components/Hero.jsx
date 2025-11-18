import OutlineButton from "./OutlineButton.jsx";

export default function Hero() {
    return (
        <>
            <section className="bg-[url('./assets/gradient.svg')] bg-cover bg-center w-full h-screen text-white my-10">
                <div className="flex flex-col justify-center items-center h-full mx-10">
                    <h1 className="font-body text-2xl flex flex-col  tracking-wider mb-2">Hi, my name is <br />
                    <span className="text-8xl font-heading font-bold uppercase mix-blend-overlay">Morgan</span></h1>
                    <p className="opacity-75 font-body text-sm text-center">A junior front end developer located in the US</p>
                    <div>
                        <div className="flex flex-col justify-center items-center mt-10 relative">
                            <OutlineButton text="View my work" />
                            <p className="text-3xl absolute top-30 opacity-50 hover:opacity-100 hover:text-4xl transition-discrete duration-300 cursor-pointer">↓</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}