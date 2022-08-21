import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from '~/components/GlobalStyles';
import { publicRoutes } from './routes';

const App: React.FC = () => {
    return (
        <div className="app">
            <GlobalStyles>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </GlobalStyles>
        </div>
    );
};

export default App;
