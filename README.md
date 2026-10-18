**GENSHINHUB**
Project Topic: Game Website. Genshin Fan Website.
Team Name: Genshin Fans

**Team Members:**
1.	Zhaniya Karibzhanova 
2.	Assyltas Marat
3.	Aelin Shatenova
4.	Aruzhan Madeniyet

Group: MT-2505
Page ownership: Zhaniya Karibzhanova
Deployed URL: https://kzhaniya0807.github.io/genshinFanWebsite1/

**Task 4: Testing results**
1. Empty required fields
- Test input: Submit the form with required fields empty.
- Expected result: Submission is blocked and validation feedback appears.
- Actual result: The browser prevents submission and highlights the required fields.
2. Invalid email
- Test input: Enter letters without "@" in the Email field.
- Expected result: Invalid email format is rejected.
- Actual result: The browser displays an email validation message.
3. Contact message length
- Test input: Enter a message shorter than 10 characters and test a message exceeding 500 characters.
- Expected result: Messages outside the allowed length are rejected.
- Actual result: The form applies the specified message length restrictions.
4. Password shorter than 8 characters
- Test input: Enter a password containing fewer than 8 characters.
- Expected result: Password validation fails.
- Actual result: The browser prevents submission.
5. Passwords do not match
- Test input: Enter different values in Password and Confirm Password.
- Expected result: An error message appears and submission is blocked.
- Actual result: JavaScript displays a mismatch error, which clears after correction.
6. No country selected
- Test input: Submit the registration form without selecting a country.
- Expected result: Submission is blocked.
- Actual result: The required country field displays validation feedback.
7. All required values valid
- Test input: Complete all required fields with valid information.
- Expected result: The forms pass validation, and registration displays a demonstration success message.
- Actual result: Both forms accept valid input, and the registration success message appears.
8. Reset after errors
- Test input: Enter invalid data and click Reset.
- Expected result: Form values and custom validation feedback are cleared.
- Actual result: The form is reset and validation messages are cleared.
9. Mobile and desktop layouts
- Test input: View the forms at desktop, tablet and phone formats.
- Expected result: Forms remain readable and usable without unwanted horizontal overflow.
- Actual result: The responsive layout adapts to the tested screen sizes.
