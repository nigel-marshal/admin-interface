import React from 'react';
import AdDataList from './AdDataList';
import SearchBox from './SearchBox';
import { AdsInfo } from './AdsInfo';

const App = () => {
	return (
		<div>
			<h2 className="tc">Ad Info</h2>
			<SearchBox />
			<AdDataList AdsInfo={AdsInfo} />
		</div>
	);
};

export default App;
