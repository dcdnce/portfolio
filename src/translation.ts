// Fonction pour charger les traductions
async function loadTranslations(language: string): Promise<{ [key: string]: string }> {
  let translationFile: string = "./translations/en.json";

  if (language === "en") {
    translationFile = "./translations/en.json";
  } else if (language === "fr") {
    translationFile = "./translations/fr.json";
  }

  const response = await fetch(translationFile);
  if (response.ok) {
    return await response.json();
  } else {
    console.error("Failed to load translations.");
    return {};
  }
}

let currentLanguage = "en"; // Par défaut, la langue est l'anglais
let translations: { [key: string]: string } = {};

// Chargez les traductions au démarrage de la page
loadTranslations(currentLanguage)
  .then((loadedTranslations) => {
    translations = loadedTranslations;
  })
  .catch((error) => {
    console.error("Failed to load translations:", error);
  });

// Actualiser les traductions
for (const key in translations) {
	const elem: Element | null  = document.querySelector('[translation="' + key + '"]');
	if (elem != null)
		elem.textContent = translations[key];
}
