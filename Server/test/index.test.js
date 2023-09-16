const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

const character = {
    id: '923',
    name: 'Silvana',
    species: 'Human',
    gender: 'Female',
    status: 'Alive',
    origin: {
        name: 'Earth (C-137)'
    },
    image: 'image.jpg'
}

describe("Test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async() => {
            /* await agent.get('/rickandmorty/character/1').expect(200); */
            const response = await agent.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async() => {
            const response = await agent.get('/rickandmorty/character/1');
            for(const prop in character) {
                expect(response.body).toHaveProperty(prop);
            }
        })
        it("Si hay un error responde con status: 500", async() => {
            const response = await agent.get('/rickandmorty/character/9809s');
            expect(response.statusCode).toBe(500);
        })
    })

    describe("GET /rickandmorty/login", () => {
        const access = { access: true };
        it("Responde con un objeto con la propiedad access en true si la información del usuario es válida", async () => {
            const response = await agent.get('/rickandmorty/login?email=silvana.ybarcena@gmail.com&password=sayr2207')
            expect(response.body).toEqual(access);
        })
        it("Responde con un objeto con la propiedad access en false si la información del usuario no es válida", async () => {
            const response = await agent.get('/rickandmorty/login?email=silvana.ybarcena@gmail.com&password=sayr2207f')
            access.access = false;
            expect(response.body).toEqual(access);
        })
    })
    describe("POST /rickandmorty/fav", () => {
        it("Debe guardar el personaje de favoritos", async () => {
            const response = await agent.post("/rickandmorty/fav").send(character);
            expect(response.body).toContainEqual(character);
        })
        it("Debe agregar nuevos personajes a favoritos sin eliminar los existentes", async () => {
            character.id = '564456';
            character.name = "Andrea";
            const response = await agent.post("/rickandmorty/fav").send(character);
            expect(response.body.length).toBe(2);
        })
    })
    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Si el ID solicitao no existe debería retornar un arreglo con todos los favoritos", async () => {
            const response = await agent.delete("/rickandmorty/fav/2ju8");
            expect(response.body.length).toBe(2);
        })
        it("Si el ID enviado existe, debería eliminarlo de favoritos", async () => {
            const response = await agent.delete("/rickandmorty/fav/923");
            console.log(response.body);
            expect(response.body.length).toBe(1);
        })
    })
})