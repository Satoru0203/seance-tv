// Chargé par la coquille installée sur la télé : démarre la version publiée de Séance.
(function () {
  function failed() { if (window.__seanceFailed) window.__seanceFailed(); }
  var polyfills = document.createElement('script');
  polyfills.src = "https://satoru0203.github.io/seance-tv/assets/polyfills-legacy-C9A1PcNQ.js";
  polyfills.onload = function () {
    System.import("https://satoru0203.github.io/seance-tv/assets/index-legacy-Bzj1I9Dq.js").then(function () { if (window.__seanceLoaded) window.__seanceLoaded(); }, failed);
  };
  polyfills.onerror = failed;
  document.head.appendChild(polyfills);
})();
