import { createContext } from 'react';
import { ContextDataType } from './ContextDataType';

export const Context = createContext<ContextDataType | null>(null);
