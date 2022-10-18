import React from 'react';
import {Formik} from 'formik'
import * as yup from 'yup'

const Login = (props) => {
    return (
    <div>
        <h1>Login</h1>
        <LoginForm setAuthThunkCreator={props.setAuthThunkCreator} errors={props.errors}/>
    </div>
    )
}

export default Login;

const LoginForm = (props) => {
    const validationsSchema = yup.object().shape({
        login : yup.string().email('Введите верный email').required('Обязательно'),
        password : yup.string().typeError('Должно быть строкой').required('Обязательно'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно'),
    });

    return (
       <Formik initialValues={{
           login: '',
           password: '',
           confirmPassword: '',
       }}
       validateOnBlur
       onSubmit={(data) => props.setAuthThunkCreator(data.login, data.password)}
       validationSchema={validationsSchema}
       >
           {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
              <div>
                  <p>
                      <label>Login</label>
                      <input
                          type={'text'}
                          name={'login'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                      />
                      {touched.login && errors.login && <p>{errors.login}</p>}
                  </p>
                  <p>
                      <label>Password</label>
                      <input
                          type={'password'}
                          name={'password'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                      />
                      {touched.password && errors.password && <p>{errors.password}</p>}
                  </p>
                  <p>
                      <label>Confirm password</label>
                      <input
                          type={'password'}
                          name={'confirmPassword'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmPassword}
                      />
                      {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                  </p>
                  <button
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
                    type={'submit'}
                  >Отправить</button>
                  {props.errors ? <p>{props.errors}</p> : ''}
              </div>
           )}
       </Formik>
    )
}