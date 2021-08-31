export type HobbyModelDTO = {
    experienceLevel: number;
    name: string;
    year: number;
}

export type UserModelDTO = {
    name: string;
    hobbies: HobbyModelDTO[];
}