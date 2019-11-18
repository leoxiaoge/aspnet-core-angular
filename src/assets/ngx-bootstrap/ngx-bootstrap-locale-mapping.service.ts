export class NgxBootstrapLocaleMappingService {
    map(locale: string): string {
        const cultureMap = {
            'en': 'en-gb',
            'zh-Hans': 'zh-cn',
            'es-MX': 'es'
            // Add more here
        };

        if (cultureMap[locale]) {
            return cultureMap[locale];
        }

        return locale;
    }

    getModuleName(locale: string): string {
        const moduleNameMap = {
            'en': 'enGb',
            'zh-Hans': 'zhCn',
            'es-MX': 'es',
            'pt-BR': 'ptBr',
            // Add more here
        };

        if (moduleNameMap[locale]) {
            return moduleNameMap[locale];
        }

        return locale;
    }
}
