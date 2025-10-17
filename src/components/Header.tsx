import {MapPin, ShoppingCart}  from "@phosphor-icons/react";


export function Header() {
    document.title = `Coffee Delivery | Home`
    return (
        <div>
            <header className="flex justify-between items-center p-[2rem] max-w-[1200px] align-middle mx-auto">
                <a href="/">
                <div>
                    <img src="src/assets/logo.svg" alt="logo" className="w-[6.5rem]"/>
                </div></a>
                <div className="flex items-center gap-[1rem]">
                    <div className="flex items-center gap-[0.5rem] bg-purple-light text-purple p-[0.5rem] rounded-md">
                        <MapPin size={20} weight="fill" />
                        <span>Nome da Cidade</span>
                    </div>
                   <a href="/checkout">
                     <div className="flex items-center bg-yellow-light text-yellow p-[0.5rem] rounded-md relative">
                        <ShoppingCart size={20} weight="fill" color="var(--color-yellow-dark)" />
                    </div>
                   </a>
                </div>
            </header>
        </div>
    )
}