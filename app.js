let fruits = [
   "Banana",
   "Apple",
   "Strawberry",
   "Avocado",
   "Pineapple",
   "Watermelon",
   "Mango",
   "Kiwi",
   "Orange",
   "Berry",
   "Blueberry",
   "Cherry",
   "Lemon",
   "Apricot",
   "Figs",
   "Plum",
   "Papaya",
   "Grapefruit",
   "Blackberry",
   "Guava",
   "Pomegranate",
   "Star Fruit",
   "Tangerine",
   "Jamun",
   "Peach",
   "Raspberry",
   "Cantaloupe",
   "Grapes",
   "Dragon Fruit",
   "Pear",
   "Coconut",
   "Lime",
   "Tamarind",
   "Jackfruit",
   "Lychee",
   "Mulberry",
   "Fig",
   "Passion Fruit",
   "Guava",
   "Cranberry",
   "Clementine",
   "Nectarine",
   "Mandarin",
   "Honeydew",
   "Date",
   "Pluot",
   "Soursop",
   "Salak",
   "Longan",
   "Durian",
   "Bing Cherry",
   "Elderberry",
   "Tamarillo",
   "Gooseberry",
   "Carambola",
   "Breadfruit",
   "Chico Fruit",
   "Cherries",
   "Pomelo",
   "Jambolan",
   "Marula",
   "Yunnan Hackberry",
   "Baobab Fruit",
   "Cherimoya",
   "Langsat",
   "Cempedak",
   "Jujube",
   "Rambutan",
   "Salacca",
   "Sapodilla",
   "White Mulberry",
   "Sugar Apple",
   "Buddha's Hand",
   "Medlar",
   "Redcurrant",
   "Fuyu Persimmon",
   "Sweet Lime",
   "Pawpaw",
   "Black Currant",
   "Kumquat",
   "Satsuma",
   "Prickly Pear",
   "Acerola Cherry",
   "Mamey",
   "Mangosteen",
   "Soursop",
   "Wintermelon",
   "Loquat",
   "Jatoba",
   "Ziziphus",
   "Bitter Melon",
   "Kiwifruit",
   "Duku",
   "Nance",
   "Bael",
   "Cactus Pear",
   "Papaw",
   "Yunnan Plum",
   "Lilly Pilly",
   "Mango Steen",
   "Galia Melon",
   "Pink Guava",
   "Taro Root",
   "Dragon's Tongue Bean",
   "Chayote",
   "Ceylon Gooseberry",
   "Mocambo",
   "Guavaberry",
   "Marang",
   "Gumbo Limbo",
   "Chilean Guava",
   "Mamoncillo",
   "Wampi",
   "Wintermelon",
   "Tupinambo",
   "Black Sapote",
   "White Sapote",
   "Pineberry",
   "Tamarind Plum",
   "Tocoba",
   "Fijian Longan",
   "Chempedak",
   "Pink Lady Apple",
   "Chilean Wineberry",
];

let display = document.getElementById("display");

function toDisplay(input) {
   display.value = input;
}

function findByLetter(alpha) {
   let fruitLetter = [];
   let fruitsOn = "";
   let flag = false;

   for (i = 0; i < fruits.length; i++) {
      if (fruits[i][0].toUpperCase() === alpha.toUpperCase()) {
         fruitLetter.push(fruits[i]);
         flag = true;
      }
   }

   if (flag) {
      fruitsOn = fruitLetter[Math.floor(Math.random() * fruitLetter.length)];
      toDisplay(fruitsOn);

      // let utterance = new SpeechSynthesisUtterance(fruitsOn);
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(fruitsOn));
   } else {
      toDisplay("Fruits not found with starting letter " + alpha);
      window.speechSynthesis.speak(
         new SpeechSynthesisUtterance(
            "Fruits not found with starting letter " + alpha,
         ),
      );
   }
}
