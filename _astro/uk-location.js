document.querySelectorAll(".uk-location").forEach((switcher) => {
  const buttons = [...switcher.querySelectorAll("[data-tab]")];
  const panels = [...switcher.querySelectorAll("[data-pane]")];

  function selectRoute(route) {
    for (const button of buttons) {
      const active = button.dataset.tab === route;
      button.classList.toggle("on", active);
      button.setAttribute("aria-pressed", String(active));
    }
    for (const panel of panels) {
      const active = panel.dataset.pane === route;
      panel.classList.toggle("on", active);
      panel.hidden = !active;
    }
  }

  for (const button of buttons) {
    button.addEventListener("click", () => selectRoute(button.dataset.tab));
  }
});
