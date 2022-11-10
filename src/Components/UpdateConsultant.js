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
        age: "",
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
                console.log(currentConsultant);
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
                <div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
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

                    <div className="form-group">
                        <label htmlFor="sex">Genre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="sex"
                            required
                            value={currentConsultant.sex}
                            onChange={handleConsultantChange}
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
                            value={currentConsultant.position}
                            onChange={handleConsultantChange}
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
                            value={currentConsultant.identification}
                            onChange={handleConsultantChange}
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
                            value={currentConsultant.city}
                            onChange={handleConsultantChange}
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
                            value={currentConsultant.age}
                            onChange={handleConsultantChange}
                            name="age"
                        />
                    </div>
                    <button onClick={updateConsultant} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};