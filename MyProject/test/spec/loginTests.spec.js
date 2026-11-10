import { expect } from "chai";
import mainPage from "../pageobjects/mainPage.js"
import loginComponents from "../pageobjects/pageComponents/loginComponents.js";
import navComponents from "../pageobjects/pageComponents/navComponents.js";
import { credentials } from "../data/credentials.js"
import { PASSWORD_ERROR_NOTIFICATION, EMAIL_ERROR_NOTIFICATION, NO_EMAIL_ERROR_NOTIFICATION, NO_PASSWORD_ERROR_NOTIFICATION, INCORRECT_EMAIL_ERROR_NOTIFICATION, PHONE_ERROR_NOTIFICATION, INCORRECT_PHONE_ERROR_NOTIFICATION, NOT_REGISTERED_PHONE_ERROR_NOTIFICATION, USER_ID, PHONE_REQUEST_CODE_NOTIFICATION } from '../helpers/constants.js'

describe('Login page tests', () => {
    beforeEach(async () => {
        await mainPage.navigate("https://oz.by/")
        await mainPage.click(await mainPage.loginButton);
    });

    describe('Positive login tests', () => {
        it('should login with valid data', async () => {
            await loginComponents.loginWithEmail(credentials.validLoginData.login, credentials.validLoginData.password);
            await navComponents.myOzButton.moveTo();
            expect(await mainPage.userName.getText()).to.equal(USER_ID)
            await navComponents.logoutFromAccount();
        })

        it('should login with valid mobile number', async () => {
            await loginComponents.loginWithMobileNumber(credentials.validPhoneNumber);
            expect(await loginComponents.mobileCodeField.getAttribute('placeholder')).to.equal(PHONE_REQUEST_CODE_NOTIFICATION)
        }) 
    })

    describe('Negative login tests', () => {
        it('should login with invalid password and get error message', async () => {
            await loginComponents.loginWithEmail(credentials.validLoginData.login, credentials.invalidLoginData.password);
            expect(await loginComponents.passwordErrorMessage.getText()).to.equal(PASSWORD_ERROR_NOTIFICATION)
        })

        it('should login with invalid email and get error message', async () => {
            await loginComponents.loginWithEmail(credentials.invalidLoginData.login, credentials.invalidLoginData.password);
            expect(await loginComponents.passwordErrorMessage.getText()).to.equal(EMAIL_ERROR_NOTIFICATION)
        })

        it('should login without email and get error message', async () => {
            await loginComponents.loginWithEmail("", credentials.invalidLoginData.password);
            expect(await loginComponents.passwordErrorMessage.getText()).to.equal(NO_EMAIL_ERROR_NOTIFICATION)
        })

        it('should login without password and get error message', async () => {
            await loginComponents.loginWithEmail(credentials.validLoginData.login, "");
            expect(await loginComponents.passwordErrorMessage.getText()).to.equal(NO_PASSWORD_ERROR_NOTIFICATION)
        })

        it('should login with incorrect email and get error message', async () => {
            await loginComponents.loginWithEmail(credentials.incorrectLoginData.login, credentials.invalidLoginData.password);
            expect(await loginComponents.passwordErrorMessage.getText()).to.equal(INCORRECT_EMAIL_ERROR_NOTIFICATION)
        })

        it('should login without mobile number and get error message', async () => {
            await loginComponents.loginWithMobileNumber(" ");
            expect(await loginComponents.passwordErrorMessage.getText()).to.equal(PHONE_ERROR_NOTIFICATION)
        })

        it('should login with incorrect mobile number and get error message', async () => {
            await loginComponents.loginWithMobileNumber(credentials.invalidPhoneNumber);
            expect(await loginComponents.passwordErrorMessage.getText()).to.equal(INCORRECT_PHONE_ERROR_NOTIFICATION)
        })

        it('should login with not registered mobile number and get error message', async () => {
            await loginComponents.loginWithMobileNumber(credentials.notRegisteredPhoneNumber);
            expect(await loginComponents.passwordErrorMessage.getText()).to.equal(NOT_REGISTERED_PHONE_ERROR_NOTIFICATION)
        })   
    })
})

