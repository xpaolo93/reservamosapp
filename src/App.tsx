import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import InicioPage from './pages/InicioPage';
import { store } from './store/store';

function App() {
    
    return (
        <Provider store={store}>
            <CssBaseline />
            <InicioPage />
        </Provider>
    );
}

export default App;