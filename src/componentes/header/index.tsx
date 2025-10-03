import { MapPin, ShoppingCart } from "@phosphor-icons/react";


export function Header() {
    return (
        <div className="flex m-auto justify-between items-center p-[2rem] max-w-[1100px]">
            <img src=".../../src/assets/logo.svg" alt="" className="h-[4rem]" />
            <div className="flex gap-2">
                <div className="bg-[#EBE5F9] p-4 rounded-[10px]  h-[3rem] flex items-center">
                    <MapPin size={22} color="#4B2995" weight="fill" />
                    <p className="text-[#4B2995]">Rio de Janeiro/RJ </p>
                </div>
                <div className="p-3 flex items-center bg-[#F1E9C9] rounded-[10px]">
                    <ShoppingCart size={22} color="#C47F17" weight="fill" />
                </div>
            </div>
        </div>
    )
}