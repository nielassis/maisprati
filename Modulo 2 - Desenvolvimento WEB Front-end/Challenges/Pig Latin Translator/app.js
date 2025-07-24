const form = document.getElementById("form");

function translate(str) {
  str = str.toLowerCase();
  var n = str.search(/[aeiuo]/);
  switch (n) {
    case 0:
      str = str + "way";
      break;
    case -1:
      str = str + "ay";
      break;
    default:
      str = str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
      break;
  }
  return str;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = document.getElementById("english").value;

  const words = text.split(/\s+/);

  const translatedWords = words.map(translate);

  const result = translatedWords.join(" ");
  document.getElementById("result").textContent = result;
});
