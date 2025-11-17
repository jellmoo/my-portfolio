import OutlineButton from "./OutlineButton.jsx";

export default function Nav() {
    return (
        <header className=" text-white p-4 font-body">
            <nav className="flex justify-center">
                <ul className="flex gap-4">
                    <li><OutlineButton text="Home" /></li>
                    <li><OutlineButton text="Work" /></li>
                    <li><OutlineButton text="Contact" /></li>
                </ul>
            </nav>
        </header>
    )
}