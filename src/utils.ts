const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
  "S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j",
  "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1",
  "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&",
  "*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let passwordLength = {
  short: 12,
  long: 15,
};

function getRandomCharacter() {
  const index = Math.floor(Math.random() * characters.length);
  return characters[index];
}

export function generatePassword() {
  let shortPassword = "";
  for (let i = 0; i < passwordLength.short; i++) {
    shortPassword += getRandomCharacter();
  }

  let longPassword = "";
  for (let i = 0; i < passwordLength.long; i++) {
    longPassword += getRandomCharacter();
  }
  return { shortPassword, longPassword };
}
