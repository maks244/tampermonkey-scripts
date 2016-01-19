// ==UserScript==
// @name         Always show full commit message
// @namespace    http://nakato.io
// @version      0.1
// @description  Expand commit message and remove colapsers
// @author       Nakato
// @match        https://review.openstack.org/*
// @grant    GM_addStyle
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==
/* jshint -W097 */
'use strict';

function expand_commit_box(jNode) {
    jNode.attr('class', 'com-google-gerrit-client-change-CommitBox_BinderImpl_GenCss_style-expanded');
    $('.com-google-gerrit-client-change-CommitBox_BinderImpl_GenCss_style-more').remove()
}

waitForKeyElements (".com-google-gerrit-client-change-CommitBox_BinderImpl_GenCss_style-collapsed", expand_commit_box);
