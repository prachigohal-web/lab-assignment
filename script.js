const eventList = document.getElementById("eventList");

function addEvent() {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const desc = document.getElementById("desc").value;

  if (!title || !date) {
    alert("Please enter title and date");
    return;
  }

  removeEmpty();

  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${title}</strong> (${category})<br>
    ${date}<br>
    ${desc}
  `;
  eventList.appendChild(li);

  clearInputs();
}

function clearInputs() {
  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("desc").value = "";
}

function clearEvents() {
  eventList.innerHTML = `<p class="empty">No events yet. Add your first event!</p>`;
}

function addSample() {
  clearEvents();
  const samples = [
    "AI Conference",
    "Web Workshop",
    "Team Meeting"
  ];

  removeEmpty();

  samples.forEach(e => {
    const li = document.createElement("li");
    li.innerText = e;
    eventList.appendChild(li);
  });
}

function removeEmpty() {
  const empty = document.querySelector(".empty");
  if (empty) empty.remove();
}


document.addEventListener("keydown", (e) => {
  document.getElementById("keyPress").innerText =
    "You pressed: " + e.key;
});
