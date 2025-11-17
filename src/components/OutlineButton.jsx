export default function OutlineButton({text}) {
    return (
        <>
            <button className="px-3 py-2 border border-white/50 opacity-50 hover:opacity-100 transition rounded-full text-sm">
                {text}
            </button>
        </>
    )
}