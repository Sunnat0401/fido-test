// import { renderSignIn } from './components/SignInForm.js';
// // import { renderOnboardingStep1 } from './components/OnboardingStep1.js';
// import { getAuthState, clearOnboarding } from './storage.js';
// import {renderOnboardingStep1} from "./components/OnboardingStep1.js"
// import { renderOnboardingStep2 } from './components/OnboardingStep2.js';
// import { renderOnboardingStep3 } from './components/onBoardingStep3.js';
// import { renderOnboardingStep4 } from './components/onBoarddingStep4.js';
// import { renderSuccess } from './components/succes.js';

// function renderMain(container) {
//     container.innerHTML = `
//       <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;">
//         <h1>Welcome to Woorkroom!</h1>
//         <p>You are successfully logged in.</p>
//       </div>
//     `;
// }

// function router() {
//     const app = document.getElementById('app');
//     let hash = window.location.hash.replace('#', '');
//     if (!hash) hash = 'sign-in';
//     app.innerHTML = '';
//     if (hash === 'sign-in') {
//         clearOnboarding();
//         renderSignIn(app);
//     } else if (hash === 'onboarding-1') {
//         renderOnboardingStep1(app);
//     } else if (hash === 'onboarding-2') {
//         renderOnboardingStep2(app); 
//     } 
//     else if (hash === 'onboarding-3') {
//         renderOnboardingStep3(app); 
//     }
//     else if (hash === 'onboarding-4') {
//         renderOnboardingStep4(app); 
//     }
//     else if (hash === "success") {
//         renderSuccess(app);
//       }
//     else if (hash === 'main') {
//         renderMain(app);
//     }
// }

// window.addEventListener('hashchange', router);
// window.addEventListener('DOMContentLoaded', router);

// main.js

// import { renderSignIn } from './components/SignInForm.js';
// import { getAuthState, clearOnboarding } from './storage.js';
// import { renderOnboardingStep1 } from "./components/OnboardingStep1.js";
// import { renderOnboardingStep2 } from './components/OnboardingStep2.js';
// import { renderOnboardingStep3 } from './components/onBoardingStep3.js';
// import { renderOnboardingStep4 } from './components/onBoarddingStep4.js';
// import { renderSuccess } from './components/Succes.js';

// /* --- Dashboard Layout Components --- */
// function Sidebar(selected) {
//   const sidebar = document.createElement('aside');
//   sidebar.className = 'sidebar';
//   sidebar.innerHTML = `
//     <div class="sidebar-header">
//       <div class="sidebar-logo"><span class="sidebar-logo-img">🎯</span></div>
//     </div>
//     <div class="sidebar-search">
//       <input type="text" placeholder="Search" class="sidebar-search-input" />
//     </div>
//     <nav class="sidebar-nav">
//       ${[
//         { name: "Dashboard", icon: "🏠", hash: "dashboard" },
//         { name: "Projects", icon: "📁", hash: "projects" },
//         { name: "Calendar", icon: "🗓️", hash: "calendar" },
//         { name: "Vacations", icon: "🌴", hash: "vacations" },
//         { name: "Employees", icon: "👥", hash: "employees" },
//         { name: "Messenger", icon: "💬", hash: "messenger" },
//         { name: "Info Portal", icon: "🛈", hash: "info-portal" }
//       ].map(item => `
//         <a href="#${item.hash}" class="sidebar-link${selected === item.hash ? ' active' : ''}">
//           <span class="sidebar-icon">${item.icon}</span>
//           <span class="sidebar-text">${item.name}</span>
//         </a>
//       `).join('')}
//     </nav>
//     <div class="sidebar-footer">
//       <div class="sidebar-support">
//         <button class="sidebar-support-btn" id="supportBtn">Support</button>
//       </div>
//       <a href="#sign-in" class="sidebar-logout">
//         <span>Logout</span>
//       </a>
//     </div>
//   `;
//   setTimeout(() => {
//     const btn = sidebar.querySelector('#supportBtn');
//     if (btn) btn.onclick = () => openSupportModal();
//   }, 0);
//   return sidebar;
// }

