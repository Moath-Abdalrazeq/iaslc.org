let forms: formType[] = [];
let formFamily: formTypeFamily[] = [];
let formWork: formTypeWork[] = [];
export type formType = {
  fullName: string;
  gender: string;
  email: string;
  address: string;
  city: string;
  country: string;
  Zipcode: number;
};

export type formTypeFamily = {
  fullName: string;
  address: string;
  city: string;
  NOFamily: number;
  NOMale: number;
  NOFemale: number;
};
export type formTypeWork = {
  name: string;
  email: string;
  experience: string;
  tellus: string;
  message: string;
  Cv: File;
};
const FormSevice = {
  setForm(form: formType) {
    forms.push(form);
  },
  getForm() {
    return forms;
  },
  setFormFamily(form: formTypeFamily) {
    formFamily.push(form);
  },
  getFormFamily() {
    return formFamily;
  },

  setFormWork(form: formTypeWork) {
    formWork.push(form);
  },
  getFormWork() {
    return formWork;
  },
};
export default FormSevice;
