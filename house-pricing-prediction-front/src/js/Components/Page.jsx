import axios from 'axios';
import {useState} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';


export default function Page() {
  const [numberOfRooms, setNumberOfRooms] = useState(null);
  const [squareMeters, setSquareMeters] = useState(null);
  const [hasYard, setHasYard] = useState(false);
  const [hasPool, setHasPool] = useState(false);
  const [floors, setFloors] = useState(null);
  const [cityPartRange, setCityPartRange] = useState(null);
  const [made, setMade] = useState(null);
  const [basement, setBasement] = useState(null);
  const [garage, setGarage] = useState(null);

  const [predictedPrice, setPredictedPrice] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const inputData = {
      numberOfRooms: parseInt(numberOfRooms),
      hasYard: hasYard,
      hasPool: hasPool,
      floors: parseInt(floors),
      cityPartRange: parseInt(cityPartRange),
      made: parseInt(made),
      basement: parseInt(basement),
      squareMeters: parseInt(squareMeters),
      garage: parseInt(garage)
    };
    console.log(inputData);
  
    try {
      const response = await fetch("http://127.0.0.1:8000/predict/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputData)
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const responseData = await response.json();
      setPredictedPrice(responseData.predicted_price);
      console.log('Response from backend: ', responseData);
    } catch(error) {
      console.log('Error: ', error);
    }
  }
  

  return (
    <form className="page" method='post'>
      <Row>
        <Col>
          <div className="input-field-label">Square meters</div>
          <Form.Control 
            id="square-meters-input"
            value={squareMeters}
            className="input-field row-6" 
            type="number" 
            onChange={(event) => setSquareMeters(event?.target?.value)}
            placeholder="Square meters"
          />
        </Col>
        <Col>
          <div className="input-field-label">Floors</div>
          <Form.Control 
            id="floors-input"
            value={floors}
            className="input-field row-6"
            type="number"
            onChange={(event) => setFloors(event?.target?.value)}
            placeholder="Floors"
          />
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <div className="input-field-label">Number of rooms</div>
          <Form.Control 
            id="number-rooms-input"
            value={numberOfRooms}
            className="input-field row-6" 
            type="number" 
            onChange={(event) => setNumberOfRooms(event?.target?.value)}
            placeholder="Number of rooms"
          />
        </Col>
        <Col>
          <div className="input-field-label">City part range</div>
          <Form.Control 
            id="city-part-range-input"
            value={cityPartRange}
            className="input-field row-6"
            type="text"
            onChange={(event) => setCityPartRange(event?.target?.value)}
            placeholder="City part range"
          />
        </Col>
        <Col>
          <div className="input-field-label">Year made</div>
          <Form.Control 
            id="year-made-input"
            value={made}
            className="input-field row-6"
            type="number"
            onChange={(event) => setMade(event?.target?.value)}
            placeholder="Year made"
          />
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <div className="input-field-label">Basement (square meters)</div>
          <Form.Control 
            id="basement-input"
            value={basement}
            className="input-field row-6" 
            type="number" 
            onChange={(event) => setBasement(event?.target?.value)}
            placeholder="Basement (square meters)"
          />
        </Col>
        <Col>
          <div className="input-field-label">Garage (square meters)</div>
          <Form.Control 
            id="garage-input"
            value={garage}
            className="input-field row-6"
            type="number"
            onChange={(event) => setGarage(event?.target?.value)}
            placeholder="Garage (square meters)"
          />
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col className="d-flex align-items-center justify-content-center">
          <Form.Check 
            id="pool-check"
            checked={hasPool}
            className="d-flex" 
            type="checkbox" 
            onChange={(event) => event.target.checked ? setHasPool(true): setHasPool(false)}
          /><div className="checkbox-label">Pool</div>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <Form.Check 
            id="yard-check"
            checked={hasYard}
            className="d-flex"
            type="checkbox"
            onChange={(event) => event.target.checked ? setHasYard(true): setHasYard(false)}
          /><div className="checkbox-label">Yard</div>
        </Col>
      </Row>
      <Button className='generate-meme-btn' type='submit' onClick={handleSubmit}>
        Predict House Price
      </Button>
      {predictedPrice && <div className='mt-5 text-center'>
        <h3 className='prediction'>Predicted house price: {Math.round(predictedPrice*100)/100} &euro;</h3>
      </div>}
    </form>
  )
}