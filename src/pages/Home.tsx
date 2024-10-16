import ButtonPink from "../components/ButtonPink";
import ContainerInfo from "../components/ContainerInfo";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="bg">
            <header className="flex justify-between items-center p-5 max-w-[1500px] m-auto">
                <span className="text-2xl font-semibold">NFTLandingPage</span>
                <Navbar />
                <button className="block md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            </header>
            <section className="flex flex-col px-5 pt-24 overflow-hidden max-w-7xl m-auto gap-10
            lg:flex lg:flex-row lg:gap-0">
                <div className="flex-1">
                    <span className="text-secundary uppercase font-semibold">Jogue e colete NFT</span>
                    <h1 className="text-4xl font-medium tracking-tighter mt-3 max-w-[20ch] sm:text-5xl">Bem-vindo ao mundo mágico das NFTs</h1>
                    <h2 className="text-base font-light opacity-60 my-6 max-w-[55ch]">Descubra mais de 200 artefatos mágicos, caçe bestas mortais com força incrível e habilidades únicas.</h2>
                    <ButtonPink />
                </div>
                <div className="flex-1">
                    <img className="transform rotate-15 w-[90%] max-w-[400px] mx-auto lg:max-w-[550px]" src="src/assets/fada.png" alt="Bruxinha NFT"/>
                </div>
            </section>
            <section>
                <div className="w-full h-0.5 bg-slate-50 opacity-15"></div>
                <div className="flex flex-wrap gap-6 mt-12 px-5">
                    <ContainerInfo title="1M+" description="Usuários ativos"/>
                    <ContainerInfo title="R$115M" description="Já ganhos"/>
                    <ContainerInfo title="4.8" description="Avalições médias"/>
                    <ContainerInfo title="200+" description="Coleções"/>
                </div>
            </section>
        </div>
    )
}