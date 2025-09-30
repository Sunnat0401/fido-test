export function Topbar(user) {
  const topbar = document.createElement("header");
  topbar.className = "topbar";
  topbar.innerHTML = `
    <div class="topbar-left">
      <input type="text" class="topbar-search" placeholder="Search" /></div>

    <div class="topbar-right">
      <span class="topbar-user">
       <div class="topbar-user-icon-wrapper">
        <img src="public/notifications.svg" class="topbar-avatar" alt="${user.name}" />
       </div>
     
           <div  class="topbar-user-settings">
 <img src="public/photo.svg" class="topbar-avatar" alt="${user.name}" />
 <span> Evan YAtes</span>
 <img src="public/right.svg" class="topbar-arrow" alt="${user.name}" />

           </div>

     
      </span>
    </div>
  `;
  return topbar;
}

{
  /* <span class="topbar-user-icon">⚙️</span>   <span class="topbar-username">${user.name}</span> */
}
