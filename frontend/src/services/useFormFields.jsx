import { useState } from "react";

export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);
  return [
    fields,
    function ({ target }) {
      const targetValue =
        target.type === "checkbox"
          ? target.checked
          : target.value;

      setValues({
        ...fields,
        [target.id]: targetValue,
      });
    },
  ];
}
