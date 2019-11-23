import React from 'react';
import { CardDeck, Card, Button} from 'react-bootstrap';
import  image1 from './assets/download.jpg';
import  image2 from './assets/download (1).jpg';
import  image3 from './assets/download (2).jpg'

export const Home = () => (
  <div class="container">
  	<div class="row">
  		<div class="col-md-4">
  		<Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={image1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary" href="/somewhere">Go somewhere</Button>
        </Card.Body>
      </Card>
  		</div>
  		
  		<div class="col-md-4">
  			<Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={image2} />
          <Card.Body>
            <Card.Title>Card Title1</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary" href="/somewhere">Go somewhere</Button>
          </Card.Body>
        </Card>
  		</div>

  		<div class="col-md-4">
  			<Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={image3} />
          <Card.Body>
            <Card.Title>Card Title2</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary" href="/somewhere">Go somewhere</Button>
          </Card.Body>
        </Card>
  		</div>
  	</div>
  </div>
)
