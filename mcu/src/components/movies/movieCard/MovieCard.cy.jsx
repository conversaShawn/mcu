import MovieCard from "./MovieCard";

describe("check MovieCard", () => {
  beforeEach("mounts", () => {
    cy.mount(<MovieCard />);
  });
  it("checks css", () => {
    cy.get(".movieContainer")
      .find("img").eq(0)
      .should("have.css", "max-height", "300px");
  });
});
describe("checks alt accessibility", () => {
  beforeEach('mounts movieCard', () => {
    cy.mount(<MovieCard />);
  })
  it("checks X-Men", () => {
    cy.get(".movieContainer")
      .find("img").eq(0)
      .should("have.attr", "alt", "X-Men");
  })
  it("checks Spiderman", () => {
    cy.get(".movieContainer")
      .find("img").eq(1)
      .should("have.attr", "alt", "Spiderman");
  })
  it("checks Hulk", () => {
    cy.get(".movieContainer")
      .find("img").eq(2)
      .should("have.attr", "alt", "Hulk");
  })
  it("checks X2: X-Men United", () => {
    cy.get(".movieContainer")
      .find("img").eq(3)
      .should("have.attr", "alt", "X2: X-Men United");
  })
  it("checks Spiderman 2", () => {
    cy.get(".movieContainer")
      .find("img").eq(4)
      .should("have.attr", "alt", "Spiderman 2");
  })
  it("checks X-Men: The Last Stand", () => {
    cy.get(".movieContainer")
      .find("img").eq(5)
      .should("have.attr", "alt", "X-Men: The Last Stand");
  })
  it("checks Spiderman 3", () => {
    cy.get(".movieContainer")
      .find("img").eq(6)
      .should("have.attr", "alt", "Spiderman 3");
  })
  it("checks Iron Man", () => {
    cy.get(".movieContainer")
      .find("img").eq(7)
      .should("have.attr", "alt", "Iron Man");
  })
  it("checks The Incredible Hulk", () => {
    cy.get(".movieContainer")
      .find("img").eq(8)
      .should("have.attr", "alt", "The Incredible Hulk");
  })
  it("checks Iron Man 2", () => {
    cy.get(".movieContainer")
      .find("img").eq(9)
      .should("have.attr", "alt", "Iron Man 2");
  })
})