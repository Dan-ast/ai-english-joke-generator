function displayJoke(response) {
    console.log("A joke is generated.");
    new Typewriter("#joke", {
        strings: response.data.answer,
        autoStart: true,
        cursor: null,
        delay: 10,
    });
    
}
function generateJoke(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "29e2etf9cdad0660583a0o249ab32587";
    let context = "You are a professional comedian who makes up unique, funny and short jokes in English.";
    let prompt = `Please follow a user instructions and make up a short funny joke in English about ${instructionsInput.value}. At the end of the joke please add some emojis related to the joke.`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let jokeElement = document.querySelector("#joke");
    jokeElement.classList.remove("hidden");
    jokeElement.innerHTML = `<span class="blink"> ⌛ <span>Generating a joke about ${instructionsInput.value}... `;

    console.log("Generating a joke...");
    console.log(`Context: ${context}`);
    console.log(`Prompt: ${prompt}`);

    axios.get(apiUrl).then(displayJoke);
}

let jokeFormElement = document.querySelector("#joke-generator-form");
jokeFormElement.addEventListener("submit", generateJoke);