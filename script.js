const main = document.querySelector('main>p');

//main is a countdown that will show the time until 19th december 8:30pm
const countdown = setInterval(() => {
  const now = new Date();
  const then = new Date("2022-12-19T20:30:00+0100");
  const secondsLeft = Math.round((then - now) / 1000);
  const days = Math.floor(secondsLeft / 86400);
  const hoursLeft = Math.floor((secondsLeft % 86400) / 3600);
  const minutesLeft = Math.floor((secondsLeft % 3600) / 60);
  const seconds = Math.floor(secondsLeft % 60);

  const display = `${days}J ${hoursLeft}H ${minutesLeft}M ${seconds}S`;
  main.textContent = display;


  countdown();
}, 1);