// function Topbar(user) {
//   const topbar = document.createElement('header');
//   topbar.className = 'topbar';
//   topbar.innerHTML = `
//     <div class="topbar-left"></div>
//     <div class="topbar-center">
//       <input type="text" class="topbar-search" placeholder="Search" />
//     </div>
//     <div class="topbar-right">
//       <span class="topbar-user">
//         <img src="${user.avatar}" class="topbar-avatar" alt="${user.name}" />
//         <span class="topbar-username">${user.name}</span>
//         <span class="topbar-user-icon">🔔</span>
//         <span class="topbar-user-icon">⚙️</span>
//       </span>
//     </div>
//   `;
//   return topbar;
// }

// /* --- Demo Data for Dashboard --- */
// const DEMO_TEAM = [
//   { name: "Shawn Stone", role: "UI/UX Designer", status: "Middle", avatar: "https://randomuser.me/api/portraits/men/11.jpg" },
//   { name: "Randy Delgado", role: "UI/UX Designer", status: "Middle", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
//   { name: "Emily Tyler", role: "Copywriter", status: "Junior", avatar: "https://randomuser.me/api/portraits/women/21.jpg" },
//   { name: "Louis Castro", role: "Copywriter", status: "Middle", avatar: "https://randomuser.me/api/portraits/men/13.jpg" },
//   { name: "Blake Silva", role: "iOS Developer", status: "Senior", avatar: "https://randomuser.me/api/portraits/men/14.jpg" },
//   { name: "Joel Phillips", role: "UI/UX Designer", status: "Senior", avatar: "https://randomuser.me/api/portraits/men/15.jpg" },
//   { name: "Wayne Marsh", role: "Copywriter", status: "Middle", avatar: "https://randomuser.me/api/portraits/men/16.jpg" },
//   { name: "Oscar Holloway", role: "UI/UX Designer", status: "Middle", avatar: "https://randomuser.me/api/portraits/men/17.jpg" }
// ];

// const DEMO_PROJECTS = [
//   {
//     name: "Medical App (iOS native)",
//     created: "Sep 12, 2020",
//     priority: "Medium",
//     tasks: 34,
//     activeTasks: 13,
//     assignees: [DEMO_TEAM[0], DEMO_TEAM[1], DEMO_TEAM[5]]
//   },
//   {
//     name: "Food Delivery Service",
//     created: "Sep 10, 2020",
//     priority: "Medium",
//     tasks: 50,
//     activeTasks: 24,
//     assignees: [DEMO_TEAM[2], DEMO_TEAM[4], DEMO_TEAM[6]]
//   },
//   {
//     name: "Food Delivery Service",
//     created: "May 28, 2020",
//     priority: "Low",
//     tasks: 23,
//     activeTasks: 20,
//     assignees: [DEMO_TEAM[3], DEMO_TEAM[7]]
//   }
// ];

// const DEMO_EVENTS = [
//   { title: "Presentation of the new department", icon: "📋", date: "Today | 6:00 PM", timeLeft: "2h" },
//   { title: "Anna's Birthday", icon: "🎉", date: "Today | 5:00 PM", timeLeft: "2h" },
//   { title: "Ray's Birthday", icon: "🎊", date: "Tomorrow | 2:00 PM", timeLeft: "1d 3h" }
// ];

// const DEMO_ACTIVITY = [
//   { name: "Oscar Holloway", avatar: DEMO_TEAM[7].avatar, text: "Updated the status of Mind Map task to In Progress" },
//   { name: "Oscar Holloway", avatar: DEMO_TEAM[7].avatar, text: "Attached files to the task" },
//   { name: "Emily Tyler", avatar: DEMO_TEAM[2].avatar, text: "Updated the status of Mind Map task to In Progress" }
// ];

