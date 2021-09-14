import Entity from "./Entity";

export default class StarWarsUniverse {
    constructor() {
        this.entities = [];
    }

    async init() {
        const API_ROOT = 'https://swapi.boom.dev/api/';

        const data = await fetch(API_ROOT);
        const dataFromApi = await data.json()

        for (const [k, v] of Object.entries(dataFromApi)) {
            const res = await fetch(v)
            const entityData = await res.json();

            let entity = new Entity(k, entityData)
            this.entities.push(entity)
          }
    }
}