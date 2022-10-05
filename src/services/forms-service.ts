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
let FormSevice={
    setForm( form:formType ){
        forms.push(form)
    },
    getForm( ){
        return forms
    },
    editForm( index:number , form:formType ) {
       forms[index]=form
    }
}
 

export default FormSevice