import * as yup from "yup"

const validationSchema = yup.object({
    fullName: yup.string('').required('ایمیل الزامی است.'),
    email: yup.string('').email('ایمیل معتبر نیست.').required('ایمیل الزامی است.'),
    subject: yup.string('').required('عنوان پیام الزامی است.'),
    massage: yup.string('').required('متن پیام الزامی است.'),
    recaptcha: yup.string('').required('تایید هویت الزامی است'),
});

export default validationSchema;
