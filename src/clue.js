// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
      name: "mrGreen",
      firstName: "Jacob",
      lastName: "Green",
      occupation: "Entrepreneur",
      age: 45,
      description: "He has a lot of connections",
      image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
      color: "green"
    },
    {
      name: "drOrchid",
      firstName: "Doctor",
      lastName: "Orchid",
      occupation: "Scientist",
      age: 26,
      description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
      image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
      color: "white"
    },
    {
      name: "profPlum",
      firstName: "Victor",
      lastName: "Plum",
      occupation: "Designer",
      age: 22,
      description: "Billionaire video game designer",
      image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
      color: "purple"
    },
    {
      name: "missScarlet",
      firstName: "Kasandra",
      lastName: "Scarlet",
      occupation: "Actor",
      age: 31,
      description: "She is an A-list movie star with a dark past video game designer",
      image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
      color: "red"
    },
    {
      name: "mrsPeacock",
      firstName: "Eleanor",
      lastName: "Peacock",
      occupation: "Socialité",
      age: 36,
      description: "She is from a wealthy family and uses her status and money to earn popularity",
      image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
      color: "blue"
    },
    {
      name: "mrMustard",
      firstName: "Jack",
      lastName: "Mustard",
      occupation: "Retired Football player",
      age: 62,
      description: "He is a former football player who tries to get by on his former glory",
      image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
      color: "yellow"
    }
  ];
  

// Rooms Array

const roomsArray = [
    {name: "Dining Room"},
    {name: "Conservatory"},
    {name: "Kitchen"},
    {name: "Study"},
    {name: "Library"},
    {name: "Billiard Room"},
    {name: "Lounge"},
    {name: "Ballroom"},
    {name: "Hall"},
    {name: "Spa"},
    {name: "Living Room"},
    {name: "Observatory"},
    {name: "Theater"},
    {name: "Guest House"},
    {name: "Patio"}
];

// Weapons Array

const weaponsArray = [
    {name: "rope",
    weight:10},
    {name: "knife",
    weight:8},
    {name: "candlestick",
    weight:2},
    {name: "dumbbell",
    weight:30},
    {name: "poison",
    weight:2},
    {name: "axe",
    weight:15},
    {name: "bat",
    weight:13}, 
    {name: "trophy",
    weight:25},
    {name: "pistol",
    weight:20}
  ];

// ITERATION 2

let options = [weaponsArray,roomsArray,suspectsArray]

function selectRandom(weaponsArray) {
  if (weaponsArray.length===0){
    return undefined;}
  else{
    const randomNumber = Math.floor(Math.random() * weaponsArray.length);
    return weaponsArray[randomNumber]
  }
}

function selectRandom(roomsArray) {
  if (roomsArray.length===0){
    return undefined;}
  else{
    const randomNumber = Math.floor(Math.random() * roomsArray.length);
    return roomsArray[randomNumber]
  }
}

function selectRandom(suspectsArray) {
  if (suspectsArray.length===0){
    return undefined;}
  else{
    const randomNumber = Math.floor(Math.random() * suspectsArray.length);
    return suspectsArray[randomNumber]
  }
}

/*function selectRandom() {
  if (options.length===0){
    return undefined;}
  else{
    const randomNumber = Math.floor(Math.random() * options.length);
    const randomName = Math.floor(Math.random() * options[randomNumber].length)
    return options[randomNumber][randomName]
  }
}
*/

let cards = {};

function pickMystery() {
  cards.suspect = selectRandom(suspectsArray);
  cards.weapon = selectRandom(weaponsArray);
  cards.room = selectRandom(roomsArray);
  return cards;
}


// ITERATION 3

let envelope = pickMystery()

function revealMystery(envelope){
  let firstName = envelope.suspect.firstName;
  let lastName = envelope.suspect.lastName;
  let weapon = envelope.weapon.name;
  let room = envelope.room.name;

  return `${firstName} ${lastName} killed Mr. Boddy using the ${weapon} in the ${room}!`;

}