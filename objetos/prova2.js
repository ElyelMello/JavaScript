// Sample code to read input and write output:


function main(input) 
{
    process.stdout.write("Hello " + input);  // Write output to STDOUT
}
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) 
{
        stdin_input += input;   // Read input from STDIN
});

process.stdin.on("end", function () 
{
        main(stdin_input);
});
