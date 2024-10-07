// Function to validate the email
export const validateEmail = (email) => {
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);  // 'i' to make regex case insensitive
    if (!isEmailValid) {
      return "Email ID is not valid";
    }
    return null;
  };
  
  // Function to validate the password
  export const validatePassword = (password) => {
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
    if (!isPasswordValid) {
      return "Password is not valid";
    }
    return null;
  };

   // Function to validate the Name
//    export const validateName = (name) => {
//     const isNameValid = /^[a-zA-Z]+$/.test(name);
//     if (!isNameValid) {
//       return "Name is not valid";
//     }
//     return null;
//   };