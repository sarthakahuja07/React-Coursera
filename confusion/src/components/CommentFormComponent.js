import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik } from 'formik';
import { Label, FormGroup, Col, Input } from 'reactstrap'

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Name is Required';
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    }
    else if (values.name.length < 3) {
        errors.name = 'Must be 3 characters or less';
    }

    return errors;
};

const CommentForm = (props) => {

    const [isModalOpen, setisModalOpen] = useState(false);

    const toggleModal = () => {
        setisModalOpen(!isModalOpen);
    }
    const formik = useFormik({
        initialValues: {
            rating: '1',
            name: '',
            comment: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            toggleModal()
        },
    });
    return (
        <div className="mt-3 ">
            <button className="btn btn-primary" onClick={toggleModal} ><i class="fa fa-pencil" aria-hidden="true"></i> Sumbit Comment</button>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>

                <ModalBody>
                    <form onSubmit={formik.handleSubmit}>
                        <FormGroup row>
                            <Label htmlfor="rating" sm={2}>Rating</Label>
                            <Col sm={10}>
                                <Input id="rating"
                                    name="rating"
                                    type="select"
                                    onChange={formik.handleChange}
                                    value={formik.values.rating} >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlfor="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input id="name"
                                    name="name"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.name} >
                                </Input>
                                {formik.errors.name ? <div className="text-danger">{formik.errors.name}</div> : null}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlfor="comment" sm={2}>Comment</Label>
                            <Col sm={10}>
                                <Input id="comment"
                                    name="comment"
                                    type="textarea"
                                    rows="6"
                                    onChange={formik.handleChange}
                                    value={formik.values.comment} >
                                </Input>
                            </Col>
                        </FormGroup>
                        <Col sm={{ size: 10, offset: 2 }}>
                        <button type="submit" className=" btn btn-warning ">Submit</button>
                        </Col>
                    </form>
                </ModalBody>

            </Modal>
        </div >
    );

}



export default CommentForm;