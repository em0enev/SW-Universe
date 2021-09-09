import Entity from "./Entity";

export default class StarWarsUniverse {
    constructor() {
        this.entities = []
    }

    async init() {
        const API_ROOT = 'https://swapi.boom.dev/api/';

        const data = await fetch(API_ROOT);
        return data.json()
    }
}