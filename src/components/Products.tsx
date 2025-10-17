 import { ShoppingCart, TipiIcon } from "@phosphor-icons/react";
import axios from "axios";
import { useEffect, useState } from "react";

type Repository = {
    id: number,
    name: string,
    type: string[],
    resume: string,
    img: string,
    price: string
}

export function Products() {
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        axios.get<Repository[]>("/api.json")
        .then((response) => setRepositories(response.data))
        .catch((err) => console.log("Erro: ", err))
    }, [])

    return (
        <div>
            <h2 className="subtitle">Nossos Cafés</h2>
                <div id="containerProdutcs" className="flex flex-row gap-[2rem] mt-[3rem] flex-wrap">

                {repositories.map((repo) => (
                    <div id="itemProduct" key={repo.id} className="flex flex-col items-center p-2 bg-base-card rounded-tl-4xl rounded-br-4xl w-[256px] gap-3">
                    <div className=" flex flex-col gap-2 items-center">
                        <img className="w-[120px] h-[120px] mt-[-2rem] " src={repo.img} alt={repo.name} />
                        <div className="flex gap-2 justify-center mt-2 flex-wrap">
                            {repo.type.map((tipo) => (
                                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full" key={tipo}>{tipo.toUpperCase()}</span>
                            ))}
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-base-subtitle text-[20px] font-bold ">{repo.name}</p>
                        <p className="text-base-label text-[14px]">{repo.resume}</p>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <div>R$ <span className="font-bold text-2xl">{repo.price}</span></div>
                        <div className="flex items-center p-2 gap-[1rem] rounded-[6px] bg-base-button">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                            <div className="flex p-2 rounded-[6px] bg-purple-dark items-center cursor-pointer">
                            <ShoppingCart size={18} weight="fill" color="white" />
                        </div>
                        </div>
                        
                    </div>
                    </div> 

                ))}

                </div>

            
        </div>
    )
}