/* File: content.js
 * ---------------
 * Hello! You'll be making most of your changes
 * in this file. At a high level, this code replaces
 * the substring "cal" with the string "butt" on web pages.
 *
 * This file contains javascript code that is executed
 * everytime a webpage loads over HTTP or HTTPS.
 */

// const archivedPage = document.documentElement.outerHTML;

// // document.body.addEventListener("DOMContentLoaded", savePage())

// function savePage(){
//     print(archivedPage)
// }

(function() {
    const html = document.documentElement.outerHTML;
    // Here, you can either display the HTML directly,
    // send it to a server, or use the Chrome Storage API to save it.
    console.log(html);
    function saveHtmlToStorage() {
        const html = document.documentElement.outerHTML;
        chrome.storage.local.set({key: html}, function() {
          console.log('HTML is saved in Chrome storage');
        });
      }
        })();

        