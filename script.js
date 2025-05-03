
let ticketsSold = 0;
const totalTickets = 10000;

function buyTicket() {
  if (ticketsSold < totalTickets) {
    ticketsSold++;
    updateProgress();
    window.open("https://payphone.page.simulada.com", "_blank");
  }
}

function updateProgress() {
  const percent = (ticketsSold / totalTickets) * 100;
  document.getElementById("progress-bar").style.width = percent + "%";
  document.getElementById("progress-text").innerText = ticketsSold + " / " + totalTickets + " boletos vendidos";
}
