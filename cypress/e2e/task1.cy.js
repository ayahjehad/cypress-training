/// <reference types= "cypress"/>
describe("Task1", ()=>{
    it("Selectors", ()=> {
        cy.visit("https://demo.productionready.io/#/register");
        cy.get(".text-xs-center.ng-binding")
        cy.contains("Have an account?");
        cy.get(".navbar.navbar-light").find("a").first();
        cy.get(".navbar.navbar-light").find("a").eq(1);
        cy.get(".navbar.navbar-light").find("a").eq(3);
        cy.get("[type=text]")
        cy.get("[type=email]")
        cy.get("[type=password]")
        cy.get("[type=submit]")
        cy.get(".logo-font.ng-binding")
        cy.contains("© 2024. An interactive learning project from Thinkster. Code licensed under MIT.")
    })
})