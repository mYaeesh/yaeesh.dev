// ASMUN — nav.js
// Highlights the current section in both the side nav (>=900px) and the
// bottom tab bar (<900px) as the user scrolls, and keeps the active tab
// scrolled into view within the horizontally-scrolling tab bar.

export function initActiveNav() {
  const sections = Array.from(document.querySelectorAll('.panel-section[id]'));
  const sideLinks = Array.from(document.querySelectorAll('.side-nav__link'));
  const tabLinks = Array.from(document.querySelectorAll('.tab-bar__link'));

  if (!sections.length || (!sideLinks.length && !tabLinks.length)) return;

  function setActive(id) {
    [...sideLinks, ...tabLinks].forEach((link) => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    const activeTab = tabLinks.find((link) => link.getAttribute('href') === `#${id}`);
    if (activeTab && typeof activeTab.scrollIntoView === 'function') {
      activeTab.scrollIntoView({ block: 'nearest', inline: 'center' });
    }
  }

  if (!('IntersectionObserver' in window)) {
    if (sections[0]) setActive(sections[0].id);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length) {
        setActive(visible[0].target.id);
      }
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
  );

  sections.forEach((section) => observer.observe(section));
  setActive(sections[0].id);
}
