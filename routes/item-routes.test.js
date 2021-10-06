const request = require("supertest");
const db = require("../database/db-config");
const server = require("../api/server");

describe("Server", () => {
  // guarantees the table is cleaned out before any tests run
  beforeEach(async () => {
    await db("items").truncate();
  });

  // cross-env DB_ENV = testing
  it('tests are running with DB_ENV set as "testing"', () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  // GET ALL ITEMS
  describe("GET /", () => {
    it("returns 200 ok", () => {
      // make a GET request to / on our server
      return request(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    // check that the type of code is JSON
    it("returns JSON", () => {
      return request(server)
        .get("/")
        .then((res) => {
            expect(res.type).toBe('application/json')
        });
    });
  });

  // POST ITEM
  describe("POST /api/items", () => {
    it("should insert an item into the db", async () => {
      // insert one
      await request(server).post("/api/items").send({
        name: "Tomatoes",
        description: "Lorem ipsum",
        count: "1",
      });
      // check if there is one item in the table
      const items = await db("items");
      expect(items).toHaveLength(1);
    });
  });

});
