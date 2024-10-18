import ButtonPink from "./ButtonPink";

type ContainerInfo = {
    image: string
    span: string
    title: string
    description: string
}

export default function ContainerInfo({image, span, title, description} : ContainerInfo) {
    return (
        <div className="flex flex-col items-center px-5 gap-6 mt-28 lg:flex-row">
            <div className="flex-1">
                <img src={image} alt="Personagens NFT" className="w-full max-w-[500px]"/>
            </div>
            <div className="flex-1">
                <span className="text-secundary uppercase font-semibold">{span}</span>
                <h2 className="text-4xl font-medium leading-10 max-w-[20ch] sm:text-5xl">{title}</h2>
                <h3 className="text-base font-light opacity-60 my-6 max-w-[60ch] lg:max-w-[45ch]">{description}</h3>
                <ButtonPink />
            </div>
        </div>
    )
}