// const EVENTS_LIST = [
//   {
//     title: "Presentation of the new department",
//     icon: "🏢",
//     color: "#326bfa",
//     date: "Today | 6:00 PM",
//     timeleft: "4h",
//     trend: "up"
//   },
//   {
//     title: "Meeting with Development Team",
//     icon: "📝",
//     color: "#fdb13d",
//     date: "Tomorrow | 5:00 PM",
//     timeleft: "4h",
//     trend: "up"
//   },
//   {
//     title: "Meeting with CEO",
//     icon: "🏛️",
//     color: "#326bfa",
//     date: "Sep 14 | 5:00 PM",
//     timeleft: "1h",
//     trend: "down"
//   },
//   {
//     title: "Lucas's Birthday",
//     icon: "🎂",
//     color: "#b083f8",
//     date: "Sep 29 | 5:30 PM",
//     timeleft: "2h",
//     trend: "down"
//   },
//   {
//     title: "Anna's Birthday",
//     icon: "🎉",
//     color: "#b083f8",
//     date: "Today | 5:00 PM",
//     timeleft: "2h",
//     trend: "down"
//   },
//   {
//     title: "Ray's Birthday",
//     icon: "🎊",
//     color: "#b083f8",
//     date: "Tomorrow | 2:00 PM",
//     timeleft: "1h 30m",
//     trend: "down"
//   },
//   {
//     title: "Movie night (Tenet)",
//     icon: "🎬",
//     color: "#326bfa",
//     date: "Sep 15 | 9:00 PM",
//     timeleft: "3h",
//     trend: "down"
//   },
//   {
//     title: "Meeting with CTO",
//     icon: "🧑‍💻",
//     color: "#fdb13d",
//     date: "Sep 30 | 12:00",
//     timeleft: "1h",
//     trend: "up"
//   }
// ];

// /* --- Calendar Modal --- */
// function openCalendarModal(currentRange = "Nov 16, 2020 - Dec 16, 2020", onSelect) {
//   closeModal();
//   const modal = document.createElement('div');
//   modal.className = 'modal-overlay calendar-modal-overlay';
//   modal.innerHTML = `
//     <div class="modal calendar-modal">
//       <button class="modal-close" id="closeCalendarModal">&times;</button>
//       <div class="modal-body">
//         <h2 class="calendar-modal-title">Select date range</h2>
//         <form class="calendar-modal-form">
//           <div class="calendar-form-group">
//             <label>Start date</label>
//             <input type="date" id="calendar-start" required />
//           </div>
//           <div class="calendar-form-group">
//             <label>End date</label>
//             <input type="date" id="calendar-end" required />
//           </div>
//           <button type="submit" class="calendar-modal-btn">Apply</button>
//         </form>
//       </div>
//     </div>
//   `;
//   document.body.appendChild(modal);
//   modal.querySelector('.modal-close').onclick = closeModal;

//   // Pre-fill dates from currentRange
//   const [start, end] = currentRange.split(' - ').map(d => {
//     let parts = d.replace(',', '').split(' ');
//     let month = {
//       Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
//       Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
//     }[parts[0]];
//     let day = parts[1].padStart(2, '0');
//     let year = parts[2];
//     return `${year}-${month}-${day}`;
//   });

//   modal.querySelector('#calendar-start').value = start || '';
//   modal.querySelector('#calendar-end').value = end || '';

//   modal.querySelector('.calendar-modal-form').onsubmit = function(e) {
//     e.preventDefault();
//     const startVal = modal.querySelector('#calendar-start').value;
//     const endVal = modal.querySelector('#calendar-end').value;
//     if (startVal && endVal) {
//       function format(val) {
//         const date = new Date(val);
//         const map = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//         return `${map[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
//       }
//       let range = `${format(startVal)} - ${format(endVal)}`;
//       closeModal();
//       if (onSelect) onSelect(range);
//     }
//   };
// }

// /* --- Dashboard Main Page --- */
// function DashboardPage(user) {
//   const main = document.createElement('main');
//   main.className = 'main-content';

