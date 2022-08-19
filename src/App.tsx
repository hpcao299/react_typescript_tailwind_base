import React from 'react';
import GlobalStyles from '~/components/GlobalStyles';

const App: React.FC = () => {
    return (
        <div className="app font-chatverse">
            <GlobalStyles>
                <h1 className="text-2xl text-center text-red-300">Hi World!</h1>
            </GlobalStyles>
        </div>
    );
};

export default App;
