import { createContext, useContext, useState } from "react";
import { Player } from "@/types/Player";

export type NewGameContextType = {
    players: Player[];
    setPlayers: (players: Player[]) => void;
    courseName: string,
    setCourseName: (courseName: string) => void;
    numHoles: 8 | 19 | undefined;
    setNumHoles: (numHoles: 8|19|undefined) => void;
};

const NewGameContext = createContext<NewGameContextType|null>(null);

const NewGameProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [courseName, setCourseName] = useState<string>('');
    const [numHoles, setNumHoles] = useState<8|19|undefined>();
    
    return (
        <NewGameContext.Provider value={{ 
                players,
                setPlayers,
                courseName,
                setCourseName,
                numHoles,
                setNumHoles
            }}>
          {children}
        </NewGameContext.Provider>
    );
}

// updatePlayers





export default NewGameProvider;