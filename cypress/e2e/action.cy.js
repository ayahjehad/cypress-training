/// <reference types= "cypress"/>

describe('action', () => {
    it('action click', () => {
        
        cy.visit("https://demo.productionready.io/#/register");
        cy.get(".text-xs-center.ng-binding").click("center");
        cy.get("[type=submit]").click();

    });
    it('action type', () => {
        
        cy.visit("https://demo.productionready.io/#/register");
        cy.get("[type=email]").type("cypress");
        
    });
    it('enter', () => {
      cy.visit("/");
      cy.get("#search").type("bag"+"{enter}")  
    });
    it.only('select', () => {
        cy.visit("https://magento.softwaretestingboard.com/catalogsearch/result/?q=bag");
        //select by value 
        cy.get("#sorter").select("name")
        //select by text
        cy.get("#sorter").select("price")
        //select by index 
        cy.get("#sorter").select(0)
    });
});