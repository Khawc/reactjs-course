import React from 'react';

function DetailComponent({ param }) {
    return (
		<div id="logo">
			<img src={param.img} width="69" height="69"/>
			<div>
			<h5>{param.name}</h5>
			<h5>{param.age}</h5>
			<h5>{param.phone}</h5>
			</div>
		</div>		
    );
}

export default DetailComponent;