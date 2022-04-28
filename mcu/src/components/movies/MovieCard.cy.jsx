import MovieCard from "./MovieCard";

describe('check MovieCard', () => {
    it('mounts', () => {
        cy.mount(<MovieCard />)
    })
})