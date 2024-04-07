const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  // Break down the tutorials array to arrays of titles
  let tutorialsTitleCased = tutorials.map((element) => {
    const titleArray = element.split(" ");

    // Go into each title array and capitalize the first character of each element
    let capitalizedWord = titleArray.map((word) => {
      let capitalizedFirstLetter = word.charAt(0).toUpperCase();
      let remainderString = word.slice(1);
      return capitalizedFirstLetter + remainderString;
    });

    // console.log(capitalizedWord);
    // Rejoin the arrays of titles into a string of the full title
    return capitalizedWord.join(" ");
  });

  console.log(tutorialsTitleCased);
  return tutorialsTitleCased;
};

titleCased();
