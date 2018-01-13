/*Jenny has written a function that returns a greeting for a user.
However, she's in love with Johnny, and would like to greet him slightly different.
She added a special case to her function, but she made a mistake.
Can you help her?*/

function greet(name){
    return (name ==="Johnny")? console.log("Hello, my love!"): console.log("Hello, " + name + "!");
}
greet('Max');

/*let greet = name => `Hello, ${name == "Johnny" ? "my love" : name}!`;*/

/*function greet(name) {
    return "Hello, " + (name === "Johnny" ? "my love": name) + "!";
}*/