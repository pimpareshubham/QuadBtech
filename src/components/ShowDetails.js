import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ShowDetails.css'

const ShowDetails = () => {
    const { id } = useParams();
    const [showDetails, setShowDetails] = useState({});
    const [showBookingModal, setShowBookingModal] = useState(false);

    useEffect(() => {
        const storedShows = JSON.parse(localStorage.getItem('response')) || [];
        const selectedShow = storedShows.find((entry) => entry.show.id.toString() === id);

        if (selectedShow) {
            setShowDetails(selectedShow.show);
        }
    }, [id]);

    const handleBookTicket = () => {
        setShowBookingModal(true);
    };

    const handleModalClose = () => {
        setShowBookingModal(false);
    };

    const handleBookingFormSubmit = (event) => {

        event.preventDefault();
        console.log('Booking form submitted for:', showDetails.name);

        handleModalClose();
    };

    return (

        <div className='card-3'>

            <div className="container mt-5 p-5">
                <h2>{showDetails.name || 'No Name'}</h2>
                <p>ID: {showDetails.id || 'N/A'}</p>
                <p>Language: {showDetails.language || 'N/A'}</p>
                <p>Genres: {showDetails.genres ? showDetails.genres.join(', ') : 'N/A'}</p>
                <p>Status: {showDetails.status || 'N/A'}</p>
                <p>Runtime: {showDetails.runtime ? `${showDetails.runtime} minutes` : 'N/A'}</p>
                <p>Premiered: {showDetails.premiered || 'N/A'}</p>
                <p>Ended: {showDetails.ended || 'N/A'}</p>
                <p>
                    Official Site:{' '}
                    <a href={showDetails.officialSite} target="_blank" rel="noopener noreferrer">
                        {showDetails.officialSite || 'N/A'}
                    </a>
                </p>
                <p>
                    Summary:{' '}
                    <span dangerouslySetInnerHTML={{ __html: showDetails.summary || 'N/A' }} />
                </p>


                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#bookingModal"
                    onClick={handleBookTicket}
                >
                    Book Ticket
                </button>


                <div className="modal fade sd m-h" id="bookingModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog ">
                        <div className="modal-content card-2 ">
                            <div className="modal-header m-h">
                                <h1 className="modal-title fs-5" id="exampleModalLabel text-primary">Book Ticket - {showDetails.name}</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModalClose}></button>
                            </div>
                            <div className="modal-body">

                                <form onSubmit={handleBookingFormSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="movieName">Movie Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="movieName"
                                            value={showDetails.name || ''}
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="language">Language</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="language"
                                            value={showDetails.language || 'N/A'}
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="genres">Genres</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="genres"
                                            value={showDetails.genres ? showDetails.genres.join(', ') : 'N/A'}
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="runtime">Runtime</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="runtime"
                                            value={showDetails.runtime ? `${showDetails.runtime} minutes` : 'N/A'}
                                            readOnly
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary mt-3">
                                        Confirm Booking
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ShowDetails;
