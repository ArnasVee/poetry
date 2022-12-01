import {Card, Form, Button, FloatingLabel, Dropdown, DropdownButton} from "react-bootstrap";
import {useState} from "react";
const Search=(props)=>{
    const [term, setTerm] = useState({
        criteria:'',
        term:''
    })

    const handleChange = (e)=>{
        setTerm(
            {
                ...term,
                [e.target.name]:e.target.value
            }
        )
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        props.onSearch(term)
    }

    console.log('is seracho komponento',term)
    return(
        <Card>
            <Card.Header>Poezijos Paieska</Card.Header>
            <Card.Body>
                <Form onSubmit={submitHandler}>
                    <Form.Group>
                        <select className="form-select" aria-label="Default select example" name="criteria" onChange={handleChange} value={term.criteria}>
                            <option selected>Open this select menu</option>
                            <option value="author">Author</option>
                            <option value="title">Title</option>
                            <option value="lines">text</option>
                        </select>
                    </Form.Group>
                    <Form.Group>
                        <input type="text" placeholder="Paieska..." name="term" value={term.search} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" variant="primary" className="mt-2">Ieskoti</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default Search