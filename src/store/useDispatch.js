export function useDispatch() {
	const store = useContext(Context);
	return store.dispatch;
}