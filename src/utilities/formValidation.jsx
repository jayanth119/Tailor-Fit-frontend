// /D:/Git/Tailor-Fit-frontend/src/utilities/formValidation.jsx

export const validateName = (name) => {
    if (!name) {
        return "Name is required";
    } else if (name.length < 2) {
        return "Name must be at least 2 characters long";
    }
    return "";
};

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        
        return "Email is required";

    } else if (!emailRegex.test(email)) {
        return "Email is not valid";
    }
    return "";
};

export const validatePassword = (password) => {
    const passwordRegex = /^[A-Za-z](?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/
    ;
    if (!password) {
        return "Password is required";
    } else if (!passwordRegex.test(password)) {
        return "Password must be at least 6 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character";
    }
    return "";
};

export const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword) {
        return "Confirm Password is required";
    } else if (password !== confirmPassword) {
        return "Passwords do not match";
    }
    return "";
};

export const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneNumber) {
        return "Phone number is required";
    } else if (!phoneRegex.test(phoneNumber)) {
        return "Phone number is not valid";
    }
    return "";
};

export const validateAddress = (address) => {
    if (!address) {
        return "Address is required";
    }
    return "";
};