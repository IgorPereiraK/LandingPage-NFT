type CardInfo = {
    image: string
    text: string
    description: string
}

export default function CardFeature({image, text, description} : CardInfo) {
    return (
        <div className="bg-card-gray pt-24 pb-8 px-8 rounded-xl flex-1 min-w-[300px] relative">
            <img src={image} alt={text} className="w-24 absolute left-8 -top-12"/>
            <h3 className="text-2xl font-medium">{text}</h3>
            <p className="text-base font-light opacity-60 max-w-[30ch]">{description}</p>
        </div>
    )
}