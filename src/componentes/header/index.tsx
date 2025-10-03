import { MapPin, ShoppingCart } from "@phosphor-icons/react";


export function Header() {
    return (
        <div className="flex justify-around p-[2rem]">
            <img src=".../../src/assets/logo.svg" alt="" className="h-[4rem]" />
            <div className="flex justify-center align-center">
                <div className="bg-yellow flex p-2 align-midle gap-1">
                    <MapPin size={32} weight="fill" />
                    <p>Porto Alegre</p>
                </div>
                <div className="p-2">
                    <ShoppingCart size={32} weight="fill" />
                </div>
            </div>
        </div>
    )
}