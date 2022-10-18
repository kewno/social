import React from 'react';
import {Formik} from 'formik'
import * as yup from 'yup'

const SetStatusForm = (props) => {
    const validationsSchema = yup.object().shape({
        textStatus: yup.string().typeError('Должно быть строкой')
    })
    return (
        <Formik initialValues={{
            textStatus: props.status
        }}
        validateOnBlur
        onSubmit={(values) => console.log(values)}
        validationSchema={validationsSchema}
        >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
            <div>
                <input
                    autoFocus={true}
                    onBlur={(e) => {
                        handleBlur(e);
                        props.deactivateEditMode(values.textStatus);
                    }}
                    name={'textStatus'}
                    //onChange={handleChange}
                    onChange={handleChange}
                    value={values.textStatus}
                />
            </div>
            )}
        </Formik>
    )
}

export default SetStatusForm;