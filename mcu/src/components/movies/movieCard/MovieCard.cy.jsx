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
  // it('checks css', () => {
  //     cy.get(".movieCard").find(".movieCardMedia").should('have', 'img').should('include', 'iron_man.jpeg')
  // })
});
describe('check image css', () => {
    it("checks css", () => {
        cy.mount(<CardMedia />)
        cy.get("img").should("have.css", "height", "100px");
    });
})