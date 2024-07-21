import { TCacheConfig } from '../singify-cache/cache.model';

export type TSignifyConfig = {
    cache?: TCacheConfig;
    syncKey?: string;
};

export type TSetterCallback<T> = (preValue: Readonly<T>) => T;

export type TWrapProps<T> = { children(value: Readonly<T>): React.JSX.Element };

export type TListeners<T> = Set<(value: T) => void>;

export type TGetValueCb<T> = () => Readonly<T>;

export type TUseValueCb<T> = (value: T) => void;

export type TConditionUpdate<T> = (pre: T, cur: T) => boolean;

export type TconditionRender<T> = (value: T) => boolean;

export type TOmitHtml<T, P> = T extends string | number ? P : Omit<P, 'html'>;
