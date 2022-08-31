// ==UserScript==
// @name          NoNitroThanks
// @version       1.0.2
// @description   A fork of NoNitroThanks that's modified to work with *Monkey (i hope)
// @author        RayZen (mod), ImSwordKing (original)
// @license       urmom
// @match         https://discord.com/*
// @resource   IMPORTED_CSS https://github.com/megamanyoutuber/NoNitroThanks-personal-testing/raw/main/NoNitroThanks/NoNitroThanks.style.css
// @grant      GM_getResourceText
// @grant      GM_addStyle
/// ==/UserScript==

(function() {
    'use strict';
    const my_css = GM_getResourceText("IMPORTED_CSS");
    GM_addStyle(my_css);
})()