//   // Calendar range state
//   let currentRange = "Nov 16, 2020 - Dec 16, 2020";
//   const mainHeader = document.createElement('div');
//   mainHeader.className = 'main-header';
//   mainHeader.innerHTML = `
//     <h1>Dashboard</h1>
//     <span class="main-date calendar-picker" id="calendarRange">${currentRange}</span>
//   `;
//   mainHeader.querySelector('#calendarRange').onclick = function() {
//     openCalendarModal(currentRange, function(newRange) {
//       currentRange = newRange;
//       mainHeader.querySelector('#calendarRange').textContent = newRange;
//     });
//   };

//   // Workload
//   const workload = document.createElement('section');
//   workload.className = 'dashboard-workload card';
//   workload.innerHTML = `
//     <div class="section-header">
//       <h2>Workload</h2>
//       <a href="#" class="section-viewall">View all</a>
//     </div>
//     <div class="workload-grid">
//       ${DEMO_TEAM.map(member => `
//         <div class="workload-member card">
//           <img src="${member.avatar}" class="workload-avatar" alt="${member.name}" />
//           <div class="workload-info">
//             <span class="workload-name">${member.name}</span>
//             <span class="workload-role">${member.role}</span>
//             <span class="workload-status badge badge-${member.status.toLowerCase()}">${member.status}</span>
//           </div>
//         </div>
//       `).join('')}
//     </div>
//   `;

//   // Nearest Events
//   const events = document.createElement('section');
//   events.className = 'dashboard-events card';
//   events.innerHTML = `
//     <div class="section-header">
//       <h2>Nearest Events</h2>
//       <a href="#events" class="section-viewall">View all</a>
//     </div>
//     <div class="events-list">
//       ${DEMO_EVENTS.map(ev => `
//         <div class="event-item card">
//           <span class="event-icon">${ev.icon}</span>
//           <div class="event-info">
//             <span class="event-title">${ev.title}</span>
//             <span class="event-date">${ev.date}</span>
//           </div>
//           <span class="event-timeleft">${ev.timeLeft}</span>
//         </div>
//       `).join('')}
//     </div>
//   `;

//   // Projects
//   const projects = document.createElement('section');
//   projects.className = 'dashboard-projects card';
//   projects.innerHTML = `
//     <div class="section-header">
//       <h2>Projects</h2>
//       <a href="#" class="section-viewall">View all</a>
//     </div>
//     <div class="projects-list">
//       ${DEMO_PROJECTS.map(project => `
//         <div class="project-item card">
//           <div class="project-info">
//             <span class="project-title">${project.name}</span>
//             <span class="project-date">Created ${project.created}</span>
//             <span class="project-priority badge badge-${project.priority.toLowerCase()}">${project.priority}</span>
//           </div>
//           <div class="project-meta">
//             <span class="project-tasks">Tasks: ${project.tasks}</span>
//             <span class="project-active">Active: ${project.activeTasks}</span>
//             <span class="project-assignees">${project.assignees.map(a => `<img src="${a.avatar}" class="project-assignee-avatar" alt="${a.name}" title="${a.name}"/>`).join('')}</span>
//           </div>
//         </div>
//       `).join('')}
//     </div>
//   `;

//   // Activity Stream
//   const activity = document.createElement('section');
//   activity.className = 'dashboard-activity card';
//   activity.innerHTML = `
//     <div class="section-header">
//       <h2>Activity Stream</h2>
//       <a href="#" class="section-viewall">View all</a>
//     </div>
//     <div class="activity-list">
//       ${DEMO_ACTIVITY.map(act => `
//         <div class="activity-item">
//           <img src="${act.avatar}" class="activity-avatar" alt="${act.name}" />
//           <div class="activity-info">
//             <span class="activity-name">${act.name}</span>
//             <span class="activity-text">${act.text}</span>
//           </div>
//         </div>
//       `).join('')}
//     </div>
//   `;

//   // Layout
//   const grid = document.createElement('div');
//   grid.className = 'dashboard-grid';
//   grid.appendChild(workload);
//   grid.appendChild(events);
//   grid.appendChild(projects);
//   grid.appendChild(activity);

