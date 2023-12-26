const buildFormData = (formData, obj, parentKey = "") => {
  if (Array.isArray(obj)) {
    obj.forEach((element) => {
      buildFormData(formData, element, parentKey);
    });
  } else if (typeof obj === "object" && !(obj instanceof File)) {
    Object.keys(obj).forEach((key) => {
      buildFormData(
        formData,
        obj[key],
        parentKey ? `${parentKey}.${key}` : key
      );
    });
  } else {
    if (obj == null) {
      return;
    }

    const value =
      typeof obj === "number" || typeof obj === "boolean"
        ? obj.toString()
        : obj;
    formData.append(parentKey, value);
  }
};

export const objectToFormData = (obj) => {
  const formData = new FormData();

  buildFormData(formData, obj);

  return formData;
};
