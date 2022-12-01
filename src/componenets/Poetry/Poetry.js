import {Card, Button} from "react-bootstrap";
const Poetry=(props)=>{
    return(
        <Card>
            <Card.Body>
                <div>
                    <p>author: {props.author}</p>
                    <p>title: {props.title}</p>
                    <p>text: {props.lines}</p>
                </div>
            </Card.Body>
        </Card>
    )
}
export default Poetry