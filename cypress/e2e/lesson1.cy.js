/// <reference types= "cypress" />

describe("lesson1",()=>{

    it("",()=>{
        // visit bage in magento website:
        cy.visit("/")
        cy.visit("/what-is-new.html")
        cy.visit("/customer/account/create/")
      
    })
    /**
 * 1.open website
 * 2.enter vaild email
 * 2.enter vaild password
 * 3.click on login 
 * 4.the user will be redirected to my account bage
 */
it.only("validate that user can login to magento ",()=>{
    // id => idname)
    // class => .classname
    cy.visit("/customer/account/login/")
   cy.get("#email").type("CypressUser@gmail.com")
   cy.get("#pass").type("test@123")
   cy.get("[name=send]").click()
   cy.get(".page-title").should("contain","My Account")
    
})

});


