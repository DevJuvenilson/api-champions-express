import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as StatusCode from "../utils/http-helper";


export const getPlayerService = async() => {
    const data = await PlayerRepository.findAllPlayers();
    let response = null;

    if (data) {
        response = await StatusCode.ok(data);
    } else {
        response = await StatusCode.noContent();
    }
    
    return response;
}

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;

    if (data) {
        response = await StatusCode.ok(data);
    } else {
        response = await StatusCode.noContent()
    }

    return response;
};

export const createPlayerService = async (player: PlayerModel) => {

    let response = null;

    if (Object.keys(player).length !== 0) {
        await PlayerRepository.insertPlayer(player);
        response = await StatusCode.created()
    } else {
        response = await StatusCode.badRequest();
    }

    return response
};

export const deletePlayerService = async (id: number) => {
    let response = null;
    const isDeleted = await PlayerRepository.deleteOnePlayer(id);

    if (isDeleted) {
        return response = await StatusCode.ok({ message: "deleted" });
    } else {
        return response = await StatusCode.badRequest();
    }
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    const data = await PlayerRepository.findAndModifyPlayer(id, statistics);
    const response = await StatusCode.ok(data)
    return response;
}