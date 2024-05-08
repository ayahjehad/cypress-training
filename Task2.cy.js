/// <reference types= "cypress"/>
describe("Task2", ()=>{
       beforeEach("",()=>{
            const email = "admin@yourstore.com"; 
            const password = "admin"
            cy.logintoAdminareademo(email,password)
            cy.get("#nopSideBarPusher").click();
            cy.get("li.nav-item.has-treeview").first().click({force: true});
            cy.contains("Products").click({force: true});
        })
          
        it("Add Product test case", ()=> {
           cy.get("a.btn.btn-primary").click();
           cy.get("#Name").type("“Laptop123”");
           cy.wait(1000);
           cy.get("#SelectedCategoryIds").select('Computers',{force:true});
           cy.wait(1000)
           cy.get("#Price").type(3000);
           cy.wait(1000)
           cy.contains("Save").click();

    })
    it("Search for product test case", ()=> {
        cy.get("#SearchProductName").type("Laptop123”");
        cy.wait(1000)
        cy.get("#search-products").click()
    })

    it("Delete for product test case", ()=> {
        cy.get("#SearchProductName").type("Laptop123”");
        cy.wait(1000)
        cy.get("#search-products").click();
        cy.wait(1000)
        cy.get('input.mastercheckbox').first().click({force: true});
        cy.get("#delete-selected").click();
        cy.get("#delete-selected-action-confirmation-submit-button").click();
    }) 
})  