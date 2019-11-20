import {
	createContext,
	useContext
} from 'react';

const context = createContext(null);
export const StoreProvider = context.provider;

const store = useContext(context);
// do something about store.