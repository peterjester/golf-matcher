import { Player } from '../players/player';
export class Team {
    id: string;
    name: string;
    record: string;
    league: string;
    players: Player[];
}