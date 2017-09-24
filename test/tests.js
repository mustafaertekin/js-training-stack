/**
 * Please use the file "js/functions.js" for your functions.
 *
 */


describe('Test Suite - Stack', () => {
    
    let rechnungStack = new Array();
        rechnungStack.add("Geschenk");
        rechnungStack.add("Neue Tasche");
        rechnungStack.add("Strom");
        rechnungStack.add("Steuer");
        rechnungStack.add("Krankenkasse");
        rechnungStack.add("Miete");

    
    it('should be able to look up the last element.', () => {
        let topOfStack = rechnungStack.peek();
        let size = rechnungStack.size(); 
        
        topOfStack.should.be.equal('Miete');
        size.should.be.equal(6);
    });
      
    it('An url will be parsed an return all the parts in an object.', function(){
        rechnungStack.remove();  // "Miete"
        rechnungStack.remove();  // "Krankenkasse"

        analysis.query.should.be.equal('sort=ASC');
    });
});

