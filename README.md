# Project Idea

This project is an attempt to create a clone of the Wordle game. The player has limited attempts (6 attempts) to guess a hidden 5-letter word, receiving feedback after each guess through different colored tiles.

Demo Video: https://drive.google.com/file/d/1Q-A-hC-9McONtO4ORMhKXqqJtJJvNO6B/view?usp=sharing

---

# Features

- 6 attempts to guess the word  
- Win or Lose check and output  
- Option to Restart  
- Win streak tracking using localStorage  

---

# Rules and What I learned

You enter a 5 letter word. The game changes the colors of the tiles depending on whether the letter is present in the word or not.  
If a letter is present and is in its correct position, tile becomes GREEN.  
If a letter is present but is not in its correct position, tile becomes YELLOW.  
If a letter is not present, the tile stays GREY.  
This way, a user can get to know whether or not they're guessing correct or not.

I learned DOM manipulation using JavaScript.  
I also learnt some new CSS features like 'hover'.  
I also got good exposure to using Event Listeners.  
Most importantly, I learnt how and when to use localStorage.
