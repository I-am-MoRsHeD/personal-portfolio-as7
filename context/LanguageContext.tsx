'use client'

import { createContext, useContext, useState } from 'react'

type Locale = 'en' | 'pt' | 'bn'

const LanguageContext = createContext<{
    locale: Locale
    setLocale: (l: Locale) => void
}>({
    locale: 'en',
    setLocale: () => { }
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState<Locale>('en');

    const values = {
        locale,
        setLocale
    };

    return (
        <LanguageContext.Provider value={values}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)
