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
                    sex: response.data.sex,
                    position: response.data.position,
                    identification: response.data.identification,
                    city: response.data.city,
                    age: response.data.age
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
                        Consultant Added! 
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
                <div className="container">
                    <div className="form-group mt-5">
                        <label className="form-label" htmlFor="name">Name</label>
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

                    <div className="form-group mt-3">
                        <label className="form-label" htmlFor="sex">Genre</label>
                        <select
                            type="text"
                            className="form-select"
                            id="sex"
                            required
                            value={consultant.sex}
                            onChange={handleMenuChange}
                            name="sex"

                        >
                            <option selected></option>
                            <option value={"Male"}>Male</option>
                            <option value={"Female"}>Female</option>
                        </select>
                    </div>

                    <div className="form-group mt-3">
                        <label className="form-label" htmlFor="position">Position</label>
                        <select
                            type="text"
                            className="form-select"
                            id="position"
                            required
                            value={consultant.position}
                            onChange={handleMenuChange}
                            name="position"
                        >
                            <option selected></option>
                            <option value={1}>Consultant</option>
                            <option value={2}>Director</option>
                            <option value={3}>Assistant manager</option>
                            <option value={4}>Developer</option>
                        </select>
                    </div>

                    <div className="form-group mt-3">
                        <label className="form-label" htmlFor="identification">Identification</label>
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

                    <div className="form-group mt-3">
                        <label className="form-label" htmlFor="city">City</label>
                        <select
                            type="text"
                            className="form-select"
                            id="city"
                            required
                            value={consultant.city}
                            onChange={handleMenuChange}
                            name="city"
                        >
                            <option selected></option>
                            <option value={"Bogotá"}>Bogotá</option>
                            <option value={"Medellín"}>Medellín</option>
                        </select>
                    </div>

                    <div className="form-group mt-3">
                        <label className="form-label" htmlFor="age">Age</label>
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
                        className="btn btn-success mt-3"
                    >
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};