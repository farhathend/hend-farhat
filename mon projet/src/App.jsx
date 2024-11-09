import React from 'react';
import ListArticles from './Componenets/ListArticle.jsx'; 
import Menu from './Menu';
import Vid from './vid';
import MultiImageCarousel from './carousel.jsx';
function App() { 
    return (
        <>
            <Menu />
            <Vid />
            <MultiImageCarousel></MultiImageCarousel>
            <ListArticles />
        </>
    );
}
export default App;
