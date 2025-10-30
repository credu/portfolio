import { ui, defaultLang } from "./ui";

// This is necessary to use any lang and key
const UI = ui as Record<string, Record<string, string>>;

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split("/");
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: Lang) {
    // Read about this tricky solution to keep autocomplete in:
    // https://stackoverflow.com/a/61048124
    type TranslationKey = keyof (typeof ui)[typeof defaultLang] | (string & {});

    return function t(key: TranslationKey) {
        return UI[lang][key] ?? UI[defaultLang][key] ?? key;
    };
}

export type TranslateFunctionType = ReturnType<typeof useTranslations>;
export type Lang = keyof typeof ui;
