import * as Yup from 'yup';

const formSchema = Yup.object({
    username: Yup.string()
    .required("Username required")
    .min(6,"Username too short")
    .max(20,"Username too long"),
    password: Yup.string()
    .required("Password required")
    .min(6,"Password too short")
    .max(20,"Password too long"),
});

export default formSchema;