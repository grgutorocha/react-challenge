import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helpers } from 'utils';

const SummaryLine = ({ item, handleChange }) => {
    return (
        <tr>
            <td>{item.title}</td>
            <td><input name={item.id} value={item.years} onChange={handleChange} /></td>
            <td>{Helpers.formatDollar(item.averageLoans)}</td>
            <td>{Helpers.formatDollar(item.netChargeoffsSum)}</td>
        </tr>
    );
};

SummaryLine.propTypes = {
    item: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default memo(SummaryLine);