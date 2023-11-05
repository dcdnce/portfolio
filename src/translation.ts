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
loadAndApplyTranslation("fr");