import { DialogTitle, DialogContent } from "@mui/material";

import * as yup from "yup";
import { Formik, Form } from "formik";

import FormTextField from "../../helperComponents/FormTextField";
import AddPostFormActions from "./AddPostFormActions";

const AddPostFormContent = () => {
  return (
    <Formik
      initialValues={{
        title: "",
        body: "",
        image: "",
      }}
      validationSchema={yup.object({
        title: yup.string().required(),
        body: yup.string().required(),
        image: yup.string().required(),
      })}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, isSubmitting, getFieldProps }) => (
        <Form noValidate>
          <DialogTitle textAlign="center" variant="h4">
            Create New Post
          </DialogTitle>

          <DialogContent>
            {/* <ErrorMessage errorMessage={error} /> */}

            <FormTextField
              type="text"
              name="title"
              label="Title"
              error={errors.title}
              touched={touched.title}
              getFieldProps={getFieldProps}
            />

            <FormTextField
              type="text"
              name="body"
              label="Body"
              multiline
              minRows={4}
              error={errors.body}
              touched={touched.body}
              getFieldProps={getFieldProps}
            />

            <FormTextField
              type="file"
              name="image"
              label="Image"
              error={errors.image}
              touched={touched.image}
              getFieldProps={getFieldProps}
              InputLabelProps={{ shrink: true }}
            />
          </DialogContent>

          <AddPostFormActions disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default AddPostFormContent;
