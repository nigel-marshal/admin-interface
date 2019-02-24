import React, { Component } from 'react';
import AdDataList from './AdDataList';
import SearchBox from './SearchBox';
import { AdsInfo } from './AdsInfo';

class App extends Component {
	constructor() {
		super();
		this.state = {
			AdsInfo: [],
			searchfield: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.json();
			})
			.then((AdsInformation) => {
				this.setState({ AdsInfo: AdsInformation });
			});
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};

	render() {
		const filteredAds = this.state.AdsInfo.filter((AdsInfo) => {
			return AdsInfo.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return (
			<div>
				<h2 className="tc">Ad Info</h2>
				<SearchBox searchChange={this.onSearchChange} />
				<AdDataList AdsInfo={filteredAds} />
			</div>
		);
	}
}

export default App;
