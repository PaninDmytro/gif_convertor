/// <reference types="cypress" />

describe("Load testing", () => {
  it("should load", () => {
    const videoFilePath = "demo.mp4";

    cy.fixture(videoFilePath, "base64").then((fileContent) => {
      const blob = Cypress.Blob.base64StringToBlob(fileContent, "video/mp4");
      const formData = new FormData();
      formData.append("video", blob);

      const sendGifReq = () => {
        return cy.request({
          method: "POST",
          url: "/api/videos/convert",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formData,
          failOnStatusCode: false,
          timeout: 60000,
        });
      };

      const requests = Cypress._.times(100, () => sendGifReq());

      Cypress.Promise.all(requests).then((responses) => {
        responses.forEach((res) => {
          expect(!!res).to.equal(!!res);
        });
      });
    });
  });
});
