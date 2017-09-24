/**
 * Please use the file "js/functions.js" for your functions.
 *
 */


describe('Test Suite - Stack', () => {
    
    // initialize the data structure
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
        let topOfStack = rechnungStack.peek()
        let size = rechnungStack.size(); 
        
        topOfStack.should.be.equal('Steuer');
        size.should.be.equal(4);
    });
    
    it('should answer the question that the stack is emtpy!', function(){
        let isEmpty = rechnungStack.isEmpty();
        let size = rechnungStack.size(); 
        
        isEmpty.should.be.equal(false);
        size.should.be.equal(4);
    });
    
    it('should reset stack', function(){
        rechnungStack.reset();
        let isEmpty = rechnungStack.isEmpty();
        let size = rechnungStack.size(); 

        isEmpty.should.be.equal(true);
        size.should.be.equal(0);
    });
    
    it('should create an instance from an array', function(){
        rechnungStack.$stackOf(["Fleisch", "Strassenverkehrsamt"]);
        let isEmpty = rechnungStack.isEmpty();
        let topOfStack = rechnungStack.peek()
        let size = rechnungStack.size(); 

        isEmpty.should.be.equal(false);
        size.should.be.equal(2);
        topOfStack.should.be.equal("Strassenverkehrsamt");
    });
    
    it('should create an instance from given parameters', function(){
        rechnungStack.$stackOf("Freiwillige Zuwendung", "Spielgruppe");
        let isEmpty = rechnungStack.isEmpty();
        let topOfStack = rechnungStack.peek()
        let size = rechnungStack.size(); 

        isEmpty.should.be.equal(false);
        size.should.be.equal(4);
        topOfStack.should.be.equal("Spielgruppe");
    });
});

