import { Col, Container, Row } from "reactstrap";
import "./Error.css"
export default function Error(){

    return(
        <div>
            <Container>
                <Row>
                    <div className="error">
                        <h1> 404</h1>
                        <h4>This is somewhat embarrassing, isn’t it?</h4>
                        <h6> It looks like nothing was found at this location. Maybe try a search? Search for posts Search</h6>
                        <button>Back to homepage</button>
                    </div>
                    
                </Row>
            </Container>
        </div>
    )
}