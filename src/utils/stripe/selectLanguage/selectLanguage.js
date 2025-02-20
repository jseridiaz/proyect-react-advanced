const selectLanguage = () =>
   navigator.language !== "en" ||
   navigator.language !== "es" ||
   navigator.language !== "de"
      ? "en"
      : navigator.language

export default selectLanguage
