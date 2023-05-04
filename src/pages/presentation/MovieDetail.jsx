import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { EditMovieDetail } from './EditMovieDetail';


export const  MovieDetail =(props) =>{
  const [showModal, setShowModal] = useState(false);
  const [movieDetail, setMovieDetail] = useState(
    props?.data 
  );

  useEffect(()=>{
    setMovieDetail(props.data);
  },[props.data]);

  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col md={4}>
            <Image src={movieDetail?.poster_url}  className='rounded img-fluid'/>
          </Col>
          <Col md={8}>
            <div className='d-flex align-items-center justify-content-between'>
              <h2>{movieDetail?.title}</h2>
            </div>
            <p>{movieDetail?.description}</p>
            <p><b>Director</b> : {movieDetail?.director}</p>
            <p><b>Year</b> : {movieDetail?.year}</p>
            <p><b>Genre</b> : {movieDetail?.genre?.toString()}</p>
            <p><b>Actors</b> : {movieDetail?.actors?.toString()}</p>
            <p><b>Rating</b> : {movieDetail?.rating}</p>
            <p><b>Release Date </b> : {movieDetail?.releaseDate}</p>
            <Button variant="primary" type='button' onClick={()=>setShowModal(true)}>Edit</Button>
          </Col>
        </Row>
      </Container>

     { showModal && 
     <EditMovieDetail
      movie={movieDetail}
      showModal={showModal}
      setShowModal={setShowModal}
      setMovieDetail={setMovieDetail}
      />}
    </>
  );
}



