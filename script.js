// ── SHARED UTILITIES ──

/**
 * Toggle hamburger menu visibility
 * This function is called inline in nav button, but kept here for reference
 */
function toggleMenu() {
  const menu = document.getElementById('navLinks');
  if (menu) menu.classList.toggle('open');
}

/**
 * Close mobile menu when clicking outside
 */
document.addEventListener('click', (e) => {
  const nav = document.getElementById('nav');
  const ham = document.getElementById('ham');
  const navLinks = document.getElementById('navLinks');
  
  if (nav && ham && navLinks) {
    if (!nav.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  }
});

/**
 * Prevent # hash navigation on links
 */
document.querySelectorAll('a[href="#"]').forEach(a => {
  a.addEventListener('click', e => e.preventDefault());
});

// ── PAGE-SPECIFIC SCRIPTS ──
// Each HTML page contains its own form logic and navigation handling
// This file serves as a repository for shared utilities
