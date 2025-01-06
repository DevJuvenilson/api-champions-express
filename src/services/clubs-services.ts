import * as ClubsRepository from "../repositories/clubs-repository";
import * as StatusCode from "../utils/http-helper"

export const getClubsService = async () => {
    const data = await ClubsRepository.findAllClubs()

    const response = StatusCode.ok(data)

    return response;
}