/// <reference types= "cypress" />


describe("lesson2",()=>{

    it("Selectors",()=>{
        //visit the magento
        cy.visit("/");
        //cypress command
       // cy.contains("Sign In")

      cy.get(".authorization-link a").first().click()

      //cy.get(".authorization-link a").last()

      cy.get("#search").type("bag")

      cy.get(".showcart").click()

      cy.get(".nav-1 span").click()
    })
});