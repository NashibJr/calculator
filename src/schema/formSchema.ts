import * as Yup from "yup";

const formSchema = Yup.object().shape({
  todoTitle: Yup.string()
    .required("Please enter the name of the task")
    .min(3, "Enter a valid task name"),
});

export default formSchema;
