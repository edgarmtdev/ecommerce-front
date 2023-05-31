import { Form, Formik } from "formik";
import { useUploadProduct } from "modules/admin/hooks";
import { CATEGORIES_OPTIONS } from "../modals/models/categories";
import InputField from "./inputs/InputField";
import ButtonUpload from "./buttons/ButtonUpload";
import InputSelect from "./inputs/InputSelect";
import DragAndDrop from "../dnd/DragAndDrop";

export default function UploadForm() {
  const { onHandleChange, onhandleSubmit } = useUploadProduct();
  return (
    <Formik
      initialValues={{
        name: "",
        imgURL: [],
        price: 0.0,
        amount: 0,
        categories: [],
      }}
      onSubmit={onhandleSubmit}
    >
      <Form className="flex flex-col gap-7 mt-10 w-full">
        <InputField
          name="name"
          type="text"
          placeholder="Write product name..."
          label="Product name"
        />
        <InputField
          name="imgURL"
          type="text"
          placeholder="Set a url image"
          label="Image"
        />
        <InputField
          name="price"
          type="number"
          placeholder="Write the product price..."
          label="Price"
        />
        <InputField
          name="amount"
          type="number"
          placeholder="Write the amount price..."
          label="Amount"
        />
        <InputSelect
          {...{
            id: "categories",
            name: "categories",
            placeholder: "Categories",
            isMulti: true,
            options: CATEGORIES_OPTIONS,
            onChange: onHandleChange,
          }}
        />
        <DragAndDrop />
        <ButtonUpload />
      </Form>
    </Formik>
  );
}