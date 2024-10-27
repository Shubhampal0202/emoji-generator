let access_key = "Your access_key";

const main = document.getElementsByClassName("main");
let btn;
let emojiDesc;

let result;

(async function fetchApi() {
  main[0].innerHTML = `<div class="loader"></div>`;
  try {
    const response = await fetch(
      `https://emoji-api.com/emojis?access_key=${access_key}`
    );
    result = await response.json();
    main[0].innerHTML = `<h1>Random Emoji Generator</h1>
      <div class="button-container"><button id="btn">Click</button></div>
      <p id="emoji-desc" >hello</p>`;
    btn = document.getElementById("btn");
    emojiDesc = document.getElementById("emoji-desc");

    btn.addEventListener("click", btnClick);
  } catch (err) {
    alert(err.message);
  }
})();

function btnClick() {
  if (!result) {
    return;
  }
  emojiDesc.style.visibility = "visible";
  const randomNumber = Math.floor(Math.random() * result.length);
  btn.innerHTML = result[randomNumber].character;
  let desc = result[randomNumber].unicodeName.split(".");
  desc = desc[1].substring(1, desc[1].length);
  emojiDesc.innerHTML = desc;
}
