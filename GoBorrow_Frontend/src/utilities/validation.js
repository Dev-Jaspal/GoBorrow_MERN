export function LoginValidation(values){
    const errors = {};

    if(!values.email)
    {
        errors.email = "Please enter email.";
    }
    else if(!validateEmail(values.email))
    {
        errors.email = "Please enter a valid email.";
    }

    if(!values.password){
        errors.password = "Please enter the password";
    }
    else if(!validatePassword(values.password)){
        errors.password = "Please enter a valid password";
    }

    return errors;
}

export function RegisterationValidation(values){

    const errors = {};

    if(!values.name || values.name == undefined)
    {
        errors.name = "Please enter name.";
    }

    if(!values.email)
    {
        errors.email = "Please enter email.";
    }
    else if(!validateEmail(values.email))
    {
        errors.email = "Please enter a valid email.";
    }

    if(!values.password){
        errors.password = "Please enter the password";
    }
    else if(!validatePassword(values.password)){
        errors.password = "Please enter a valid password";
    }

    if(!values.confirmPassword){
        errors.confirmPassword = "Please enter the confirm password";
    }
    else if(!validatePassword(values.confirmPassword)){
        errors.confirmPassword = "Please enter a valid confirm password";
    }

    if(values.password !== values.confirmPassword)
    {
        errors.confirmPassword = "Please enter same password and confirm password."
    }

    return errors;
}

export function ForgetPasswordValidation(values){
    const errors = {};

    if(!values.forgetPassword){
        errors.forgetPassword = "Please enter the password";
    }
    else if(!validatePassword(values.forgetPassword)){
        errors.forgetPassword = "Please enter a valid password";
    }

    if(!values.forgetConfirmPassword){
        errors.forgetConfirmPassword = "Please enter the confirm password";
    }
    else if(!validatePassword(values.forgetConfirmPassword)){
        errors.forgetConfirmPassword = "Please enter a valid confirm password";
    }

    if(values.forgetPassword !== values.forgetConfirmPassword)
    {
        errors.forgetConfirmPassword = "Please enter same password and confirm password."
    }

    return errors;
}

export function ProductValidation(values){
    const errors = {};
    if(!values.productName)
    {
        errors.productName = "Product name is required."
    }
    if(!values.productPrice)
    {
        errors.productPrice = "Product price is required."
    }
    if(!values.productCategory)
    {
        errors.productCategory = "Product category is required."
    }
    if(!values.productCondition)
    {
        errors.productCondition = "Product condition is required."
    }
    if(!values.productBoughtYear)
    {
        errors.productBoughtYear = "Product bought date is required."
    }
    if(!values.productlocation)
    {
        errors.productlocation = "Product location is required."
    }
    return errors;
}
const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

  const validatePassword = (password) => {
    //min 8 letter password, with at least a symbol, upper and lower case letters and a number
    var reg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return reg.test(password);
}