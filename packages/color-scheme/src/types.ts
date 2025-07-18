export type ColorSchemeConfig = 'light' | 'dark' | 'system';
export type ColorSchemeResolve = 'light' | 'dark';

export interface ColorSchemeSetup {
    saveConfig(config: ColorSchemeConfig): void;
    loadConfig(): ColorSchemeConfig;
    cssClass: { light: string; dark: string };
}

export interface CurrentState {
    config: ColorSchemeConfig;
    resolved: ColorSchemeResolve;
}

export type ColorSchemeSubscriber = (state: CurrentState) => void;

export interface ColorSchemeApi {
    get config(): ColorSchemeConfig;
    set config(value: ColorSchemeConfig);
    get currentState(): CurrentState;
    get resolvedSystem(): ColorSchemeResolve;
    getRootCssClass(resolved?: ColorSchemeResolve): string;
    subscribe(sub: ColorSchemeSubscriber): () => void;
    dispose(): void;
}

declare global {
    interface Window {
        colorSchemeApi: ColorSchemeApi;
    }
}
