import React, { useState } from 'react';
import { default as Service } from 'services/codeChallenge';
import SummaryResults from './summary-results';

const initialSummary = [
    { id: 1, title: "Unsecured Credit Card Loans", years: 0, averageLoans: 0, netChargeoffsSum: 0 },
    { id: 2, title: "New Vehicle Loans", years: 0, averageLoans: 0, netChargeoffsSum: 0 }
];

const HomeContainer = () => {
    const [tab, setTab] = useState(0);

    const [summary, setSummary] = useState(initialSummary);

    const onChangeYear = async ({ target }) => {
        const years = target.value;
        const fieldId = target.name;

        const { data } = await Service.get({ params: { fieldId, years } });

        const newSummary = summary.map(item => {
            if (item.id.toString() === fieldId) {
                return {
                    ...item,
                    years,
                    averageLoans: data.averageLoans,
                    netChargeoffsSum: data.netChargeoffsSum
                }
            }

            return item;
        });

        setSummary(newSummary);
    };

    return (
        <div>
            <button onClick={() => setTab(0)}>Summary Results</button>
            <button onClick={() => setTab(1)}>Unfunded Commitments</button>
            { tab === 0 && <SummaryResults summary={summary} handleChange={onChangeYear} />}
            { tab === 1 && <h1>Unfunded Commitments Tab</h1>}
        </div>
    );
};

export default HomeContainer;