import React from 'react';

import TotalGrossLoans from './totalGrossLoans';
import SummaryLine from './summaryLine';

const SummaryResults = ({ summary, handleChange }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>WARM</th>
                    <th>Avg</th>
                    <th>Avg</th>
                </tr>
                <tr>
                    <th></th>
                    <th>In Years</th>
                    <th>Balance</th>
                    <th>Net Chargeoffs</th>
                </tr>
            </thead>
            <tbody>
                {summary.map(item => <SummaryLine key={item.id} item={item} handleChange={handleChange} />)}
            </tbody>
            <tfoot>
                <TotalGrossLoans summary={summary} />
            </tfoot>
        </table>
    );
};

export default SummaryResults;