//   main.appendChild(mainHeader);
//   main.appendChild(grid);
//   return main;
// }

// /* --- Nearest Events Page --- */
// function EventsPage(user) {
//   const main = document.createElement('main');
//   main.className = 'main-content';
//   main.innerHTML = `
//     <div class="">
//       <a href="#dashboard" class="back-link">&lt; Back to Dashboard</a>
//       <h1>Nearest Events</h1>
//       <button class="add-event-btn" id="addEventBtn">+ Add Event</button>
//     </div>
//   `;

//   // Events grid: 2 columns
//   const grid = document.createElement('div');
//   grid.className = 'events-grid';
//   EVENTS_LIST.forEach(ev => {
//     const card = document.createElement('div');
//     card.className = 'event-item card';
//     card.innerHTML = `
//       <span class="event-icon" style="color:${ev.color}">${ev.icon}</span>
//       <div class="event-info">
//         <span class="event-title">${ev.title}</span>
//         <span class="event-date">${ev.date}</span>
//       </div>
//       <span class="event-timeleft">${ev.timeleft}</span>
//       <span class="event-trend trend-${ev.trend}">${ev.trend === "up" ? "↑" : "↓"}</span>
//     `;
//     grid.appendChild(card);
//   });
//   main.appendChild(grid);

//   setTimeout(() => {
//     document.getElementById('addEventBtn').onclick = openAddEventModal;
//   }, 0);

//   return main;
// }

// /* --- Support Modal --- */
// function openSupportModal() {
//   closeModal();
//   const modal = document.createElement('div');
//   modal.className = 'modal-overlay support-modal-overlay';
//   modal.innerHTML = `
//     <div class="modal support-modal">
//       <button class="modal-close" id="closeSupportModal">&times;</button>
//       <div class="modal-body">
//         <div class="support-modal-img"></div>
//         <h2 class="support-modal-title">Need some help?</h2>
//         <p class="support-modal-desc">Describe your question and our specialists will answer you within 24 hours.</p>
//         <form class="support-modal-form">
//           <div class="support-form-group">
//             <label>Request Subject</label>
//             <select required>
//               <option value="">Select subject</option>
//               <option value="technical">Technical difficulties</option>
//               <option value="design">Design</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//           <div class="support-form-group">
//             <label>Description</label>
//             <textarea rows="3" required placeholder="Add some description of the request"></textarea>
//           </div>
//           <button type="submit" class="support-modal-btn">Send Request</button>
//         </form>
//       </div>
//     </div>
//   `;
//   document.body.appendChild(modal);
//   modal.querySelector('.modal-close').onclick = closeModal;
//   modal.querySelector('.support-modal-form').onsubmit = function(e) {
//     e.preventDefault();
//     closeModal();
//     alert('Your request has been submitted!');
//   };
// }
// function closeModal() {
//   document.querySelectorAll('.modal-overlay').forEach(m => m.remove());
// }

// /* --- Add Event Modal --- */
// function openAddEventModal() {
//   closeModal();
//   const modal = document.createElement('div');
//   modal.className = 'modal-overlay event-modal-overlay';
//   modal.innerHTML = `
//     <div class="modal event-modal">
//       <button class="modal-close" id="closeEventModal">&times;</button>
//       <div class="modal-body">
//         <h2 class="event-modal-title">Add New Event</h2>
//         <form class="event-modal-form">
//           <div class="event-form-group">
//             <label>Title</label>
//             <input type="text" required placeholder="Event title" />
//           </div>
//           <div class="event-form-group">
//             <label>Date & Time</label>
//             <input type="text" required placeholder="e.g. Sep 30 | 12:00" />
//           </div>
//           <div class="event-form-group">
//             <label>Icon</label>
//             <input type="text" required placeholder="e.g. 🎉" maxlength="2" />
//           </div>
//           <div class="event-form-group">
//             <label>Time Left</label>
//             <input type="text" required placeholder="e.g. 2h" />
//           </div>
//           <div class="event-form-group">
//             <label>Trend</label>
//             <select required>
//               <option value="up">↑ Up</option>
//               <option value="down">↓ Down</option>
//             </select>
//           </div>
//           <button type="submit" class="event-modal-btn">Add Event</button>
//         </form>
//       </div>
//     </div>
//   `;
//   document.body.appendChild(modal);
//   modal.querySelector('.modal-close').onclick = closeModal;
//   modal.querySelector('.event-modal-form').onsubmit = function(e) {
//     e.preventDefault();
//     const vals = Array.from(modal.querySelectorAll('input, select')).map(x=>x.value);
//     EVENTS_LIST.push({
//       title: vals[0],
//       icon: vals[2],
//       color: "#326bfa",
//       date: vals[1],
//       timeleft: vals[3],
//       trend: vals[4]
//     });
//     closeModal();
//     window.location.hash = "events";
//   };
// }

