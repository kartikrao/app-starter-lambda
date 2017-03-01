/// <reference path="../src/hello.ts" />

var Hello = require("../src/hello");
describe("hello", () => {
    it("responds with hello", () => {
        Hello.handle({}, {}, (err, response) => {
            if (err) {
                fail();
                return;
            }
            expect(response.body).toBe("Hello !!")
        });
    });
});