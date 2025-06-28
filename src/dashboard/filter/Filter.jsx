import { useState } from 'react';
import { useEffect } from 'react';
import './style.css'

export default function Filter({ data, filteredData, setFilteredData }) {
    const [stockCheckbox, setStockCheckbox] = useState(false);
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        filter();
    }, [stockCheckbox, filterValue]);

    function filter() {
        filteredData = data;

        if (filterValue) {
            filteredData = filteredData.filter(x => x.name.toLowerCase().includes(filterValue));
        }

        if (stockCheckbox) {
            filteredData = filteredData.filter(x => x.stocked);
        }

        setFilteredData(filteredData);
    };

    return (
        <div className='filter-box'>
            <input onChange={(e) => setFilterValue(e.target.value)} type="text" placeholder="Search.." />
            <div className="checkbox-box">
                <input type="checkbox" checked={stockCheckbox} onChange={(e) => setStockCheckbox(e.target.checked)} />
                <span>Only show products in stock</span>
            </div>
        </div>
    );
}