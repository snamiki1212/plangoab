describe("All pages are visitable", () => {
  it("top page.", () => {
    cy.visit("/home");
  });

  it("calendars new page.", () => {
    cy.visit("/");
  });

  it("calendars list page.", () => {
    cy.visit("/calendars");
  });

  it("calendars create page.", () => {
    cy.visit("/calendars/create");
  });

  it("calendars detail page.", () => {
    cy.visit("/calendars/1");
  });
});
