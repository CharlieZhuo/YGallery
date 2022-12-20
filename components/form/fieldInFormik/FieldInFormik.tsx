import { FormikProps } from "formik";
import { HTMLInputTypeAttribute } from "react";
import Field from "../field/Field";

/**
 * Type:type parameter of FormikProps
 * Key:formik field key
 *
 * formik:formik object
 * id:formik field key.Should be present as property name in initialValues.
 * label:text for <label> element.
 * inputType:type attribute for <input> element.
 * requiredMard:If true,label text will be followed by '*'.
 * 
 * Example:
 *  <Formik
          initialValues={{ email: "", password: "" }}>
            {(formik) => (
            <form
              onSubmit={formik.handleSubmit}
            >
              <FormInput
                formik={formik}
                id={"email"}
                label={"邮箱"}
                inputType={"email"}
              />
            </form>)}
    </formik>
 */

export interface FormInputPropType<FormikPropsType> {
  formik: FormikProps<FormikPropsType>;
  id: keyof FormikPropsType & string;
  label: string;
  inputType?: HTMLInputTypeAttribute;
  requiredMark?: boolean;
}

export default function FieldInFormik<Type>({
  id,
  formik,
  label,
  inputType,
}: FormInputPropType<Type>) {
  return (
    <Field
      id={id}
      hasError={Boolean(formik.errors[id] && formik.touched[id])}
      errorMessage={formik.touched[id] && formik.errors[id]?.toString()}
      isDisabled={formik.isSubmitting}
      labelText={label}
      {...formik.getFieldProps(id)}
      inputType={inputType}
    ></Field>
  );
}
