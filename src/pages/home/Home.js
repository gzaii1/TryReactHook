import React, {
	useEffect
} from 'react';
import store from '../../store/Store'

const Home = (props) => {
	useEffect(() => {
		console.log(store)
		store()
	}, [])

	return (
		<div className="App">
      HomePage
    </div>
	);
}

export default Home;