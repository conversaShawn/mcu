import MovieCard from "./MovieCard";

describe('check MovieCard', () => {
    it('mounts', () => {
        cy.mount(<MovieCard />)
    })
    it('checks css', () => {
        cy.mount(<MovieCard />)
        cy.get(".movieCard").should('have.css', 'height', '300px')
    })
    // it('checks css', () => {
    //     cy.mount(<MovieCard />)
    //     cy.get(".movieCard").contains('Card')
    // })
})