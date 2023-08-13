import * as yup from "yup";
import { Form, Formik } from "formik";

import { Alert, Box, Button, TextField } from "@mui/material";

import { addCommnet } from "../../store/postsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

type Props = {
  post_id: number;
};

const AddComment = ({ post_id }: Props) => {
  const dispatch = useAppDispatch();
  const { commentError } = useAppSelector((state) => state.posts);

  return (
    <Formik
      initialValues={{
        body: "",
      }}
      validationSchema={yup.object({
        body: yup.string().required(),
      })}
      onSubmit={async (values) => {
        await dispatch(addCommnet({ post_id, values }));
      }}
    >
      {({ handleChange, errors, isSubmitting }) => (
        <Form noValidate>
          <Box mb={2}>
            <TextField
              size="small"
              label="Write Your Comment"
              name="body"
              onChange={handleChange}
              sx={{ flex: 1 }}
              multiline
              fullWidth
              minRows={4}
              error={!!errors.body}
              helperText={errors.body}
            />

            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              sx={{ ml: "auto", my: 2, display: "block" }}
            >
              Add Commment
            </Button>

            {commentError && <Alert severity="error">{commentError}</Alert>}
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default AddComment;
