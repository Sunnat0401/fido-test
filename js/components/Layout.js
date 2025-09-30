import { Sidebar } from './Saidbar.js';
import { openSupportModal } from './SupportModal.js';
import { Topbar } from './Topbar.js';
import { DashboardPage } from './DashboardPage.js';
import { EventsPage } from './EventsPage.js';

export function Layout(page, user) {
  const layout = document.createElement('div');
  layout.className = 'dashboard-layout';
  layout.appendChild(Sidebar(page, openSupportModal));

  const mainArea = document.createElement('div');
  mainArea.className = 'main-area';

  mainArea.appendChild(Topbar(user));
  if (page === 'events') {
    mainArea.appendChild(EventsPage(user));
  } else {
    mainArea.appendChild(DashboardPage(user));
  }

  layout.appendChild(mainArea);

  return layout;
}