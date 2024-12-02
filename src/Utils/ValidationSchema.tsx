import * as Yup from 'yup';

export const validationSchema = Yup.object({
  fullName: Yup.string()
    .required('Full name is required')
    .min(3, 'Name should be at least 3 characters'),
  mobileNumber: Yup.string()
    .required('Mobile number is required')
    .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  coverLetter: Yup.mixed().required('Cover letter is required'),
  resume: Yup.mixed().required('Resume is required'),
});

// Define the TypeScript type for the form data
export type FormData = Yup.InferType<typeof validationSchema>;
