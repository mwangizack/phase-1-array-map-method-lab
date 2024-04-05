const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  tutorials.map(element => {
    const titleArray = element.split(' ');
    console.log(titleArray)

    titleArray.map(word => {
      let initialFirstLetter = word.slice(0,1);
      console.log(initialFirstLetter)
      let capitaizedFirstLetter = initialFirstLetter.toUpperCase();      
      // Explore the option of word.charAt(0).toUpperCase()
      console.log(capitaizedFirstLetter)
      console.log(word.replace(initialFirstLetter, capitaizedFirstLetter))
      return word.replace(initialFirstLetter, capitaizedFirstLetter)
    })

    // console.log(titleArray.toString())
    // return titleArray.toString();
  })

  // console.log(tutorials)
  // return tutorials;
}

titleCased()
