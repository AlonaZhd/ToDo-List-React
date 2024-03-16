import React, { useState } from "react";
import Button from "../button/button";

import "./add-field.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";

const AddField = ({ toDos, setToDos }) => {
    const initialValues = {
        todo: "",
    };

    const validate = (values) => {
        const errors = {};

        if (values.todo.length < 3 || values.todo.length > 30) {
            errors.todo = "Текст повинен містити від 3 до 30 символів";
        }

        return errors;
    };

    const handleSubmit = (values, { resetForm }) => {
        const updateToDos = [
            ...toDos,
            { id: toDos.length + 1, todo: values.todo, checkbox: false },
        ];
        setToDos(updateToDos);
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
        >
            <Form>
                {/* Поле вводу з валідацією */}
                <div className="todo__field">
                    <Field
                        type="text"
                        id="todo"
                        name="todo"
                        className="field"
                    />
                    <Button type="submit" />
                </div>

                {/* Кнопка для подачі форми */}
                <ErrorMessage
                    name="todo"
                    component="div"
                    className="error-msg"
                />
            </Form>
        </Formik>
    );
};

export default AddField;
