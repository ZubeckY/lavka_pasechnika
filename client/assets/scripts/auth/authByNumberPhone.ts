import firebase from "firebase/compat"
import generateCode from "~/assets/scripts/generateCode"

export default function authByNumberPhone (phoneNumber: string) {
  firebase.auth().settings.appVerificationDisabledForTesting = true;

  const testVerificationCode = String(generateCode(100_000, 999_999))
  const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

  return firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, appVerifier)
    .then ((confirmationResult) => {
      return confirmationResult.confirm(testVerificationCode)
    })
    .catch((error) => {
      console.log(error)
    });
}

