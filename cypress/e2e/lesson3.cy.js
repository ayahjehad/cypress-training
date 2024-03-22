/// <reference types= "cypress" />

 describe("lesson3", ()=>{
    it("contains command", ()=> {
        cy.visit("/");
        cy.get("ul.footer").find("li").contains("Advanced Search");
        cy.contains("Hot Sellers");
        cy.contains("As low as"); //  ومنبعث فيها نص برجع اول وحده بالموقع
        cy.get(".price-label"); //بترجع كل الelement
        cy.contains("span","Shop New Yoga");
        //cy.contains("");
        //cy.contains("","");
        //cy..get("").contains("");

    })
    it("position in list", ()=>{
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get(".block-promo-wrapper").find("a").last();
        cy.get(".block-promo-wrapper a").first();
        cy.get(".block-promo-wrapper a").eq(2);
        cy.get(".block-promo-wrapper a").first().next()
    })

    it("fillter", ()=>{
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get("li") //44 element
        cy.get("li").filter(".authorization-link")
        cy.get("li").filter(".level0")
        cy.get("li").not(".level0")
    })
    it.only("find & parent",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get(".nav-6").find("a")
        cy.get(".nav-6").parent().parent()
        cy.get(".nav-6").parents()
    })
    })
