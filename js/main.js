/**
 * main.js is the entry point to your program.
 * You find the program logic, data structures and function calls in this file 
 */

"use strict";


let rechnungStack = new Array();

rechnungStack.add("Geschenk");
rechnungStack.add("Neue Tasche");
rechnungStack.add("Strom");
rechnungStack.add("Steuer");
rechnungStack.add("Krankenkasse");
rechnungStack.add("Miete");

rechnungStack.peek(); // "Miete"
rechnungStack.size(); // 6

rechnungStack.remove();  // "Miete"
rechnungStack.remove();  // "Krankenkasse"

rechnungStack.isEmpty(); // false

rechnungStack.empty(); 
rechnungStack.isEmpty(); // true