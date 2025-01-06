import { response } from "express";
import { PlayerModel } from "../models/player-model";
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
        response = StatusCode.ok(data);
    } else {
        response = StatusCode.noContent()
    }

    return response;
};

export const createPlayerService = async (player: PlayerModel) => {

    let response = null;

    if (Object.keys(player).length !== 0) {
        await PlayerRepository.insertPlayer(player);
        response = StatusCode.created()
    } else {
        response = StatusCode.badRequest();
    }

    return response
};

export const deletePlayerService = async (id: number) => {
    let response = null;
    await PlayerRepository.deleteOnePlayer(id);

    response = StatusCode.ok({ message: "deleted" });

    return response;
}