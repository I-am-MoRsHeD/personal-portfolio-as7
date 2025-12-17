'use client'

import { NextIntlClientProvider } from 'next-intl'
import { LanguageProvider, useLanguage } from '@/context/LanguageContext'
import { ReactNode } from 'react'

import en from '@/static/about/en.json'
import pt from '@/static/about/pt.json'
import bn from '@/static/about/bn.json'

const datasMap = { en, pt, bn }

function IntlProvider({ children }: { children: ReactNode }) {
    const { locale } = useLanguage();

    return (
        <NextIntlClientProvider
            locale={locale}
            messages={datasMap[locale]}
        >
            {children}
        </NextIntlClientProvider>
    )
}

export default function AppProviders({ children }: { children: ReactNode }) {
    return (
        <LanguageProvider>
            <IntlProvider>{children}</IntlProvider>
        </LanguageProvider>
    )
}
