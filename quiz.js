import inquirer from "inquirer";
let score = 0;
let ques = await inquirer.prompt([
    {
        name: "istques",
        type: "input",
        message: "what's your name? "
    },
    {
        name: "secques",
        type: "list",
        message: "which computer hardware device provides an interface for ll other connected devices to communicate? ",
        choices: ["central processing unit", "hard disk drive", "random access memory", "MotherBoard"]
    }
]);
if (ques.secques == "MotherBoard") {
    console.log("....correct answer....");
    score++;
}
else {
    console.log("!!!!!!wrorg answer!!!!!! \n correct answer is MotherBoard.");
}
let quiz = await inquirer.prompt([
    {
        name: "thirques",
        type: "list",
        message: "if you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&039;s. ",
        choices: ["javascrpt", "C++", "binary", "python"]
    }
]);
if (quiz.thirques == "binary") {
    console.log(".....correct answer.....");
    score++;
}
else {
    console.log("!!!!!!wrorg answer!!!!!! \n correct answer is binary.");
}
let question = await inquirer.prompt([
    {
        name: "forques",
        type: "list",
        message: "what is the most preffered image format used for logos in the Wikimedia database?  ",
        choices: ["png", "jpeg", "gif", "svg"]
    }
]);
if (question.forques == "svg") {
    console.log(".....correct answer.....");
    score++;
}
else {
    console.log("!!!!!!wrorg answer!!!!!! \n correct answer is svg.");
}
let question4 = await inquirer.prompt([
    {
        name: "fiveques",
        type: "list",
        message: "in &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00ff00&quot;?  ",
        choices: ["red", "blue", "yellow", "green"]
    }
]);
if (question4.fiveques == "green") {
    console.log(".....correct answer.....");
    score++;
}
else {
    console.log("!!!!!!wrorg answer!!!!!! \n correct answer is green.");
}
let question5 = await inquirer.prompt([
    {
        name: "sixques",
        type: "list",
        message: "in computing, what does LAN stand for?  ",
        choices: ["long antenna node", "light access node", "land address navigation", "local area network"]
    }
]);
if (question5.sixques == "local area network") {
    console.log(".....correct answer.....");
    score++;
}
else {
    console.log("!!!!!!wrorg answer!!!!!! \n correct answer is local area network.");
}
console.log(`Dear ${ques.istques}, Your Score is ${score} out of 5 `);
