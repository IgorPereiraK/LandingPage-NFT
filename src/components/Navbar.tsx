export default function Navbar() {
    return (
        <nav className="hidden md:block">
            <ul className="flex gap-8">
                <li><a>NFT</a></li>
                <li><a>Sobre nós</a></li>
                <li><a>Nosso Time</a></li>
                <li><a>Contatos</a></li>
            </ul>
            <button className="block md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-7 w-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </nav>
    )
}