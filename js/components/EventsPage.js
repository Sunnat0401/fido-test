// Demo event list (asosiy voqealar ro‘yxati)
const EVENTS_LIST = [
    {
      title: "Presentation of the new department",
      icon: "🏢",
      color: "#326bfa",
      date: "Today | 6:00 PM",
      timeleft: "4h",
      trend: "up"
    },
    {
      title: "Meeting with Development Team",
      icon: "📝",
      color: "#fdb13d",
      date: "Tomorrow | 5:00 PM",
      timeleft: "4h",
      trend: "up"
    },
    {
      title: "Meeting with CEO",
      icon: "🏛️",
      color: "#326bfa",
      date: "Sep 14 | 5:00 PM",
      timeleft: "1h",
      trend: "down"
    },
    {
      title: "Lucas's Birthday",
      icon: "🎂",
      color: "#b083f8",
      date: "Sep 29 | 5:30 PM",
      timeleft: "2h",
      trend: "down"
    },
    {
      title: "Anna's Birthday",
      icon: "🎉",
      color: "#b083f8",
      date: "Today | 5:00 PM",
      timeleft: "2h",
      trend: "down"
    },
    {
      title: "Ray's Birthday",
      icon: "🎊",
      color: "#b083f8",
      date: "Tomorrow | 2:00 PM",
      timeleft: "1h 30m",
      trend: "down"
    },
    {
      title: "Movie night (Tenet)",
      icon: "🎬",
      color: "#326bfa",
      date: "Sep 15 | 9:00 PM",
      timeleft: "3h",
      trend: "down"
    },
    {
      title: "Meeting with CTO",
      icon: "🧑‍💻",
      color: "#fdb13d",
      date: "Sep 30 | 12:00",
      timeleft: "1h",
      trend: "up"
    }
  ];
  
  // EventsPage funksiyasi DOM Node qaytaradi!
  export function EventsPage(user) {
    const main = document.createElement('main');
    main.className = 'main-content';
    main.innerHTML = `
      <div class="main-header">
        <a href="#dashboard" class="back-link">&lt; Back to Dashboard</a>
        <h1>Nearest Events</h1>
        <button class="add-event-btn" id="addEventBtn">+ Add Event</button>
      </div>
    `;
  
    const grid = document.createElement('div');
    grid.className = 'events-grid';
    EVENTS_LIST.forEach(ev => {
      const card = document.createElement('div');
      card.className = 'event-item card';
      card.innerHTML = `
        <span class="event-icon" style="color:${ev.color}">${ev.icon}</span>
        <div class="event-info">
          <span class="event-title">${ev.title}</span>
          <span class="event-date">${ev.date}</span>
        </div>
        <span class="event-timeleft">${ev.timeleft}</span>
        <span class="event-trend trend-${ev.trend}">${ev.trend === "up" ? "↑" : "↓"}</span>
      `;
      grid.appendChild(card);
    });
    main.appendChild(grid);
  
    // Modal ochish uchun (add event) event qo'yish
    setTimeout(() => {
      const btn = main.querySelector('#addEventBtn');
      if (btn) btn.onclick = () => {
        // add event modal ochish uchun funksiya chaqiring
        // misol uchun: openAddEventModal();
        alert("Add event modal ochiladi (demo)");
      };
    }, 0);
  
    return main;
  }