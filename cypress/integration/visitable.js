describe("All pages are visitable", () => {
  it("top page.", () => {
    cy.visit("/");
  });

  it("calendars create page.", () => {
    cy.visit("/calendars/create");
  });

  it("calendars list page.", () => {
    cy.visit("/calendars");
  });

  it("calendars create page V1.", () => {
    cy.visit("/calendars/createV1");
  });

  it("calendars detail page.", () => {
    cy.visit("/calendars/1");
  });
});
