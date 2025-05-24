const consoleArgs = process.argv[2];
const num = parseInt(consoleArgs, 10);

if (!isNaN(num)) {
    console.log("My number: "+ num);
} else {
    console.log('Not a number');
}