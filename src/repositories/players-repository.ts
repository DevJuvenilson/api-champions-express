import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
    {
        id: 1,
        name: "Messi",
        statistics: {
            Overall: 99,
            Passe: 99,
            Chute: 99,
            Drible: 99
        }
    },
    {
        id: 2,
        name: "Ronaldo",
        statistics: {
            Overall: 99,
            Passe: 99,
            Chute: 99,
            Drible: 99
        }
    }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
};

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex((p) => p.id === id);

    if (index !== -1) {
        database.splice(index, 1);
        return true
    };

    return false
};

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
    const playerIndex = database.findIndex(player => player.id === id);

    if (playerIndex !== -1) {
        database[playerIndex].statistics = statistics;
    };

    return database[playerIndex];
}