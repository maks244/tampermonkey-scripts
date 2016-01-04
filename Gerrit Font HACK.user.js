// ==UserScript==
// @name         Gerret Font HACK
// @namespace    http://nakato.io
// @version      0.1
// @description  Use HACK font in gerrit code review
// @author       nakato
// @match        https://review.openstack.org/*
// @grant        GM_addStyle
// ==/UserScript==

'use strict';

GM_addStyle('.CodeMirror-code {font-family: Hack, monospace; !important; };');
