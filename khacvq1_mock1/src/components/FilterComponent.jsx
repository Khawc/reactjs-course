import React from "react";

function FilterComponent({ param }) {
    return (
        <div>
            <select>
                <option>Bộ lọc</option>
                {param.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default FilterComponent;