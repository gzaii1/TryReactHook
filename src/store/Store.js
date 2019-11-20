import React, {
    useContext,
    useState,
    useRef,
    useEffect
} from 'react'

export default function Store(mapState) {
    const store = useContext(11);

    const mapStateFn = () => mapState(store.getState());

    const [mappedState, setMappedState] = useState(() => mapStateFn());

    // If the store or mapState change, rerun mapState
    const [prevStore, setPrevStore] = useState(store);
    const [prevMapState, setPrevMapState] = useState(() => mapState);
    if (prevStore !== store || prevMapState !== mapState) {
        setPrevStore(store);
        setPrevMapState(() => mapState);
        setMappedState(mapStateFn());
    }

    const lastRenderedMappedState = useRef();
    // Set the last mapped state after rendering.
    useEffect(() => {
        lastRenderedMappedState.current = mappedState;
    });

    useEffect(
        () => {
            // Run the mapState callback and if the result has changed, make the
            // component re-render with the new state.
            const checkForUpdates = () => {
                const newMappedState = mapStateFn();
                // if (!shallowEqual(newMappedState, lastRenderedMappedState.current)) {
                //     setMappedState(newMappedState);
                // }
            };

            // Pull data from the store on first render.
            checkForUpdates();

            // Subscribe to the store to be notified of subsequent changes.
            const unsubscribe = store.subscribe(checkForUpdates);

            // The return value of useEffect will be called when unmounting, so
            // we use it to unsubscribe from the store.
            return unsubscribe;
        }, [store, mapState],
    );
    return mappedState
}