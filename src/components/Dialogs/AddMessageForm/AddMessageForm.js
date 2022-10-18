import React from 'react';
import {Formik} from 'formik'
import * as yup from 'yup'

const AddMessageForm = (props) => {
    // const validationsSchema = yup.object().shape({
    //     textMessage: yup.string().typeError('Должно быть строкой').required('Обязательно')
    // })
    //const validationsSchema ={() => ({})}
    return (
        <Formik initialValues={{
            textMessage: ''
        }}
        validateOnBlur
        //onSubmit={(values) => (values)} //props.addMessage
        //validationSchema={validationsSchema}
        >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
            <div>
                <textarea
                    onBlur={handleBlur}
                    name={'textMessage'}
                    onChange={handleChange}
                    value={values.textMessage}
                    placeholder={'Enter your submit'}
                    cols="80"
                />
                {touched.textMessage && errors.textMessage && <p>{errors.textMessage}</p>}
                <button
                    onClick={() => {
                        props.addMessage(values.textMessage)
                        values.textMessage = ''
                    }}
                    type={'submit'}
                >Add message</button>
            </div>
            )}
        </Formik>
    )
}

export default AddMessageForm;