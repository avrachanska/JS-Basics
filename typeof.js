var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for (var value in languages) {
    if (typeof languages[value] === "string") {
        console.log(languages[value]);
    }
}
