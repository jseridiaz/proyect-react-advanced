import { useCallback, useReducer, useRef } from "react"
import styled from "styled-components"

import Button from "../../components/atoms/button/button"
import H2 from "../../components/atoms/H2/H2"
import Li from "../../components/atoms/Li/Li"
import Parraf from "../../components/atoms/Parraf/Parraf"
import InputForm from "../../components/organisms/InputForm/InputForm"
import Seo from "../../components/organisms/Seo/Seo"
import useBoolean from "../../utils/customHooks/useBoolean/useBoolean"
import { regex } from "../../utils/functions/regex"
import useReducerLogin, {
   INITIAL_STATE,
} from "../../utils/useReducer/useReducerLogin"

const Login = () => {
   const [toggle, setToggle] = useBoolean(false)

   const [state, dispatch] = useReducer(useReducerLogin, INITIAL_STATE)
   const { errorName, errorSurname, errorEmail, errorPassword } = state
   const inputDataName = useRef()
   const inputDataSurname = useRef()
   const inputDataEmail = useRef()
   const inputDataPassword = useRef()

   const setAddError = useCallback(
      (errorType, payloadValue) =>
         dispatch({ type: errorType, payload: payloadValue }),
      [],
   )

   const handleChange = useCallback(
      (input, typeInput = "text") => {
         const { value } = input.current
         if (typeInput == "text") {
            if (value.length > 0) {
               input == inputDataName
                  ? setAddError("ADD_ERROR_NAME", "clear")
                  : setAddError("ADD_ERROR_SURNAME", "clear")
            } else {
               input == inputDataName
                  ? setAddError("ADD_ERROR_NAME")
                  : setAddError("ADD_ERROR_SURNAME")
            }
         }

         if (typeInput == "email") {
            if (
               value.length > 0 &&
               value.includes("@") &&
               value.lastIndexOf(".") > value.indexOf("@") &&
               value.lastIndexOf(".") !== value.length - 1
            ) {
               setAddError("ADD_ERROR_EMAIL", "clear")
            } else {
               setAddError("ADD_ERROR_EMAIL")
            }
         }

         if (typeInput == "password") {
            if (regex.test(value)) {
               setAddError("ADD_ERROR_PASSWORD", "clear")
            } else {
               setAddError("ADD_ERROR_PASSWORD")
            }
         }
      },
      [inputDataName],
   )
   const handleSubmit = e => {
      console.log(inputDataName.current)

      e.preventDefault()
      if (inputDataName.current.value.length == 0) {
         setAddError("ADD_ERROR_NAME")
      } else {
         setAddError("ADD_ERROR_NAME", "clear")
      }
      if (inputDataSurname.current.value.length == 0) {
         setAddError("ADD_ERROR_SURNAME")
      } else {
         setAddError("ADD_ERROR_SURNAME", "clear")
      }
      if (!inputDataEmail.current.value) {
         setAddError("ADD_ERROR_EMAIL")
      } else {
         console.log(inputDataEmail)
         setAddError("ADD_ERROR_EMAIL", "clear")
      }
      if (regex.test(inputDataPassword.current.value)) {
         setAddError("ADD_ERROR_PASSWORD", "clear")
      } else {
         setAddError("ADD_ERROR_PASSWORD")
      }
      setToggle(true)
   }
   return (
      <>
         <Seo
            title='Log in🔑 - Fashion Store'
            description='Take a look to your favourite articles of Fashion Store online shop 👕❤️ '
            img='https://res.cloudinary.com/ddybbosdk/image/upload/v1722546207/Proyect%2012%20react/images/zara-model_1_rzgbw0.avif'
         />
         <Main id='main-login-register'>
            <Form onSubmit={handleSubmit}>
               <H2 id='title-form-register'>Sign up here</H2>
               <Parraf>and get started in our Shop</Parraf>
               <InputForm
                  idInput='name'
                  idName='Your Name'
                  reference={inputDataName}
                  error={errorName}
                  action={() => toggle && handleChange(inputDataName)}
               />
               <InputForm
                  idInput='surname'
                  idName='Your Surname'
                  reference={inputDataSurname}
                  error={errorSurname}
                  action={() => toggle && handleChange(inputDataSurname)}
               />
               <InputForm
                  idInput='email'
                  idName='Your e-mail'
                  reference={inputDataEmail}
                  error={errorEmail}
                  action={() => toggle && handleChange(inputDataEmail, "email")}
               />
               <InputForm
                  idInput='password'
                  idName='Password'
                  typeInput='password'
                  reference={inputDataPassword}
                  error={errorPassword}
                  action={() =>
                     toggle && handleChange(inputDataPassword, "password")
                  }
               />
               <Button id='send-form' text='Log in' />
               <Div>
                  <Parraf id='info-register-p'>
                     {"Haven't you yet an Account?"}
                  </Parraf>
                  <Parraf>
                     Click <Li to='/login'> here</Li>
                  </Parraf>
                  <Parraf>to create it.</Parraf>
               </Div>
            </Form>
         </Main>
      </>
   )
}

export default Login

const Main = styled.main`
   max-width: 100%;
   min-height: 180svh;
   position: relative;
   z-index: 2;
   background-image: url("https://www.transparenttextures.com/patterns/binding-light.png");
`
const Div = styled.div`
   display: flex;
   flex-direction: row;
   width: 80%;
   justify-content: center;
   flex-wrap: wrap;
   gap: var(--jd-gap-xs);
`
const Form = styled.form`
   display: flex;
   position: relative;
   top: 55px;
   flex-direction: column;
   border: 1px solid black;
   width: 60%;
   /* min-height: 135svh; */
   padding: var(--jd-padding-xxl) var(--jd-padding-s);
   margin: 0px auto;
   gap: var(--jd-gap-s);
   align-items: center;
   background-color: aliceblue;
   border-radius: var(--jd-br-card);

   > h2 {
      font-size: 40px;
      width: 80%;
      padding: var(--jd-padding-m);
      margin-bottom: var(--jd-margin-l);
      background-color: transparent;
      border-bottom: 1px solid black;
   }

   > p {
      color: black;
      position: relative;
      bottom: 15px;
      text-align: center;
      font-weight: 600;
      padding-bottom: var(--jd-margin-s);
   }
   > button {
      outline: 1px solid black;
      padding: var(--jd-padding-s);
      width: 30%;
      height: 60px;
      margin-top: var(--jd-margin-xxl);
      font-weight: 700;
      font-size: 20px;
      background-color: var(--jd-bgcolor-primary);
      &:hover {
         transform: scale(1);
         background-color: #4388ff;
         color: white;
      }
   }
   > fieldset {
      > p {
         font-size: 14px;
      }
   }
   [id="info-register-p"] {
      display: flex;
      flex-direction: row;
      gap: 0px;
      width: fit-content;
      text-align: center;
      justify-content: center;
      color: black;
      font-weight: 500;
   }
   [id="info-register-p"] ~ p {
      color: black;
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      font-weight: 500;

      > a {
         display: inline;
         font-weight: 600;
         margin-left: 4px;
         text-decoration: underline;
         color: blue;
      }
   }
   [id="error-msn"] {
      width: 100%;
      min-height: 30px;
   }
   @media (width<760px) {
      > button {
         width: 45%;
         height: 60px;
      }
   }
   @media (width<500px) {
      width: 95%;
      > h2 {
         padding-inline: 0px;
         font-size: 30px;
         margin-bottom: var(--jd-margin-xl);
      }
   }
   @media (width<400px) {
      > button {
         width: 80%;
      }
   }
`
