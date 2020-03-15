import React, { useState } from 'react';
import SummaryResults from './summaryResults';

const HomeContainer = () => {
    const [tab, setTab] = useState(0);

    return (
        <div>
            <button onClick={() => setTab(0)}>Summary Results</button>
            <button onClick={() => setTab(1)}>Unfunded Commitments</button>
            { tab === 0 && <SummaryResults />}
            { tab === 1 && <h1>Unfunded Commitments Tab</h1>}
        </div>
    );
};

export default HomeContainer;