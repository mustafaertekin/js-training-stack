/**
 * main.js is the entry point to your program.
 * You find the program logic, data structures and function calls in this file 
 */

"use strict";


let stack = new Array();

stack.add(5);
stack.add(4);
stack.add(-2);
stack.add(11);

stack.peek(); // 11

stack.remove();  // 11
stack.remove();  // -2

stack.isEmpty(); // false