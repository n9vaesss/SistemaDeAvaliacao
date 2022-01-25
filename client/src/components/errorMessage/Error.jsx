import { ErrorMessage } from 'formik';

import './Error.css'

export const Error = ({ name }) => {
    return (
        <ErrorMessage
            component="span"
            name={name}
            className="form-error"
        />
    )
}