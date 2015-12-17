// ==UserScript==
// @name         Business Cat - Fixed Nav Bar
// @namespace    http://www.businesscat.happyjar.com/
// @version      0.1
// @description  Mov nav-bar above variable sized object
// @author       You
// @match        http://www.businesscat.happyjar.com/*
// @grant        none
// ==/UserScript==

sbuc = document.getElementById('sidebar-under-comic')
nav = document.getElementById('nav')
nav.appendChild(sbuc)
document.getElementById('share').remove()
document.getElementById('buyprint').remove()
document.getElementById('content').remove()
document.getElementById('footer').remove()
document.getElementById('like').remove()
