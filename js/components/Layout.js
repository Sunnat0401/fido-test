// import { Sidebar } from './Saidbar.js';
// import { openSupportModal } from './SupportModal.js';
// import { Topbar } from './TopBar.js';

// // You can import more pages as needed
// import { DashboardPage } from './DashboardPage.js';
// import { EventsPage } from './EventsPage.js';

// export function Layout(page, user) {
// //   const layout = document.createElement('div');
// //   layout.className = 'dashboard-layout';


//   const layout = document.createElement('div');
//   layout.className = 'dashboard-layout';

//   layout.appendChild(Sidebar(page, openSupportModal));
//   layout.appendChild(Topbar(user));
//   // Render main content based on page
//   if (page === 'events') {
//     layout.appendChild(EventsPage(user));
//   } else {
//     layout.appendChild(DashboardPage(user));
//   }
//   return layout;
// }


import { Sidebar } from './Saidbar.js';
import { openSupportModal } from './SupportModal.js';
import { Topbar } from './Topbar.js';
import { DashboardPage } from './DashboardPage.js';
import { EventsPage } from './EventsPage.js';

export function Layout(page, user) {
  const layout = document.createElement('div');
  layout.className = 'dashboard-layout';
  // Sidebar chap tomonda
  layout.appendChild(Sidebar(page, openSupportModal));

  // Topbar va kontent uchun alohida container
  const mainArea = document.createElement('div');
  mainArea.className = 'main-area';

  // Topbar har doim tepada
  mainArea.appendChild(Topbar(user));
  // Main content: Dashboard yoki Events
  if (page === 'events') {
    mainArea.appendChild(EventsPage(user));
  } else {
    mainArea.appendChild(DashboardPage(user));
  }

  // mainArea-ni layoutga qo'shamiz (Sidebardan keyin)
  layout.appendChild(mainArea);

  return layout;
}