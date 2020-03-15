import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helpers } from 'utils';

const initialTotalGrossLoans = {
    averageYears: 0,
    averageBalance: 0,
    averageNotChargeoffs: 0
};

const TotalGrossLoans = props => {
    const [totalGrossLoans, setTotalGrossLoans] = useState(initialTotalGrossLoans);

    useEffect(() => {
        let averageYears = 0;
        let averageBalance = 0;
        let averageNotChargeoffs = 0;

        props.summary.forEach(item => {
            averageBalance = averageBalance + item.averageLoans;
            averageNotChargeoffs = averageNotChargeoffs + item.netChargeoffsSum;
        });

        if (averageBalance) {
            props.summary.forEach(item => {
                averageYears = averageYears + (item.years * (item.averageLoans / averageBalance));
            });
        }

        setTotalGrossLoans({
            averageYears: Helpers.formatDecimal(averageYears),
            averageBalance: Helpers.formatDollar(averageBalance),
            averageNotChargeoffs: Helpers.formatDollar(averageNotChargeoffs)
        });
    }, [props]);

    return (
        <tr>
            <td>Total Gross Loans</td>
            <td>{totalGrossLoans.averageYears}</td>
            <td>{totalGrossLoans.averageBalance}</td>
            <td>{totalGrossLoans.averageNotChargeoffs}</td>
        </tr>
    );
};

TotalGrossLoans.propTypes = {
    summary: PropTypes.array.isRequired
};

export default TotalGrossLoans;