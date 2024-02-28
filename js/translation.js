"use strict";
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
}
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        if (cookie[0] === name) {
            return cookie[1];
        }
    }
    return null;
}
async function loadTranslations(language) {
    let translationFile = "./translations/en.json";
    if (language === "en") {
        translationFile = "./translations/en.json";
    }
    else if (language === "fr") {
        translationFile = "./translations/fr.json";
    }
    const response = await fetch(translationFile);
    if (response.ok) {
        return await response.json();
    }
    else {
        console.error("Failed to load translations.");
        return {};
    }
}
async function loadAndApplyTranslation(lang) {
    let currTranslation = {};
    // Load
    loadTranslations(lang)
        .then((loadedTranslation) => {
        currTranslation = loadedTranslation;
        // Apply
        for (const key in currTranslation) {
            const elem = document.querySelector('[translation="' + key + '"]');
            if (elem != null)
                elem.textContent = currTranslation[key];
        }
        setCookie('lang', lang, 365);
    })
        .catch((error) => {
        console.error("Failed to load translations:", error);
    });
}
document.querySelector('[alt="fr"]')?.addEventListener('click', () => {
    loadAndApplyTranslation("fr");
});
document.querySelector('[alt="en"]')?.addEventListener('click', () => {
    loadAndApplyTranslation("en");
});
// Init
let lang = "fr";
const savedLang = getCookie('lang');
if (savedLang) {
    lang = savedLang;
}
loadAndApplyTranslation(lang);
