#! /usr/bin/env node
import inquirer from "inquirer";
async function motivation() {
    let Person = await inquirer.prompt([
        {
            name: "man",
            type: "list",
            message: "Are you feeling down in your life.\n\n finding a bug\n ok give me 2 minutes to get your energy back ",
            choices: ["Sad", "Scared", "Failure", "Dreamer", "Quitting"],
        },
    ]);
    if (Person.man === "Sad") {
        console.log(`\t\nDon't be sad man and why you're watching the clock so many times;\n do what it does. Keep going.\n means try to find your bug in life.\n\t and when you find that give it a punch and say \n its your time to stop cause I am going `);
    }
    else if (Person.man === "Failure") {
        console.log(`\t\nDon't be mad when you fail in something.\n\t Failure does'nt means you are a failure, It just means you have'nt successed yet.\n\tEinstien failed 99 times in making bulb to shine ,\n\t he does'nt say I failed 99 times,hey said I invented 99 methods where bulb can't shine`);
    }
    else if (Person.man === "Scared") {
        console.log(`\t\nAre you Scared .\n\t Its OKAY to be Scared ,Being scared means you're about to do somthing really ,really great.\n \t so do what clock does "keep going"`);
    }
    else if (Person.man === "Dreamer") {
        console.log(`\t\n oh yeah You'er the dreamer I am too \n\t Yes The future belongs to those who believe in the beauty of their dreams.`);
    }
    else if (Person.man === "Quitting") {
        console.log(`\t\nWhen you feel like quitting think about why you should start. \n\t so give a huge kick to your quitting habbit.`);
    }
    else {
        console.log(`\t\nYour time is limited, don’t waste it living someone else’s life. and\n the only way to do great work is to love what you do`);
    }
}
motivation();
