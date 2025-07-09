function generateJoke(event) {
    event.preventDefault();
    
    new Typewriter("#joke", {
        strings: "An English joke is going to be here...",
        autoStart: true,
        cursor: null,
        delay: 10,
    });
}

let jokeFormElement = document.querySelector("#joke-generator-form");
jokeFormElement.addEventListener("submit", generateJoke);