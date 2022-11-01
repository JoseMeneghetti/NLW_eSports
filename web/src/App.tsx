import { CreateAdBanner } from "./components/CreateAdBanner";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "./assets/logo-nlw-esports.svg";
import { GamerBanner } from "./components/GameBanner";

import "./styles/main.css";
import { CreateAdModal } from "./components/CreateAdModal";
import axios from "axios";

export interface GamesData {
  bannerUrl: string;
  id: string;
  title: string;
  _count: {
    Ad: number;
  };
}

function App() {
  const [gamesData, setGamesData] = useState<GamesData[]>([]);
  useEffect(() => {
    axios("http://localhost:3333/games").then((response) => {
      setGamesData(response.data);
    });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} />
      <h1 className="text-6xl text-white font-black my-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {gamesData.map((data) => (
          <GamerBanner
            key={data.id}
            bannerUrl={data.bannerUrl}
            title={data.title}
            adsCount={data._count.Ad}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal games={gamesData} />
      </Dialog.Root>
    </div>
  );
}

export default App;
