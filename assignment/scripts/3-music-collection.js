console.log('***** Music Collection *****')

// Update the `3-music-collection.js` file to do the following:

// > While working through the features below, make sure to commit after you complete a task! Your commit message should reflect what you added or changed since the previous commit.

// ### Required Features

// - Create a variable `collection` that starts as an empty array.

let collection = [];

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

function addToCollection(titleName, artistName, yearPublished) {
    let newObject = {
        title: titleName,
        artist: artistName,
        year: yearPublished
    }
    collection.push(newObject);
    return newObject;
}


// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

console.log(addToCollection('evermore', 'Taylor Swift', 2020));
console.log(addToCollection('Midnights', 'Taylor Swift', 2022));
console.log(addToCollection('folklore', 'Taylor Swift', 2020));
console.log(addToCollection('Endless Summer', 'Miley Cyrus', 2023));
console.log(addToCollection('Lemonade', 'Beyonce', 2016));
console.log(addToCollection('Happier Than Ever', 'Billie Eilish', 2021));
console.log(collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

function showCollection(array) {
    console.log(array.length);
    for(let obj of array) {
        console.log(`${obj.title} by ${obj.artist}, published in ${obj.year}`)
    }
}

// - Test the `showCollection` function.

showCollection(collection);

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

function findByArtist(newArtist) {
    let artistArray = [];
    for (let obj of collection) {
        if(newArtist === obj.artist){
            artistArray.push(obj);
        }
    }
    return artistArray;
}

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

console.log(findByArtist('Beyonce'));
console.log(findByArtist('Taylor Swift'));
console.log(findByArtist('Selena Gomez'));

// > When testing your functions, write all tests in the JavaScript file!


// ### Stretch goals

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.


let searchObject = {
    artist: 'Ray Charles',
    year: 1957
}

let taylorSwift = {
    artist: 'Taylor Swift',
    year: 2020
}

function search(searchCriteriaObject) {
    if(arguments.length < 1) {
        return collection;
    }
    let searchArray = [];
    for(let obj of collection) {
        if(searchCriteriaObject.artist === obj.artist && searchCriteriaObject.year === obj.year) {
            searchArray.push(searchCriteriaObject)
        }
    }
    return searchArray;
}

console.log(search(taylorSwift));
console.log(search(searchObject));
console.log(search());

// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria. 
//     - IF the search object has a `trackName` property, only search for that, ignoring any `artist` or `year` properties.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```

// > Make sure to test all your code!

//This is as far as I got, I am not sure if I am understand the intructions correctly

function addToCollection(titleName, artistName, yearPublished, tracksArray) {
    let newObject = {
        title: titleName,
        artist: artistName,
        year: yearPublished,
        tracks: [
            {
                trackName: tracksArray.trackName,
                trackDuration: tracksArray.trackDuration
            }
        ]
    }
    collection.push(newObject);
    return newObject;
}