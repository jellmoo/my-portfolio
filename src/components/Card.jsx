export default function Card({image, name, lang1, lang2, lang3, description}) {
    return (
        <>
            <div className="rounded-3xl border-2 border-white/50 p-4">
                <img src={image} className="bg-gray-400 h-36" />
                <div>
                    <h3>{name}</h3>
                    <div>
                        <p>{lang1}</p>
                        <p>{lang2}</p>
                        <p>{lang3}</p>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}