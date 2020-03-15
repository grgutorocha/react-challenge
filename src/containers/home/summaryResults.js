import React from 'react';

const SummaryResults = () => {
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
                <tr>
                    <td>Unsecured Credit Card Loans</td>
                    <td><input name="value" /></td>
                    <td>$1,639,030</td>
                    <td>$78,690 </td>
                </tr>
                <tr>
                    <td>New Vehicle Loans</td>
                    <td><input name="value" /></td>
                    <td>$9,916,718</td>
                    <td>$203,273</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>Total Gross Loans</td>
                    <td>4.14</td>
                    <td>$11,555,748</td>
                    <td>$281,963</td>
                </tr>
            </tfoot>
        </table>
    );
};

export default SummaryResults;
