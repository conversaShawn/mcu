import MovieCard from "./MovieCard";

describe("check MovieCard", () => {
  beforeEach("mounts", () => {
    cy.mount(<MovieCard />);
  });
  it("checks css", () => {
    cy.get(".movieCard")
      .find(".movieCardMedia")
      .should("have.attr", "alt", "Iron Man poster");
  });
});