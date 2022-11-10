import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Table } from "react-bootstrap"

import API from "../Services/ConsultantService"

export const ConsultantList = () => {
    const navigate = useNavigate();

    const [consultants, setConsultants] = useState([]);
    const [deleted, setDeleted] = useState(false);


    const deleteConsultant = (id) => {
        API
            .delete(`/consultant/${id}`)
            .then((response) => {
                setDeleted(true);
                retrieveAllConsultants();
            })
            .catch((e) => {
                console.error(e);
            });
    };


    useEffect(() => {
        retrieveAllConsultants();
    }, []);

    const retrieveAllConsultants = () => {
        API.get(`/consultant`)
            .then((response) => {
                setConsultants(response.data);
            })
            .catch((e) => {
                console.error(e);
            })
    };

    const updateConsultant = (id) => {
        navigate(`/update/${id}`);
    };

    return (
        <div className="col-md-8 m">
            <Table>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Consultant Name</th>
                        <th scope="col">Position</th>
                        <th scope="col">identification</th>
                        <th scope="col">City</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {consultants.map((consultant) => {
                        return (
                            <tr key="">
                                <th scope="row">{consultant.id}</th>
                                <td>{consultant.name}</td>
                                <td>{consultant.position_name}</td>
                                <td>{consultant.identification}</td>
                                <td>{consultant.city}</td>
                                <td>{consultant.sex}</td>
                                <td>{consultant.age}</td>
                                <td>
                                    <i
                                        className="fa fa-pencil-square text-primary d-inline"
                                        aria-hidden="true"
                                        type="button"
                                        onClick={() => updateConsultant(consultant.id)}
                                    ></i>
                                    <i
                                        className="fa fa-trash-o text-danger d-inline mx-3"
                                        aria-hidden="true"
                                        type="button"
                                        onClick={() => deleteConsultant(consultant.id)}
                                    ></i>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};
