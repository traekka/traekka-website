import { AppConfig } from "@/utils/AppConfig";

const siteTitle = `${AppConfig.site_name} Presentation`;

describe("SEO Metadata", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  describe("Head", () => {
    it("should have the correct title", () => {
      cy.title().should("eq", siteTitle);
    });
    it("should have the correct description", () => {
      cy.get('head meta[name="description"]').should("have.attr", "content", AppConfig.description);
    });
    it("should have the correct locale", () => {
      cy.get("html").should("have.attr", "lang", AppConfig.locale);
    });
  });
  describe("Open Graph", () => {
    it("should have the correct title", () => {
      cy.get('head meta[property="og:title"]').should("have.attr", "content", siteTitle);
    });
    it("should have the correct description", () => {
      cy.get('head meta[property="og:description"]').should("have.attr", "content", AppConfig.description);
    });
    it("should have the correct locale", () => {
      cy.get('head meta[property="og:locale"]').should("have.attr", "content", AppConfig.locale);
    });
  });
});
