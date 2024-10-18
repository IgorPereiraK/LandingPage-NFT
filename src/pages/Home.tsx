import ButtonPink from "../components/ButtonPink";
import CardFeature from "../components/CardFeature";
import ContainerData from "../components/ContainerData";
import ContainerInfo from "../components/ContainerInfo";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="bg">
            <header className="flex justify-between items-center p-5 max-w-[1500px] m-auto">
                <h1 className="text-2xl font-semibold">NFTLandingPage</h1>
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
            <section className="pt-8 max-w-7xl mx-auto pb-28">
                <div className="w-full h-0.5 bg-slate-50 opacity-15"></div>
                <div className="flex flex-wrap gap-6 mt-12 px-5">
                    <ContainerData title="1M+" description="Usuários ativos"/>
                    <ContainerData title="R$115M" description="Já ganhos"/>
                    <ContainerData title="4.8" description="Avalições médias"/>
                    <ContainerData title="200+" description="Coleções"/>
                </div>
                <ContainerInfo image="src/assets/img1.png" span="Conceito base" title="Jogo de coleta NFT e autobatalha" description="Descubra mais de 200 artefatos mágicos, cace as feras mortais que governam este mundo mágico, cada 
                    uma com poderes mágicos e habilidades únicas. Treine e una seus magos em guias poderosos para aumentar 
                    seu poder e valor para você criar a equipe perfeita."
                />
            </section>
            <section className="max-w-7xl mx-auto pb-28">
                <div className="bg-semi-black pt-16 px-10 pb-8 rounded-xl">
                    <div className="text-center">
                        <span className="text-secundary uppercase font-semibold">Características</span>
                        <h1 className="text-4xl font-medium tracking-tighter mt-3 sm:text-5xl">Jogue para ganhar</h1>
                        <h2 className="text-base font-light opacity-60 my-6 max-w-[60ch] mx-auto">Descubra mais de 200 artefatos mágicos, caçe bestas mortais com força incrível e habilidades únicas.</h2>
                    </div>
                    <div className="flex flex-wrap gap-y-16 gap-x-8 mt-24">
                        <CardFeature image="src/assets/feature-icon.png" text="Colete cristais" description="Descubra mais de 200 artefatos mágicos, caçe bestas mortais com força incrível e habilidades únicas."/>
                        <CardFeature image="src/assets/feature-icon.png" text="Colete cristais" description="Descubra mais de 200 artefatos mágicos, caçe bestas mortais com força incrível e habilidades únicas."/>
                        <CardFeature image="src/assets/feature-icon.png" text="Colete cristais" description="Descubra mais de 200 artefatos mágicos, caçe bestas mortais com força incrível e habilidades únicas."/>
                        <CardFeature image="src/assets/feature-icon.png" text="Colete cristais" description="Descubra mais de 200 artefatos mágicos, caçe bestas mortais com força incrível e habilidades únicas."/>
                        <CardFeature image="src/assets/feature-icon.png" text="Colete cristais" description="Descubra mais de 200 artefatos mágicos, caçe bestas mortais com força incrível e habilidades únicas."/>
                        <CardFeature image="src/assets/feature-icon.png" text="Colete cristais" description="Descubra mais de 200 artefatos mágicos, caçe bestas mortais com força incrível e habilidades únicas."/>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto pb-28">
                <ContainerInfo image="src/assets/img2.png" span="Batalha" title="Encontre e lute contra criaturas raras" description="Descubra mais de 200 artefatos mágicos, cace as feras mortais que governam este mundo mágico, cada 
                    uma com poderes mágicos e habilidades únicas. Treine e una seus magos em guias poderosos para aumentar 
                    seu poder e valor para você criar a equipe perfeita."
                />
                 <div className="flex flex-col items-center px-5 gap-6 mt-28 lg:flex-row">
                    <div className="flex-1">
                        <span className="text-secundary uppercase font-semibold">Coleções NFT</span>
                        <h2 className="text-4xl font-medium leading-10 max-w-[20ch] sm:text-5xl">Colete peças impressionantes do mundo digital</h2>
                        <h3 className="text-base font-light opacity-60 my-6 max-w-[60ch]">Descubra mais de 200 artefatos mágicos, cace as feras mortais que governam este mundo mágico, cada 
                            uma com poderes mágicos e habilidades únicas. Treine e una seus magos em guias poderosos para aumentar 
                            seu poder e valor para você criar a equipe perfeita.
                        </h3>
                        <button className="text-secundary font-semibold text-lg flex gap-2 items-center relative after:content-[''] after:bg-secundary after:h-0.5 after:absolute after:w-full after:left-0 after:-bottom-1">
                            Saiba mais 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2eb1a3" className="w-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1">
                        <img src="src/assets/img2.png" alt="Personagens NFT" className="w-full max-w-[500px]"/>
                    </div>
                </div>
            </section>
        </div>
    )
}