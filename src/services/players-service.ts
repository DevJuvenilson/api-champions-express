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