import React from 'react';
import Link from './link.js';
import * as filterType from '../../../filterType';

import './filter.less';

const Filter = () => {
    return (
        <p className="filter-container">
            <Link filter={ filterType.ALL }> {filterType.ALL} </Link>
            <Link filter={ filterType.COMPLETED }> {filterType.COMPLETED} </Link>
            <Link filter={ filterType.UNCOMPLETE }> {filterType.UNCOMPLETE} </Link>
        </p>
    );
};

export default Filter;
