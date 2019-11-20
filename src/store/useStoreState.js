export function useStoreState(mapState) {
	const store = useContext(context);
	return mapState(store.getStore());
}