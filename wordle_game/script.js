const word_length = 5;
const max_attempts = 6;

const words = ["APPLE", "GRAPE", "MANGO", "BRAIN", "PLANT", "CHAIR"];

let target_word = words[Math.floor(Math.random() * words.length)];
let current_row = 0;
let game_over = false;

const board = document.getElementById("board");
const input = document.getElementById("guess_input");
const button = document.getElementById("submit_button");
const message = document.getElementById("message");
const restart_button = document.getElementById("restart_button");

let win_streak = localStorage.getItem("win_streak") || 0;

function create_board() {
  board.innerHTML = "";

  for (let i = 0; i < max_attempts; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < word_length; j++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");

      const span = document.createElement("span");
      tile.appendChild(span);

      row.appendChild(tile);
    }

    board.appendChild(row);
  }
}

create_board();

button.addEventListener("click", handle_guess);

function handle_guess() {
  if (game_over) return;

  let guess = input.value.toUpperCase().trim();

  if (guess.length !== word_length) {
    message.textContent = "Enter a 5-letter word!";
    return;
  }

  if (!/^[A-Z]+$/.test(guess)) {
    message.textContent = "Only alphabets allowed!";
    return;
  }

  displayGuess(guess);

  if (guess === target_word) {
    message.innerHTML = `You Win! <br/> Streak: ${++win_streak}`;
    localStorage.setItem("win_streak", win_streak);
    end_game();
    return;
  }

  current_row++;

  if (current_row === max_attempts) {
    message.textContent = `You Lose! Word was ${target_word}`;
    win_streak = 0;
    localStorage.setItem("win_streak", win_streak);
    end_game();
  }

  input.value = "";
}

// Display Guess + Coloring
function displayGuess(guess) {
  const row = board.children[current_row];
  const target_array = target_word.split("");
  const guess_array = guess.split("");

  for (let i = 0; i < word_length; i++) {
    const tile = row.children[i];
    const letter = tile.querySelector("span");

    letter.textContent = guess[i];

    if (guess[i] === target_word[i]) {
      tile.classList.add("correct");
      target_array[i] = null;
      guess_array[i] = null;
    }
  }

  // Second pass: present letters
  for (let i = 0; i < word_length; i++) {
    if (guess_array[i] === null) continue;

    const tile = row.children[i];

    if (target_array.includes(guess_array[i])) {
      tile.classList.add("present");
      target_array[target_array.indexOf(guess_array[i])] = null;
    } else {
      tile.classList.add("absent");
    }
  }
}

function end_game() {
  game_over = true;
  restart_button.classList.remove("hidden");
}

restart_button.addEventListener("click", () => {
  target_word = words[Math.floor(Math.random() * words.length)];
  current_row = 0;
  game_over = false;
  message.textContent = "";
  input.value = "";
  restart_button.classList.add("hidden");

  create_board();
});
