export default function otpinputfocus(otp,onChangeOtp){
    const inputContainer = document.querySelectorAll(".otp-input");
    const button = document.querySelectorAll(".verify-otp-btn");
    // Convert NodeList to Array for easier manipulation
    const inputs = Array.from(inputContainer);

    // Update OTP value based on the inputs
    const updateOtpValue = () => {
        const otpValue = inputs.map((input) => input.value).join(""); // Combine all input values
        console.log(otpValue);
        onChangeOtp(otpValue); // Update the OTP using the provided function
    };

    inputContainer.forEach((input,index1)=>{
        input.addEventListener("keyup",(e)=>{
            const currentInput = input,
            nextInput = input.nextElementSibling,
            prevInput = input.previousElementSibling;

            if (currentInput.value.length > 1) {
                currentInput.value = "";
                return;
            }

            if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
                nextInput.removeAttribute("disabled");
                nextInput.focus();
            }

            if (e.key === "Backspace") {
                // iterate over all inputs again
                inputContainer.forEach((input, index2) => {
                  // if the index1 of the current input is less than or equal to the index2 of the input in the outer loop
                  // and the previous element exists, set the disabled attribute on the input and focus on the previous element
                  if (index1 <= index2 && prevInput) {
                    input.setAttribute("disabled", true);
                    input.value = "";
                    prevInput.focus();
                  }
                });
            }

            // Update the OTP value after every keyup
            updateOtpValue();
        })
    })

}