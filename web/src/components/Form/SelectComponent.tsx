import { CaretDown } from "phosphor-react";
import * as Select from "@radix-ui/react-select";
import { GamesData } from "../../App";

interface Props {
  games: GamesData[];
  setSelectedGame: React.Dispatch<React.SetStateAction<string>>;
  selectedGame: string;
}

export function SelectComponent({
  games,
  setSelectedGame,
  selectedGame,
}: Props) {
  return (
    <Select.Root onValueChange={setSelectedGame}>
      <Select.SelectTrigger
        aria-label="Qual o Game?"
        className="inline-flex items-center justify-between bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
      >
        <Select.SelectValue placeholder="Selecione qual game deseja jogar." />
        <Select.SelectIcon>
          <CaretDown />
        </Select.SelectIcon>
      </Select.SelectTrigger>
      <Select.Portal>
        <Select.SelectContent className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500">
          <Select.SelectViewport className="p-2">
            <Select.SelectGroup>
              {games.map((game) => (
                <Select.SelectItem
                  key={game.id}
                  value={game.title}
                  className="flex items-center h-6 relative select-none text-white z-10 hover:bg-zinc-800"
                >
                  <Select.SelectItemText>{game.title}</Select.SelectItemText>
                  <Select.SelectItemIndicator className="absolute w-6 inline-flex items-center justify-center left-0" />
                </Select.SelectItem>
              ))}
            </Select.SelectGroup>
          </Select.SelectViewport>
        </Select.SelectContent>
      </Select.Portal>
    </Select.Root>
  );
}
