import Navbar from "../components/navbar";

export default function Home() {
    return (
        <header className="flex justify-between items-center p-5">
            <span className="text-2xl font-semibold">NFTLandingPage</span>
            <Navbar />
        </header>
    )
}