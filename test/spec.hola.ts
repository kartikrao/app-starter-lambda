/// <reference path="../src/hola.ts" />
var Hola = require("../src/hola");

describe("hola", () => {
    it("responds with hello", () => {
        Hola.handle({}, {}, (err, response) => {
            if (err) {
                fail();
                return;
            }
            expect(response.body).toBe("Hola !!")
        });
    });
});