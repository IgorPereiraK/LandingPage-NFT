import ButtonPink from "./ButtonPink";

export default function ContainerInfo() {
    return (
        <div className="flex items-center px-5 gap-6 mt-28">
            <div className="flex-1">
                <img src="src/assets/img1.png" alt="Personagens NFT"/>
            </div>
            <div className="flex-1">
                <span className="text-secundary uppercase font-semibold">Conceito Base</span>
                <h2 className="text-4xl font-medium leading-5 max-w-[20ch] sm:text-5xl">Jogo de coleta NFT e autobatalha</h2>
                <h3 className="text-base font-light opacity-60 my-6 max-w-[45ch]">Descubra mais de 200 artefatos mágicos, cace as feras mortais que governam este mundo mágico, cada 
                    uma com poderes mágicos e habilidades únicas. Treine e una seus magos em guias poderosos para aumentar 
                    seu poder e valor para você criar a equipe perfeita.</h3>
                <ButtonPink />
            </div>
        </div>
    )
}