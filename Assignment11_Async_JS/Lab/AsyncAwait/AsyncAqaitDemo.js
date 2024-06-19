// Define three async functions to execute in parallel
async function getAvengersTitle() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const title = "Avengers: Endgame";
      resolve(title);
    }, 2000);
  });
}

async function getAvengersReleaseYear() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const releaseYear = 2019;
      resolve(releaseYear);
    }, 3000);
  });
}

async function getAvengersDirector() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const director = "Anthony Russo and Joe Russo";
      resolve(director);
    }, 4000);
  });
}

async function getAvengersDetails() {
  const titlePromise = getAvengersTitle();

  titlePromise.then(function (title) {
    console.log(`The movie was directed by ${title}.`);
  });

  const releaseYearPromise = getAvengersReleaseYear();
  releaseYearPromise.then(function (releaseYear) {
    console.log(`The movie was released in ${releaseYear}.`);
  });

  const directorPromise = getAvengersDirector();
  directorPromise.then(function (director) {
    console.log(`The movie was directed by ${director}.`);
  });

  //   const releaseYearPromise = getAvengersReleaseYear();
  //   console.log(`The movie was released in ${releaseYear}.`);

  //   const directorPromise = getAvengersDirector();
  //   console.log(`The movie was directed by ${director}.`);

  //   const [title, releaseYear, director] = await Promise.all([
  //     titlePromise,
  //     releaseYearPromise,
  //     directorPromise,
  //   ]);

  //   console.log(`The title of the movie is ${title}.`);
  //   console.log(`The movie was released in ${releaseYear}.`);
  //   console.log(`The movie was directed by ${director}.`);
}

getAvengersDetails();
