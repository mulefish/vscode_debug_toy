let count = 0; 

const hello = () => {
	console.log("..........") 
	console.log( "%c A count: " + count , "color:orange;");
	count++
	console.log( "%c B count: " + count , "color:orange;");
	count++
	console.log( "%c C count: " + count , "color:orange;");

} 

hello()
