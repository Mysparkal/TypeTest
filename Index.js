const array = ["This Website Created By Raj Saxena.",
    "I am typing in Typing Tech.",
    "My Keybord was new but my Mouse was old.",
    "I type very fast but in my Dreams.",
    "My Walking Speed faster than my Typing Speed.",
    "I say Thanks to Raj Saxena for this Website.",
    "I enjoy to type in this Website.",
    "The quick brown fox jumps over the lazy dog."
];
const btn = document.getElementById("btn");
const msg = document.getElementById("ref");
const text = document.getElementById("text");
let startTime, endTime;

const start = () => {
    text.value = "";
    let rnum = Math.floor(Math.random() * array.length);
    msg.innerText = array[rnum];
    btn.innerText = "Done";
    let date = new Date();
    startTime = date.getTime();
}

const counter = (words) => {
    let wordCount = words.split(" ").length;
    return wordCount;
}

const compare = (val1, val2) => {
    let msgword = val1.split(" ");
    let userword = val2.split(" ");
    let total = 0;

    msgword.forEach(function (words, index) {
        if (words == userword[index]) {
            total++;
        }
    });

    let error = (msgword.length - total);
    return (` ${total} Correct words out of ${msgword.length} and you missed ${error} words.`);
}

const end = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    let typing = text.value;
    let count = counter(typing);
    let speed = Math.round((count / totalTime) * 60);
    let final = `You Typed ${speed} words per Minute.`
    final += compare(msg.innerText, typing);
    msg.innerText = final;
}

btn.addEventListener("click", function () {
    if (this.innerText == 'Start') {
        text.disabled = false;
        start()
    }
    else if (text.value == "") {
        msg.innerText = `Please Type Someting`
        btn.innerText = "Start";
    }
    else if (this.innerText == 'Done') {
        text.disabled = true;
        btn.innerText = "Start";
        end();
    }
})