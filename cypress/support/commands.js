Cypress.Commands.add('xpath', (xpathSelector) => {
    const xmlString = Cypress.$('html')[0].outerHTML;
    console.log('XML String:', xmlString); // Debug log
    const doc = new DOMParser().parseFromString(xmlString, 'text/html');
    const nodes = xpath.select(xpathSelector, doc);
    console.log('Found nodes:', nodes); // Debug log
  
    return cy.wrap(nodes.map(node => Cypress.$(node)).get());
  });

  
