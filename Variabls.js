/* Declaring Variables

	Till v5 -- only var was there
	from v6 -- let and const came
	
	var --- doesn't care about same variable redeclaring or redefining
	
	let -- Same var can't be redeclared
	
	const -- doesn't allow redeclaring or redefining
	
 
*/

var variableWithVar = 1
console.log("variableWithVar is "+variableWithVar)

var variableWithVar = 5
console.log("variableWithVar after redelcaring "+variableWithVar)

variableWithVar = 10
console.log("variableWithVar after redifining "+variableWithVar)


let variableWithLet = 2
console.log("variableWithLet is "+variableWithLet)

/*let variableWithLet = 5 --> Returns error "Cannot redeclare block-scoped variable "
var variableWithLet = 5
const variableWithLet = 5
*/

variableWithVar = 12
console.log("variableWithVar after redifining "+variableWithVar)

const variableWithConst = 3
console.log("variableWithConst is "+variableWithConst);

/*let variableWithConst = 5; --> Returns error "Cannot redeclare block-scoped variable "
variableWithConst = 9  --> Returns error "TypeError: Assignment to constant variable."
*/
