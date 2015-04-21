var write = process.stdout.write;


var originalWrite = process.stdout.write
var output = []
process.stdout.write = function(data) {
	output.push(data);
	originalWrite.call(process.stdout, data);
}
console.log("hello");
console.log("print");
process.stdout.write = originalWrite
//console.log(output)