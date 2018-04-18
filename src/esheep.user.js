// ==UserScript==
// @name         web eSheep
// @namespace    http://esheep.petrucci.ch/
// @version      0.3
// @description  Add three sheep on concourse
// @author       Adriano
// @include      https://concourse.apachegeode-ci.info/*
// @icon         http://esheep.petrucci.ch/favicon.gif
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
      var s = document.createElement("script");
      s.addEventListener("load", function() {var sheep = new eSheep(); sheep.Start("https://upthewaterspout.github.io/web-esheep/src/animation.xml"); });
      s.addEventListener("load", function() {var sheep = new eSheep(); sheep.Start("https://upthewaterspout.github.io/web-esheep/src/animation.xml"); });
      s.addEventListener("load", function() {var sheep = new eSheep(); sheep.Start("https://upthewaterspout.github.io/web-esheep/src/animation.xml"); });
      s.setAttribute("src", "https://upthewaterspout.github.io/web-esheep/src/esheep.js");
      document.getElementsByTagName('head')[0].appendChild(s);
      document.getElementsByTagName('rect').borderTopStyle='solid';
})();
