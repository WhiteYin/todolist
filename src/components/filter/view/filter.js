import React from 'react';
import Link from './link.js';
import * as filterType from '../../../filterType';

const Filter = () => {
    return (
        <div className="filter-container">
            <Link filter={ filterType.ALL }> {filterType.ALL} </Link>
            <Link filter={ filterType.COMPLETED }> {filterType.COMPLETED} </Link>
            <Link filter={ filterType.UNCOMPLETE }> {filterType.UNCOMPLETE} </Link>
        </div>
    );
};

export default Filter;
