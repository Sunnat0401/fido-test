
  // DEMO_TEAM example
const DEMO_TEAM = [
  {
    name: "Shawn Stone",
    avatar :"https://randomuser.me/api/portraits/men/1.jpg" , 
    role: "UI/UX Designer",
    status: "Middle",
  },
  {
    name: "Randy Delgado",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    role: "UI/UX Designer",
    status: "Junior",
  },
  {
    name: "Emily Tyler",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    role: "Copywriter",
    status: "Middle",
  },
  {
    name: "Louis Castro",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    role: "Copywriter",
    status: "Senior",
  },
  {
    name: "Blake Silva",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    role: "IOS Developer",
    status: "Senior",
  },
  {
    name: "Joel Phillips",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    role: "UI/UX Designer",
    status: "Middle",
  },
  {
    name: "Wayne Marsh",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    role: "Copywriter",
    status: "Junior",
  },
  {
    name: "Oscar Holloway",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    role: "UI/UX Designer",
    status: "Middle",
  },
];
  const DEMO_PROJECTS = [
    {
      name: "Medical App (iOS native)",
      created: "Sep 12, 2020",
      priority: "Medium",
      tasks: 34,
      activeTasks: 13,
      assignees: [DEMO_TEAM[0], DEMO_TEAM[1], DEMO_TEAM[5]]
    },
    {
      name: "Food Delivery Service",
      created: "Sep 10, 2020",
      priority: "Medium",
      tasks: 50,
      activeTasks: 24,
      assignees: [DEMO_TEAM[2], DEMO_TEAM[4], DEMO_TEAM[6]]
    },
    {
      name: "Food Delivery Service",
      created: "May 28, 2020",
      priority: "Low",
      tasks: 23,
      activeTasks: 20,
      assignees: [DEMO_TEAM[3], DEMO_TEAM[7]]
    }
  ];
  
  const DEMO_EVENTS = [
    { title: "Presentation of the new department", icon: "📋", date: "Today | 6:00 PM", timeLeft: "2h" },
    { title: "Anna's Birthday", icon: "🎉", date: "Today | 5:00 PM", timeLeft: "2h" },
    { title: "Ray's Birthday", icon: "🎊", date: "Tomorrow | 2:00 PM", timeLeft: "1d 3h" }
  ];
  
  const DEMO_ACTIVITY = [
    { name: "Oscar Holloway", avatar: DEMO_TEAM[7].avatar, text: "Updated the status of Mind Map task to In Progress" },
    { name: "Oscar Holloway", avatar: DEMO_TEAM[7].avatar, text: "Attached files to the task" },
    { name: "Emily Tyler", avatar: DEMO_TEAM[2].avatar, text: "Updated the status of Mind Map task to In Progress" }
  ];
  
  export function DashboardPage(user) {
    const main = document.createElement('main');
    main.className = 'dashboard-main-content';
  
    // Calendar range state
    let currentRange = "Nov 16, 2020 - Dec 16, 2020";
    const mainHeader = document.createElement('div');
    mainHeader.className = 'main-header';
    mainHeader.innerHTML = `
      <h1>Dashboard</h1>
      <span class="main-date calendar-picker" id="calendarRange">
      
      <img src="assets/calendar.svg"/>
      ${currentRange}</span>
    `;
  
    const workload = document.createElement('section');
    workload.className = 'dashboard-workload';
    workload.innerHTML = `
      <div class="section-header">
        <h2>Workload</h2>
        <a href="#" class="section-viewall">View all <span>&#8250;</span></a>
      </div>
      <div class="workload-grid">
        ${DEMO_TEAM.map(member => `
          <div class="workload-member">
            <div class="workload-avatar-wrap">
              <img src="${member.avatar}" class="workload-avatar" alt="${member.name}" />
              <span class="workload-avatar-border border-${member.status.toLowerCase()}"></span>
            </div>
            <div class="workload-info">
              <span class="workload-name">${member.name}</span>
              <span class="workload-role">${member.role}</span>
              <span class="workload-status badge-${member.status.toLowerCase()}">${member.status}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    // Events section
    const events = document.createElement('section');
    events.className = 'dashboard-events card';
    events.innerHTML = `
      <div class="section-header">
        <h2>Nearest Events</h2>
        <a href="#events" class="section-viewall">View all</a>
      </div>
      <div class="events-list">
        ${DEMO_EVENTS.map(ev => `
          <div class="event-item card">
            <span class="event-icon">${ev.icon}</span>
            <div class="event-info">
              <span class="event-title">${ev.title}</span>
              <span class="event-date">${ev.date}</span>
            </div>
            <span class="event-timeleft">${ev.timeLeft}</span>
          </div>
        `).join('')}
      </div>
    `;
  
    // Projects section
    const projects = document.createElement('section');
    projects.className = 'dashboard-projects card';
    projects.innerHTML = `
      <div class="section-header">
        <h2>Projects</h2>
        <a href="#" class="section-viewall">View all</a>
      </div>
      <div class="projects-list">
        ${DEMO_PROJECTS.map(project => `
          <div class="project-item card">
            <div class="project-info">
              <span class="project-title">${project.name}</span>
              <span class="project-date">Created ${project.created}</span>
              <span class="project-priority badge badge-${project.priority.toLowerCase()}">${project.priority}</span>
            </div>
            <div class="project-meta">
              <span class="project-tasks">Tasks: ${project.tasks}</span>
              <span class="project-active">Active: ${project.activeTasks}</span>
              <span class="project-assignees">${project.assignees.map(a => `<img src="${a.avatar}" class="project-assignee-avatar" alt="${a.name}" title="${a.name}"/>`).join('')}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  
    // Activity section
    const activity = document.createElement('section');
    activity.className = 'dashboard-activity card';
    activity.innerHTML = `
      <div class="section-header">
        <h2>Activity Stream</h2>
        <a href="#" class="section-viewall">View all</a>
      </div>
      <div class="activity-list">
        ${DEMO_ACTIVITY.map(act => `
          <div class="activity-item">
            <img src="${act.avatar}" class="activity-avatar" alt="${act.name}" />
            <div class="activity-info">
              <span class="activity-name">${act.name}</span>
              <span class="activity-text">${act.text}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  
    // Layout grid
    const grid = document.createElement('div');
    grid.className = 'dashboard-grid';
    grid.appendChild(workload);
    grid.appendChild(events);
    grid.appendChild(projects);
    grid.appendChild(activity);
  
    main.appendChild(mainHeader);
    main.appendChild(grid);
    return main;
  }