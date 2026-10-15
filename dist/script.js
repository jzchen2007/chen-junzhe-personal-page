"use strict";

// 图标库以本地文件提供；页面文字不依赖图标加载。
if (window.lucide) window.lucide.createIcons();

const navigation = document.querySelector("#main-navigation");
const menuToggle = document.querySelector(".menu-toggle");
const mobileQuery = window.matchMedia("(max-width: 760px)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const topButton = document.querySelector("#back-to-top");
const chapters = [...document.querySelectorAll("main > section")];
const sectionLinks = [...document.querySelectorAll(".nav-link, .chapter-dots a")];

function setMenuOpen(open) {
  navigation.hidden = !open;
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "折叠导航" : "展开导航");
}
setMenuOpen(!mobileQuery.matches);
menuToggle.addEventListener("click", () => setMenuOpen(navigation.hidden));
mobileQuery.addEventListener("change", () => setMenuOpen(!mobileQuery.matches));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !navigation.hidden) {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

// 导航、章节圆点与文内链接共享锚点行为，保留可分享的地址片段。
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    if (mobileQuery.matches) setMenuOpen(false);
    // 让键盘与辅助技术的阅读位置一起到达目标章节。
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    target.scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth", block: "start" });
    history.replaceState(null, "", link.getAttribute("href"));
  });
});

let scheduled = false;
function updateScrollState() {
  const readingLine = window.innerHeight * 0.38;
  let active = chapters[0];
  for (const chapter of chapters) {
    if (chapter.getBoundingClientRect().top <= readingLine) active = chapter;
  }
  sectionLinks.forEach((link) => {
    const selected = link.hash === `#${active.id}`;
    link.classList.toggle("active", selected);
    if (selected) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  topButton.hidden = window.scrollY < window.innerHeight * 0.45;
  scheduled = false;
}
window.addEventListener("scroll", () => {
  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(updateScrollState);
  }
}, { passive: true });
window.addEventListener("resize", updateScrollState);
window.addEventListener("load", updateScrollState);
updateScrollState();
topButton.addEventListener("click", () => document.querySelector('.brand').click());

let toastTimeout;
function showToast(message) {
  const toast = document.querySelector("#toast");
  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimeout = setTimeout(() => toast.classList.remove("visible"), 3200);
}

// file:// 或不支持 Clipboard API 的环境中使用兼容复制，并确认返回值。
function copyWithFallback(text) {
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.cssText = "position:fixed;left:-9999px;top:0";
  document.body.appendChild(field);
  field.select();
  let copied = false;
  try { copied = document.execCommand("copy"); } catch { copied = false; }
  field.remove();
  return copied;
}
document.querySelectorAll("[data-copy-qq]").forEach((button) => {
  button.addEventListener("click", async () => {
    let copied = false;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText("1719660563");
        copied = true;
      } catch { /* 权限受限时继续尝试本地兼容方式。 */ }
    }
    if (!copied) copied = copyWithFallback("1719660563");
    button.focus({ preventScroll: true });
    showToast(copied ? "QQ 号已复制，期待和你交流！" : "请手动复制 QQ 号：1719660563");
  });
});
document.querySelector("#year").textContent = new Date().getFullYear();
