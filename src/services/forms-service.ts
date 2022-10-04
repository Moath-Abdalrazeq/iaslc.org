let forms:formType[]=[]
export  type formType ={
    fullName :string  ,
    gender:string ,
    email :string,
     address :string ,
     city :string ,
     country :string ,
     Zipcode :number
}
const FormSevice={
    setForm( form:formType ){
        forms.push(form)
    },
    getForm( ){
        return forms
    }
}
 

export default FormSevice