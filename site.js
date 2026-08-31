(() => {
  const appStoreUrl = typeof window.BREE_APP_STORE_URL === "string" ? window.BREE_APP_STORE_URL : "";
  const supportEmail = typeof window.BREE_SUPPORT_EMAIL === "string" ? window.BREE_SUPPORT_EMAIL : "";

  document.querySelectorAll("[data-app-store-cta]").forEach((link) => {
    if (appStoreUrl && /^https:\/\//i.test(appStoreUrl)) {
      link.href = appStoreUrl;
      link.target = "_blank";
      link.rel = "noopener";
      link.removeAttribute("aria-disabled");
    } else {
      link.setAttribute("aria-disabled", "true");
      link.title = "The App Store link will be connected before launch";
      link.addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector("#download")?.scrollIntoView({ behavior: "smooth" });
      });
    }
  });

  if (supportEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(supportEmail)) {
    document.querySelectorAll("[data-support-contact]").forEach((node) => {
      const link = document.createElement("a");
      link.href = `mailto:${supportEmail}`;
      link.textContent = supportEmail;
      node.replaceChildren(link);
    });
  }
})();
