import React from 'react';
import DetailComponent from "./DetailComponent";

function ListComponent({ param }) {
    return (
        <div>
			{param.map((value) => (
				<DetailComponent param = {value}/>
			))} 
        </div>
    );
}

export default ListComponent;