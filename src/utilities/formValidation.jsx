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
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (!password) {
        return "Password is required";
    } else if (!passwordRegex.test(password)) {
        return "Password must be 8 to 15 chars, with uppercase, lowercase, number, and special character";
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