import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";

const SearchQuerySchema = Yup.object().shape({
  searchQuery: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function SearchBar({ onSearch }) {
  const notify = () => toast("необхідно ввести текст для пошуку зображень");

  const handleSubmit = (values, actions) => {
    const queryValue = values.searchQuery.toLowerCase().trim();
    onSearch(queryValue);
    actions.resetForm();
  };

  return (
    <header>
      <Formik
        initialValues={{ searchQuery: "" }}
        validationSchema={SearchQuerySchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              type="text"
              placeholder="Search images and photos"
              name="searchQuery"
              validate={(value) => {
                if (!value) {
                  notify();
                }
              }}
            />
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
      <Toaster />
    </header>
  );
}
