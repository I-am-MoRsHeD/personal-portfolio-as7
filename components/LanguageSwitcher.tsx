'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/context/LanguageContext'

const languages = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' },
    { code: 'bn', label: 'বাংলা' }
]
type Locale = 'en' | 'pt' | 'bn'
export default function LanguageSwitcher() {
    const { setLocale } = useLanguage();

    const changeLanguage = (locale: Locale) => {
        setLocale(locale);
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Language</Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                {languages.map(lang => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code as Locale)}
                    >
                        {lang.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
