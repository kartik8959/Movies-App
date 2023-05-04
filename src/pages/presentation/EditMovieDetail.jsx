import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { MovieService } from '../../services';
import { useParams } from 'react-router-dom';

export const EditMovieDetail = (props) => {
  const param = useParams();
  const [movieInfo, setMovieInfo] = useState(props?.movie);

  useEffect(()=>{
    setMovieInfo(props?.movie);
  },[props?.movie])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "actors" || name === "genre") {
      const values = value.split(",").map((val) => val.trim());
      setMovieInfo((prevState) => ({
        ...prevState,
        [name]: values,
      }));
    }
    else {
      setMovieInfo((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Call Edit Movie API
  const onFormSubmit = async (e) => {
    props.onUpdateMovieSubmit(movieInfo);
    props.setMovieDetail(movieInfo);
  
  };
  

  return (
    <>
      <Modal show={props.showModal} onHide={() => props.setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Movie Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={movieInfo?.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={movieInfo?.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Director</Form.Label>
              <Form.Control
                type="text"
                name="director"
                value={movieInfo?.director}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="number"
                name="year"
                value={movieInfo?.year}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Release Date</Form.Label>
              <Form.Control
                type="text"
                name="releaseDate"
                value={movieInfo?.releaseDate}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                name="genre"
                value={movieInfo?.genre}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Actors</Form.Label>
              <Form.Control
                type="text"
                name="actors"
                value={movieInfo?.actors}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Poster Url</Form.Label>
              <Form.Control
                type="text"
                name="poster_url"
                value={movieInfo?.poster_url}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="text"
                name="rating"
                value={movieInfo?.rating}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={onFormSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

