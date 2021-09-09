import Entity from "./Entity";

export default class StarWarsUniverse{
    constructor(){
        this.entities = []
    }

    async init(){
        const API_ROOT = 'https://swapi.boom.dev/api/';

        const response = await fetch(API_ROOT);
        const data = await response.json()

        for (const [k, v] of Object.entries(data)) {
            let entity = new Entity(k, v)
            this.entities.push(entity)
        }
    }
}