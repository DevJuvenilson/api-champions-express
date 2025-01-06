export interface PlayerModel {
    id: number,
    name: string,
    statistics: {
        Overall: number;
        Passe: number;
        Chute: number;
        Drible: number;
    }
}