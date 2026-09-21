// Adds a "Contact" link to the page footer, built from parts at runtime
// so a plain-text scraper reading the static HTML never sees an address.
(function () {
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    var user = "smagnin";
    var domain = "ifs.edu.sg";

    var link = document.createElement("a");
    link.href = "mailto:" + user + "@" + domain;
    link.textContent = "Contact";
    link.style.color = "#fffdf8";
    link.style.textDecoration = "underline";
    link.style.textUnderlineOffset = "2px";

    var existingFooter = document.querySelector("footer");
    if (existingFooter) {
      var p = document.createElement("p");
      p.style.marginTop = "8px";
      p.appendChild(link);
      existingFooter.appendChild(p);
      return;
    }

    var footer = document.createElement("footer");
    footer.style.background = "#071d35";
    footer.style.color = "#b9cad0";
    footer.style.fontSize = "10px";
    footer.style.letterSpacing = ".18em";
    footer.style.padding = "18px clamp(24px,5vw,100px)";
    footer.style.textTransform = "uppercase";
    footer.style.textAlign = "center";
    footer.appendChild(link);

    var switcher = document.querySelector(".footer-class-switcher");
    if (switcher && switcher.parentNode) {
      switcher.parentNode.insertBefore(footer, switcher);
    } else {
      document.body.appendChild(footer);
    }
  });
})();
