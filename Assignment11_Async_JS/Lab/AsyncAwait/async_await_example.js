// Create a function to get Avengers movie title
const getAvengersTitle = () => {
  const title =  "Avengers: Endgame";
  return title;
};

// Create a function to get the release year of Avengers movie
const getAvengersReleaseYear = () => {
  const releaseYear = 2019;
  return releaseYear;
};

// Create a function to get the director of Avengers movie
const getAvengersDirector = () => {
  const director = "Anthony Russo and Joe Russo";
  return director;
};

// Call the functions using async/await
const getAvengersDetails = async () => {
  try {
    const title = getAvengersTitle();
    console.log(`The title of the movie is ${title}.`);

    //Explain-How Chaining is happening here
    const releaseYear = getAvengersReleaseYear();
    console.log(`The movie was released in ${releaseYear}.`);

    const director = getAvengersDirector();
    console.log(`The movie was directed by ${director}.`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

// Call the function to get the Avengers details
getAvengersDetails();

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// console.log("C");
