import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@/routes/AppRouter';
import { store } from '@/store';
import { Loading } from '@/widgets/Loading/Loading';
import { Header } from '../Header';
import './App.scss';

const App = () => (
    <BrowserRouter>
        <Provider store={store}>
            <Header />
            <Suspense fallback={<Loading />}>
                <AppRouter />
            </Suspense>
        </Provider>
    </BrowserRouter>
);

export default App;
