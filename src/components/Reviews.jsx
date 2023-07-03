import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsApi } from 'Api/ReviewsApi';

const Review = () => {
    const { id } = useParams();
    const [movieReviews, setMovieReviews] = useState(null);

    return (
        <main>
            {console.log(movieReviews)}
            {movieReviews && movieReviews.results?.length > 0 ? (
                <ul>
                    {movieReviews.results.map(({ author, content, id }) => (
                        <li key={id}>
                            <h3>Author: {author}</h3>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>{movieReviews?.results?.length === 0 ? 'No hay reviews para esta película' : 'Loading...'}</p>
            )}
            <ReviewsApi setMovieReviews={setMovieReviews} movieId={id} />
        </main>
    );
};

export default Review;
