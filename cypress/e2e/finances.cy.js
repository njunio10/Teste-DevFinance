

describe('Transações', () => {

    beforeEach(() => { 
        cy.visit("https://devfinance-agilizei.netlify.app/#")
    })
    
    it('Cadastrar uma entrada', () => {
        
        criarTransacao("Freela", 250)
        cy.get("tbody tr td.description").should("have.text", "Freela")
    })

    it('Cadastrar uma saída', () => {

        criarTransacao("Cinema", -45)
        cy.get("tbody tr  td.description").should("have.text", "Cinema")

    })
    
    it('Excluir Transação', () => {

        criarTransacao("Freela", 100)
        criarTransacao("Mesada", 10)
        cy.contains(".description", "Freela")
        .parent()
        .find('img')
        .click()
    })        

})

//funcao
function criarTransacao(descricao, valor) {
    cy.contains("Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2023-02-15")

    cy.contains('button', 'Salvar').click()
}