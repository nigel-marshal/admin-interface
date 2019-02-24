import React from 'react';

const UserData = ({ name, email, id }) => {
	return (
		<div className="tc bg-light-gray br3 pa3 ma2 grow bw2 shadow-5">
			<p className="dib pa3 b">{id}</p>
			<p className="dib pa3 b">{email}</p>
			<p className="dib pa3 b">{name}</p>
			{/* <p className="dib pa3">Category</p>
			<p className="dib pa3">500AED</p>
			<p className="dib pa3">Date & Time</p>
			<p className="dib pa3">Credit Card</p> */}
		</div>
	);
};

export default UserData;
