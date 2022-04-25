import { Routes, Route } from 'react-router-dom';
import FilmPage from '../pages/film-page/film-page';
import Main from '../pages/main/main';

function App() {
    return (
        <>
            <Routes>
                <Route index element={<Main />} />
                <Route path='film/:id' element={<FilmPage />} />
            </Routes>
        </>
    );

}

export default App;
