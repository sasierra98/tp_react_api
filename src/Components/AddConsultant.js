import React, { useState } from "react";
import API from "../Services/ConsultantService";

export const AddConsultant = () => {
    const initialConstantState = {
        id: null,
        name: "",
        position: null,
        identification: "",
        city: "",
        sex: "",
        age: "",
    };

    const [consultant, setConsultant] = useState(initialConstantState);
    const [submitted, setSubmitted] = useState(false);

    const handleMenuChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setConsultant({ ...consultant, [name]: value });
    };

    const submitMenu = () => {
        let data = {
            name: consultant.name,
            sex: consultant.sex,
            position: consultant.position,
            identification: consultant.identification,
            city: consultant.city,
            age: consultant.age
        };

        API
            .post(`/consultant`, data)
            .then((response) => {
                console.log(response)
                setConsultant({
                    id: response.data.id,
                    name: response.data.name,
                    description: response.data.description,
                    price: response.data.price,
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch((e) => {
                // console.error(e);
            });
    };

    const newConsultant = () => {
        setConsultant(initialConstantState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <div
                        className="alert alert-success alert-dismissible fade show"
                        role="alert"
                    >
                        Menu Added! 
                        <a href="/">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="alert"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </a>
                    </div>
                    <button className="btn btn-success" onClick={newConsultant}>
                        Add
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            value={consultant.name}
                            onChange={handleMenuChange}
                            name="name"

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="sex">Genre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="sex"
                            required
                            value={consultant.sex}
                            onChange={handleMenuChange}
                            name="sex"

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="position">Position</label>
                        <input
                            type="text"
                            className="form-control"
                            id="position"
                            required
                            value={consultant.position}
                            onChange={handleMenuChange}
                            name="position"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="identification">Identification</label>
                        <input
                            type="number"
                            className="form-control"
                            id="identification"
                            required
                            value={consultant.identification}
                            onChange={handleMenuChange}
                            name="identification"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            className="form-control"
                            id="city"
                            required
                            value={consultant.city}
                            onChange={handleMenuChange}
                            name="city"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            required
                            value={consultant.age}
                            onChange={handleMenuChange}
                            name="age"
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={submitMenu}
                        className="btn btn-success mt-2"
                    >
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};