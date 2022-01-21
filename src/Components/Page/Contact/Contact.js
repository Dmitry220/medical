import React from 'react';
import contact from './contact.module.css'
import { Formik, Form, Field } from 'formik';

const validateEmail = value => {
	let error;
	if (!value) {
		error = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
		error = 'Invalid email address';
	}
	return error;
}

const validateText = value => {
	let error;
	if (!value) error = 'Required';

	return error;
}

const submit = async (values) => {
	await new Promise((r) => setTimeout(r, 500));
	alert(JSON.stringify(values, null, 5));
}

export const Contact = () => {

	return (
		<section className={contact.page__contact + ' ' + contact.contact} id={"form"}>
			<div className={contact.contact__container}>
				<h2 className={contact.contact__title + " title"}>Contact us</h2>
				<ContactForm />
			</div>
		</section>
	);
};

const TextArea = (props) => (
	<textarea className={contact.form__control + ' ' + contact.form__control_textarea} {...props} />
);

const ContactForm = () => {
	return (
		<Formik
			initialValues={{ email: '', username: '', subject: '', message: '' }}
			onSubmit={submit}
		>
			{({ errors, touched, isValidating }) => (
				<Form className={contact.contact__form + " form"}>
					<Field type="email" name="email" className={contact.form__control} placeholder="Email" validate={validateEmail} />
					{errors.email && touched.email && <div className={contact.form__textError}>{errors.email}</div>}
					<Field name="username" className={contact.form__control} placeholder="Name" validate={validateText} />
					{errors.username && touched.username && <div className={contact.form__textError}>{errors.username}</div>}
					<Field name="subject" className={contact.form__control} placeholder="Subject" validate={validateText} />
					{errors.subject && touched.subject && <div className={contact.form__textError}>{errors.subject}</div>}
					<Field as={TextArea} name="message" placeholder="Your message" validate={validateText} />
					{errors.message && touched.message && <div className={contact.form__textError}>{errors.message}</div>}
					<button type="submit" className={contact.form__btn}>Submit</button>
				</Form>
			)}
		</Formik>
	)
}