// /* --- Dashboard Layout --- */
// function Layout(page, user) {
//   const layout = document.createElement('div');
//   layout.className = 'dashboard-layout';
//   layout.appendChild(Sidebar(page));
//   layout.appendChild(Topbar(user));
//   if (page === 'events') {
//     layout.appendChild(EventsPage(user));
//   } else {
//     layout.appendChild(DashboardPage(user));
//   }
//   return layout;
// }

// /* --- Router --- */
// function router() {
//   const app = document.getElementById('app');
//   let hash = window.location.hash.replace('#', '');
//   if (!hash) hash = 'sign-in';
//   app.innerHTML = '';
//   if (hash === 'sign-in') {
//     clearOnboarding();
//     renderSignIn(app);
//   } else if (hash === 'onboarding-1') {
//     renderOnboardingStep1(app);
//   } else if (hash === 'onboarding-2') {
//     renderOnboardingStep2(app);
//   } else if (hash === 'onboarding-3') {
//     renderOnboardingStep3(app);
//   } else if (hash === 'onboarding-4') {
//     renderOnboardingStep4(app);
//   } else if (hash === "success") {
//     renderSuccess(app);
//   } else if (hash === 'dashboard' || hash === 'events') {
//     const state = getAuthState();
//     if (!state || !state.isAuthenticated || !state.user) {
//       window.location.hash = "sign-in";
//       return;
//     }
//     app.appendChild(Layout(hash, state.user));
//   } else {
//     window.location.hash = "dashboard";
//   }
// }

// window.addEventListener('hashchange', router);
// window.addEventListener('DOMContentLoaded', router);



import { renderSignIn } from './components/SignInForm.js';
import { getAuthState, clearOnboarding } from './storage.js';
import { renderOnboardingStep1 } from "./components/OnboardingStep1.js";
import { renderOnboardingStep2 } from './components/OnboardingStep2.js';
import { renderOnboardingStep3 } from './components/onBoardingStep3.js';
import { renderOnboardingStep4 } from './components/onBoarddingStep4.js';
import { renderSuccess } from './components/Succes.js';
import { Layout } from './components/Layout.js';

function router() {
  const app = document.getElementById('app');
  let hash = window.location.hash.replace('#', '');
  if (!hash) hash = 'sign-in';
  app.innerHTML = '';
  if (hash === 'sign-in') {
    clearOnboarding();
    renderSignIn(app);
  } else if (hash === 'onboarding-1') {
    renderOnboardingStep1(app);
  } else if (hash === 'onboarding-2') {
    renderOnboardingStep2(app);
  } else if (hash === 'onboarding-3') {
    renderOnboardingStep3(app);
  } else if (hash === 'onboarding-4') {
    renderOnboardingStep4(app);
  } else if (hash === "success") {
    renderSuccess(app);
  } else if (hash === 'dashboard' || hash === 'events') {
    const state = getAuthState();
    if (!state || !state.isAuthenticated || !state.user) {
      window.location.hash = "sign-in";
      return;
    }
    app.appendChild(Layout(hash, state.user));
  } else {
    window.location.hash = "dashboard";
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);