import ButtonPink from "../components/ButtonPink";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="bg">
            <header className="flex justify-between items-center p-5 max-w-[1500px] m-auto">
                <span className="text-2xl font-semibold">NFTLandingPage</span>
                <Navbar />
            </header>
            <section className="flex px-5 pt-24 overflow-hidden max-w-7xl m-auto">
                <div className="flex-1">
                    <span className="text-secundary uppercase font-semibold">Jogue e colete NFT</span>
                    <h1 className="text-5xl font-medium tracking-tighter mt-3">Bem-vindo ao mundo mágico das NFTs</h1>
                    <h2 className="text-base font-light opacity-60 my-6 max-w-[55ch]">Descubra mais de 200 artefatos mágicos, caçe bestas mortais com força incrível e habilidades únicas.</h2>
                    <ButtonPink />
                </div>
                <div className="flex-1">
                    <img className="transform rotate-15 max-h-[550px]" src="src/assets/fada.png" alt="Bruxinha NFT"/>
                </div>
            </section>
        </div>
    )
}