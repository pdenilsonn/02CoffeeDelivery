import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { Products } from "../components/Products";

export function Home() {
  return (
    <div id="page" className=" flex flex-col max-w-[1200px] mx-auto p-[2rem] gap-[4rem] ">
      <div className="flex justify-between items-center align-middle ">
        <div className="flex flex-col">
        <div className="mb-[3rem]">
          <h1 className="title">Encontre o café perfeito <br/>para qualquer hora do dia</h1>
        <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
        </div>

        <ul id="group-home-items" className="flex gap-x-[2rem] gap-[1.5rem] flex-wrap text-[1rem]">

          <li id="item" className="flex items-center gap-2">
            <span className="flex items-center rounded-4xl p-2 w-[2rem] h-[2rem] bg-yellow-dark">
              <ShoppingCart size={16} weight="fill" color="white" />
            </span>
            <p>Compra simples e segura</p>
          </li>

          <li id="item" className="flex items-center gap-2">
            <span className="flex items-center rounded-4xl p-2 w-[2rem] h-[2rem] bg-base-subtitle">
              <Package size={16} weight="fill" color="white" />
            </span>
            <p>Embalagem que mantém o café intacto</p>
          </li>

          <li id="item" className="flex items-center gap-2">
            <span className="flex items-center rounded-4xl p-2 w-[2rem] h-[2rem] bg-yellow">
              <Timer size={16} weight="fill" color="white" />
            </span>
            <p>Entrega rápida e rastreada</p>
          </li>

          <li id="item" className="flex items-center gap-2">
            <span className="flex items-center rounded-4xl p-2 w-[2rem] h-[2rem] bg-purple">
              <Coffee size={16} weight="fill" color="white" />
            </span>
            <p>O café chega fresquinho até você</p>
          </li>
          
        </ul>

      </div>
      <div className="w-3xl">
        <img src="src/assets/imageHome.png" alt="copo de café na cor branca com detalhes pretos, ao fundo, uma forma amarela e espalhaos ao fundo grãos de café" />
      </div>
      </div>
      <Products />
    </div>
  )
}