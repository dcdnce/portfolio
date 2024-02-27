function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(name: string) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return null;
}

async function loadTranslations(language: string): Promise<{ [key: string]: string }> {
  let translationFile: string = "../src/translations/en.json";

  if (language === "en") {
    translationFile = "../src/translations/en.json";
  } else if (language === "fr") {
    translationFile = "../src/translations/fr.json";
  }

  const response = await fetch(translationFile);
  if (response.ok) {
    return await response.json();
  } else {
    console.error("Failed to load translations.");
    return {};
  }

}

async function loadAndApplyTranslation(lang: string) {
  let currTranslation: { [key: string]: string } = {};
  // Load
  loadTranslations(lang)
    .then((loadedTranslation) => {
      currTranslation = loadedTranslation;
      // Apply
      for (const key in currTranslation) {
        const elem: Element | null  = document.querySelector('[translation="' + key + '"]');
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