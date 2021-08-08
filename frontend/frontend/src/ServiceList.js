import './css/style.css'
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col
} from 'reactstrap';

import Grade12 from './assets/images/Grades/Grade12.jpeg';
import Grade13 from "./assets/images/Grades/Grade13.jpeg";
import PaperClass from "./assets/images/Grades/PaperClass.jpeg";
import Revision from "./assets/images/Grades/Revision.jpeg";
import Appointment from "./Appointement";
const ServiceList = () => {
    return (

        <div className="service-my">
                <div>
                    <div className="artists-header">
                        <span >Services</span>
                        <h2 >Services Menu</h2>
                        <p>This is our professional services we gives to you</p>
                    </div>
                </div>
                <div>
                    <CardDeck>
                        <Card>
                            <CardImg top width="100%" src={Grade12} alt="Card image cap" />
                            <CardBody className="card-body-my">
                                <CardTitle className="card-body-my">Grade12</CardTitle>
                                {/*<CardText>We Are professional for your Makeup </CardText>*/}

                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={Grade13} alt="Card image cap" />
                            <CardBody className="card-body-my">
                                <CardTitle>Grade13</CardTitle>
                                {/*<CardText>We Are professional for your Bread </CardText>*/}

                            </CardBody>
                        </Card>

                        <Card>
                            <CardImg top width="100%" src={PaperClass} alt="Card image cap" />
                            <CardBody className="card-body-my">
                                <CardTitle>PaperClass</CardTitle>
                                {/*<CardText>We Are professional for Haircut and Styling</CardText>*/}

                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={Revision} alt="Card image cap" />
                            <CardBody className="card-body-my">
                                <CardTitle>Revision</CardTitle>
                                {/*<CardText>We Are professional for your Body Treatment</CardText>*/}

                            </CardBody>
                        </Card>
                    </CardDeck>
                </div>
                <br/>
                {/*<div className="align-content-between">*/}
                {/*    <br/><br/>*/}
                {/*    <Appointment/>*/}
                {/*</div>*/}

            </div>

    );
}

export default ServiceList;
