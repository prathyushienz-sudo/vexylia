let events = JSON.parse(localStorage.getItem("events")) || [];

// ================= DISPLAY EVENTS =================
function displayEvents() {

    let eventList = document.getElementById("eventList");
    eventList.innerHTML = "";

    // ⭐ Sort events by nearest date
    events.sort((a, b) => new Date(a.date) - new Date(b.date));

    events.forEach(function(event) {

        let div = document.createElement("div");

        // ⭐ FIXED live date format
        let today = new Date().toISOString().split("T")[0];
        let liveBadge = "";

        if (event.date === today) {
            liveBadge = `<span class="live-badge">🔴 Live Today</span>`;
        }

        div.innerHTML = `
        <div class="event-card">

            <img src="${event.poster || ''}" class="event-img"
                 onclick="openPoster('${event.poster || ''}')">

            <div class="event-content">
                <h3>${event.name} ${liveBadge}</h3>
                <p class="event-date">📅 ${event.date}</p>
                <p>🏷 ${event.category}</p>
                <p>${event.description || ''}</p>

                <button onclick="registerEvent('${event.name}')">
                    Register
                </button>

                ${
                    localStorage.getItem("role") === "club" &&
                    localStorage.getItem("username") === event.postedBy
                    ? `<button onclick="deleteEvent(${events.indexOf(event)})"
                        style="background:red;margin-left:10px;">
                        Delete
                       </button>`
                    : ""
                }

                <p class="posted">Posted by ${event.postedBy}</p>
            </div>

        </div>
        `;

        eventList.appendChild(div);
    });
}

// ================= ADD EVENT =================
function addEvent() {

    let name = document.getElementById("eventName").value;
    let date = document.getElementById("eventDate").value;
    let category = document.getElementById("category").value;
    let user = localStorage.getItem("username");
    let posterFile = document.getElementById("poster").files[0];
    let description = document.getElementById("description").value;

    if (name === "" || date === "") {
        alert("Please fill all details");
        return;
    }

    if (!posterFile) {
        alert("Please upload poster");
        return;
    }

    let reader = new FileReader();

    reader.onload = function () {

        let newEvent = {
            name: name,
            date: date,
            category: category,
            description: description,
            postedBy: user,
            poster: reader.result
        };

        events.push(newEvent);
        localStorage.setItem("events", JSON.stringify(events));

        displayEvents();
        checkNotifications(); // ⭐ update bell
    };

    reader.readAsDataURL(posterFile);
}

// ================= SEARCH EVENTS =================
function searchEvents() {

    let nameSearch = document.getElementById("searchName").value.toLowerCase();
    let dateSearch = document.getElementById("searchDate").value;

    let filteredEvents = events.filter(function(event) {

        let matchName = event.name.toLowerCase().includes(nameSearch);
        let matchDate = dateSearch === "" || event.date === dateSearch;

        return matchName && matchDate;
    });

    displayFilteredEvents(filteredEvents);
}

// ================= DISPLAY FILTERED =================
function displayFilteredEvents(filteredEvents) {

    let eventList = document.getElementById("eventList");
    eventList.innerHTML = "";

    filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

    filteredEvents.forEach(function(event) {

        let div = document.createElement("div");

        div.innerHTML = `
        <div class="event-card">
            <img src="${event.poster || ''}" class="event-img">

            <div class="event-content">
                <h3>${event.name}</h3>
                <p class="event-date">📅 ${event.date}</p>
                <p>🏷 ${event.category}</p>
                <p class="posted">Posted by ${event.postedBy}</p>
            </div>
        </div>
        `;

        eventList.appendChild(div);
    });
}

// ================= DELETE EVENT =================
function deleteEvent(index) {
    if (confirm("Are you sure you want to delete this event?")) {
        events.splice(index, 1);
        localStorage.setItem("events", JSON.stringify(events));
        displayEvents();
        checkNotifications(); // ⭐ update bell
    }
}

// ================= POSTER VIEW =================
function openPoster(imageSrc) {
    let newWindow = window.open("");
    newWindow.document.write("<img src='" + imageSrc + "' style='width:100%'>");
}

// ================= REGISTER =================
function registerEvent(eventName) {
    alert("Successfully Registered for " + eventName);
}

// ================= PREF PANEL TOGGLE =================
function togglePrefBox() {
    let panel = document.getElementById("prefPanel");
    if (!panel) return;

    panel.style.right = (panel.style.right === "0px") ? "-260px" : "0px";
}

// ================= SAVE PREFERENCES =================
function savePreferences() {

    let checked = document.querySelectorAll(".pref:checked");
    let prefs = [];

    checked.forEach(function(box) {
        prefs.push(box.value);
    });

    localStorage.setItem("preferences", JSON.stringify(prefs));
    alert("Preferences saved!");
    checkNotifications();
}

// ================= NOTIFICATION COUNT =================
function checkNotifications() {

    let prefs = JSON.parse(localStorage.getItem("preferences")) || [];
    let count = 0;

    events.forEach(function(event) {
        if (prefs.includes(event.category)) {
            count++;
        }
    });

    let bell = document.getElementById("notifyCount");
    if (bell) bell.innerText = count;
}

// ================= NOTIFICATION POPUP =================
function toggleNotificationBox() {

    let popup = document.getElementById("notifyPopup");
    let list = document.getElementById("notifyList");

    if (!popup || !list) return;

    let prefs = JSON.parse(localStorage.getItem("preferences")) || [];

    // toggle
    if (popup.style.display === "block") {
        popup.style.display = "none";
        return;
    }

    list.innerHTML = "";

    events.forEach(function(event) {
        if (prefs.includes(event.category)) {

            let div = document.createElement("div");
            div.className = "notify-item";
            div.innerHTML = `
    <strong>${event.name}</strong><br>
    <small>${event.category}</small>
`;

div.style.cursor = "pointer";

div.onclick = function() {
    openPoster(event.poster);
};
            list.appendChild(div);
        }
    });

    // ⭐ empty message
    if (list.innerHTML === "") {
        list.innerHTML = "<p style='font-size:13px;'>No matching events</p>";
    }

    popup.style.display = "block";
}

// ================= ROLE CONTROL =================
let role = localStorage.getItem("role");

let clubSec = document.getElementById("clubSection");
let studentSec = document.getElementById("studentSection");

if (role === "student" && clubSec) clubSec.style.display = "none";
if (role === "club" && studentSec) studentSec.style.display = "none";

// ================= INITIAL LOAD =================
displayEvents();
checkNotifications();
    