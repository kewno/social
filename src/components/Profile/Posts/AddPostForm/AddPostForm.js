import React from 'react';
import {Formik} from 'formik'
import * as yup from 'yup'

const AddPostForm = (props) => {
    const validationsSchema = yup.object().shape({
        textPost: yup.string().typeError('Должно быть строкой').required('Обязательно')
    })
    return (
        <Formik initialValues={{
            textPost: ''
        }}
        validateOnBlur
        onSubmit={(values) => console.log(values)}
        validationSchema={validationsSchema}
        >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
            <div>
                <textarea
                    onBlur={handleBlur}
                    name={'textPost'}
                    onChange={handleChange}
                    value={values.textPost}
                    cols="30" rows="5"
                />
                {touched.textPost && errors.textPost && <p>{errors.textPost}</p>}
                <button
                    onClick={() => {
                        props.addPost(values.textPost)
                        values.textPost = ''
                    }}
                    type={'submit'}
                >Add posts</button>
            </div>
            )}
        </Formik>
    )
}

export default AddPostForm;