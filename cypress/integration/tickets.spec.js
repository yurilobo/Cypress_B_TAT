const cypress = require("cypress");
const { it } = require("mocha");

describe("Tickets",()=>{
    beforeEach(()=>cy.visit("https://bit.ly/2XSuwCW"));
    it("has 'TICKETBOX' header's heading" , () => {});
});