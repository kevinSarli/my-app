import React  from 'react';
import ContentrowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb';
import LastmovieInDb from './LastMovieInDb';

const ContentRowTop = () => {
    return  (
        <div className="Container-fluid">
            <div className="d-sm-flex align-items-center justify-content-betweenmb-4">
                <h1 className='H3 MB-0 TEXT-GRAY-800'>App Dashboard</h1>
            </div>

            <ContentrowMovies/>

            <div className='row'>
                <LastmovieInDb/>
                <GenresInDb/>
                </div>
        </div>
    );
}

export default ContentRowTop;