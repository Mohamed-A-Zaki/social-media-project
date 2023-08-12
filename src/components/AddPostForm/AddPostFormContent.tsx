import { useRef } from "react";
import { DialogTitle, DialogContent } from "@mui/material";

import * as yup from "yup";
import { Formik, Form } from "formik";

import AddPostFormActions from "./AddPostFormActions";
import ErrorMessage from "../../helperComponents/ErrorMessage";
import FormTextField from "../../helperComponents/FormTextField";

import { createPost } from "../../store/postsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const AddPostFormContent = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.posts);
  const image_file = useRef<HTMLInputElement | null>(null);

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
        const formData = new FormData();

        formData.append("title", values.title);
        formData.append("body", values.body);
        formData.append("image", image_file.current?.files![0] as File);

        await dispatch(createPost(formData));
      }}
    >
      {({ errors, touched, isSubmitting, getFieldProps }) => (
        <Form noValidate>
          <DialogTitle textAlign="center" variant="h4">
            Create New Post
          </DialogTitle>

          <DialogContent>
            <ErrorMessage errorMessage={error} />

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
              inputRef={image_file}
            />
          </DialogContent>

          <AddPostFormActions disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default AddPostFormContent;
