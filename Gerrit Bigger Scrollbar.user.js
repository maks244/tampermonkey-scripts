// ==UserScript==
// @name         Gerrit Bigger Scrollbar
// @namespace    http://nakato.io
// @version      0.1
// @description  Make the scrollbar slightly bigger
// @author       Sachi King
// @match        https://review.openstack.org/*
// @grant        GM_addStyle
// ==/UserScript==
/* jshint -W097 */
'use strict';

GM_addStyle('.CodeMirror-overlayscroll-vertical { width: 10px !important; }');
