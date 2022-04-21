let count = 0; 

const hello = () => {
	console.log("..........") 
	console.log( "%c A count: " + count , "color:orange;");

	console.log( "%c B count: " + count , "color:orange;");
	console.log( "%c C count: " + count , "color:orange;");
	count += 2; 
	document.getElementById("count").innerHTML = count; 	

} 

// hello()
