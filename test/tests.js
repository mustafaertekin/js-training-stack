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
      
    it('should remove the last two items', function(){
        rechnungStack.remove();  
        rechnungStack.remove();  

        rechnungStack.peek().should.be.equal('Steuer');
        rechnungStack.size().should.be.equal(4);
    });
    
    it('should answer the question that the stack is emtpy!', function(){
        let isEmpty = rechnungStack.isEmpty();
        
        isEmpty.should.be.equal(false);
        rechnungStack.size().should.be.equal(4);
    });
    
    it('should reset stack', function(){
        rechnungStack.reset();
        let isEmpty = rechnungStack.isEmpty();

        isEmpty.should.be.equal(true);
        rechnungStack.size().should.be.equal(0);
    });
    
    it('should create an instance from an array', function(){
        rechnungStack.$stackOf(["Fleisch", "Strassenverkehrsamt"]);
        let isEmpty = rechnungStack.isEmpty();

        isEmpty.should.be.equal(false);
        rechnungStack.size().should.be.equal(2);
        rechnungStack.peek().should.be.equal("Strassenverkehrsamt");
    });
    
    it('should create an instance from given parameters', function(){
        rechnungStack.$stackOf("Freiwillige Zuwendung", "Spielgruppe");
        let isEmpty = rechnungStack.isEmpty();

        isEmpty.should.be.equal(false);
        rechnungStack.size().should.be.equal(4);
        rechnungStack.peek().should.be.equal("Spielgruppe");
    });
});

