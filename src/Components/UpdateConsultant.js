import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../Services/ConsultantService"

export const UpdateConsultant = () => {
    const initialConsultantState = {
        id: null,
        name: "",
        position: null,
        identification: "",
        city: "",
        sex: "",
        age: ""
    };

    let { id } = useParams();

    const [currentConsultant, setCurrentConsultant] = useState(initialConsultantState);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        retrieveConsultant();
    }, []);

    const handleConsultantChange = (e) => {
        const { name, value } = e.target;
        setCurrentConsultant({ ...currentConsultant, [name]: value });
    };

    const retrieveConsultant = () => {
        API
            .get(`/consultant/${id}`)
            .then((response) => {
                setCurrentConsultant({
                    id: response.data.id,
                    name: response.data.name,
                    sex: response.data.sex,
                    position: response.data.position,
                    identification: response.data.identification,
                    city: response.data.city,
                    age: response.data.age
                });
                console.log(response.data);
            })
            .catch((e) => {
                console.error(e);
            });
    };

    const updateConsultant = () => {
        let data = {
            name: currentConsultant.name,
            sex: currentConsultant.sex,
            position: currentConsultant.position,
            identification: currentConsultant.identification,
            city: currentConsultant.city,
            age: currentConsultant.age
        };

        API
            .put(`/consultant/${id}`, data)
            .then((response) => {
                setCurrentConsultant({
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
                console.error(e);
            });
    };

    const newConsultant = () => {
        setCurrentConsultant(initialConsultantState);
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
                        Consultant Updated!
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
                        Update
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
                            value={currentConsultant.name}
                            onChange={handleConsultantChange}
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
                            value={currentConsultant.sex}
                            onChange={handleConsultantChange}
                            name="sex"
                        >
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
                            value={currentConsultant.position}
                            onChange={handleConsultantChange}
                            name="position"
                        >
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
                            value={currentConsultant.identification}
                            onChange={handleConsultantChange}
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
                        <label className="form-label" htmlFor="test">tets</label>
                        <input
                            type="text"
                            className="form-control"
                            id="test"
                            required
                            onChange={handleConsultantChange}
                            name="test"
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label className="form-label" htmlFor="age">Age</label>
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            required
                            value={currentConsultant.age}
                            onChange={handleConsultantChange}
                            name="age"
                        />
                    </div>
                    <button onClick={updateConsultant} className="btn btn-success mt-3">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};