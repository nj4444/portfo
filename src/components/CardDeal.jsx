// import { card } from "../assets";
import styles, { layout } from "../style";
// import Button from "./Button";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardDeal = () => (
  <section className={layout.section}>
    <div id="mycard" className={layout.sectionInfo}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  </section>
);

export default CardDeal;
