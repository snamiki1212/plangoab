describe("All pages are visitable", () => {
  it("top page.", () => {
    cy.visit("/home");
  });

  // it("calendars list page.", () => {
  //   cy.visit("/calendars");
  // });

  it("calendars new page.", () => {
    cy.visit("/");
  });

  // it("calendars detail page.", () => {
  //   cy.visit("/calendars/1");
  // });
});
