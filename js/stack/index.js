

/**
 * Add a new item into the stack
 * @param  pItem, item to be added
 */
Array.prototype.add = function(pItem){
    return this.push(pItem);
};

/**
 * Gives the size of the stack
 */
Array.prototype.size = function(pItem){
    return this.length;
};

/**
 * Remove the first item/tos(top of the stack) from the stack
 */
Array.prototype.remove = function(){
    this.pop();
}

/**
 * Displays the first item/tos(top of stack) from the stack
 */
Array.prototype.peek = function(){
    var top = this[this.length-1];
    return top;
}

/**
 * Delete all items from the stack
 */
Array.prototype.reset = function(){
    this.length = 0;
}

/**
 * Ask whether the stack is empty
 */
Array.prototype.isEmpty = function(){
    if (this.length > 0) {
        return false;
    } else {
        return true;
    }
}


/**
 * Creates a stack from a given array
 * @param pArray, the array which contains the elements to be added
 * @example stackInstance.$stackOf([7,8,9,11]]) 
 */
Array.prototype.$stackOf = function(pArray){
    this.reset();
    for (var i=0; i < pArray.length; i++) {
        this.push(pArray[i]);
    }
    return this;
}


/**
 * Creates a stack from a the given parameters
 */
Array.prototype._$stackOf = function(){
// ---------alternative 1-----------------------
    /*for (let value of arguments){
        this.push(value);
    }*/
// ---------alternative 2-----------------------
//    var args = [].slice.apply(arguments);
//    for (var i=0; i < args.length; i++) {
//        this.push(arguments[i]);
//    }
// ----------alternative 3----------------------
    Array.prototype.push.apply(this,arguments);
}


