import { Player } from "./Player"

export interface NewGame {
    players: Player[];
    courseName: string;
    numHoles: 9 | 18 | null;
}