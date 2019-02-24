import React from 'react';
import AdData from './AdData';

const AdDataList = ({ AdsInfo }) => {
	return (
		<div>
			{AdsInfo.map((ad, i) => {
				return (
					<AdData key={AdsInfo[i].id} id={AdsInfo[i].id} name={AdsInfo[i].name} email={AdsInfo[i].email} />
				);
			})}
		</div>
	);
};

export default AdDataList;
