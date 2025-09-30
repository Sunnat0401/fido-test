export function Sidebar(selected, openSupportModal) {
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    sidebar.innerHTML = `
      <div class="sidebar-header">
        <div class="sidebar-logo">
        <img src="public/logo.jpg" alt="companylogo.svg"/>
        </div>
      </div>
     
      <nav class="sidebar-nav">
        ${[
          { name: "Dashboard", icon: "public/SaidbarIcon1.svg", hash: "dashboard" },
          { name: "Projects", icon: "public/SaidbarIcon2.svg", hash: "projects" },
          { name: "Calendar", icon: "public/SaidbarIcon3.svg", hash: "calendar" },
          { name: "Vacations", icon: "public/SaidbarIcon4.svg", hash: "vacations" },
          { name: "Employees", icon: "public/SaidbarIcon5.svg", hash: "employees" },
          { name: "Messenger", icon: "public/SaidbarIcon6.svg", hash: "messenger" },
          { name: "Info Portal", icon: "public/SaidbarIcon7.svg", hash: "info-portal" }
        ].map(item => `
          <a href="#${item.hash}" class="sidebar-link${selected === item.hash ? ' active' : ''}">
            <img src=${item.icon} alt="sadibar icon"  class="sidebar-icon"/>
            <span class="sidebar-text">${item.name}</span>
          </a>
        `).join('')}
      </nav>
      <div class="sidebar-footer">
        <div class="sidebar-support">
          <button class="sidebar-support-btn" id="supportBtn"><img src="public/supportIcon.jpg" alt="supportIcon.jpg"/></button>
        </div>
        <a href="#sign-in" class="sidebar-logout">
          <span>Logout</span>
        </a>
      </div>
    `;
    setTimeout(() => {
      const btn = sidebar.querySelector('#supportBtn');
      if (btn) btn.onclick = openSupportModal;
    }, 0);
    return sidebar;
  }