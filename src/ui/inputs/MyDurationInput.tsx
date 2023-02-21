import { FC } from "react";
import { FieldHookConfig, useField } from "formik";

interface MyDurationInputProps {
  label: string;
}

export const MyDurationInput: FC<FieldHookConfig<string> & MyDurationInputProps> = ({ label, ...props }) => {

  const [field, meta] = useField(props);

  return (
    <>
       <label htmlFor={props.id || props.name}>{label}</label>
       <input className="" {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </>
  )
}
