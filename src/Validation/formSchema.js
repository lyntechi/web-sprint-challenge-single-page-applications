import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(2)
    .required('Name is required'),
    size: yup
    .string()
    .oneOf(['small', 'medium', 'large']),
    instructions: yup
    .string()
    // .required('If no instructions enter N/A')

})

export default formSchema