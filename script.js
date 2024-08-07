const jokes = [
   "Why don't programmers like nature? It has too many bugs!","Why did the developer go broke? Because he used up all his cache!",
   "How many software engineers does it take to change a light bulb? None, that’s a hardware problem!","Why did the computer go to the doctor? It had a virus!","Why did the SQL database break up with the NoSQL database? It found out it couldn’t commit!",
   "Why don’t scientists trust atoms? Because they make up everything!","Why don’t skeletons fight each other? They don’t have the guts!"
  ];
  
  document.getElementById('getJoke').addEventListener('click', fetchJoke);
  
  function fetchJoke() {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById('joke').innerText = joke;
  }
  