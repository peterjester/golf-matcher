import { Player } from '../players/player';
export class Team {
    id: number;
    name: string;
    record: string;
    league: string;
    players: Player[];
}