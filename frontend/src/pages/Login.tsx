import { Card, CardBody, CardHeader, Heading, Text,Link, FormControl, FormLabel, Input, Button, FormHelperText } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import * as AuthService from "../service/AuthService.ts";

interface LoginData {
  nome: string;
  email: string;
  senha: string;
}

interface LoginDataErrors {
  nomeError : boolean,
  emailError : boolean,
  passwordError : boolean,
}

interface TouchedFields {
  nome: boolean;
  email: boolean;
  password: boolean;
}


export function Login() {
  const loginDataInitialState : LoginData = { nome: "", email: "", senha: "" }
  const [touchedFields, setTouchedFields] = useState<TouchedFields>({ nome: false, email: false, password: false });
  const [loginData, setLoginData] = useState<LoginData>(loginDataInitialState);
  function handleChange(e : React.ChangeEvent<HTMLInputElement> , name : keyof LoginData) : void {
    setLoginData({...loginData, [name] : e.target.value})
    setTouchedFields({ ...touchedFields, [name]: true });
  }
  const dataErrors : LoginDataErrors = {
    nomeError : loginData.nome.length < 6 || /^\d+$/.test(loginData.nome) || !isNaN(Number(loginData.nome[0])),
    emailError : loginData.email.length < 5 || !loginData.email.includes("@") || !loginData.email.includes("."),
    passwordError : loginData.senha.length < 5
  }



  useEffect(()=>{
  },[touchedFields])
  return (
    <div className="flex justify-center items-center h-dvh bg-slate-200">
        <Card className="w-full  sm:w-80 h-full sm:h-[70%]">
            <CardHeader>
              <Heading>Login </Heading>
            </CardHeader>
            <CardBody>
                <FormControl isRequired isInvalid={dataErrors.emailError && touchedFields.email}>
                  <FormLabel>Email:</FormLabel>
                  <Input onChange={e=>handleChange(e, "email")} value={loginData.email} type="text"/>
                  {dataErrors.emailError &&
                    <FormHelperText> Email invalido. </FormHelperText>
                  }
                </FormControl>
                {/* <FormControl isRequired isInvalid={dataErrors.emailError && touchedFields.email}>
                  <FormLabel>E-mail:</FormLabel>
                  <Input onChange={e=>handleChange(e, "email")} value={loginData.email} type="email"/>
                  {dataErrors.emailError &&
                    <FormHelperText> Coloque um email valido. </FormHelperText>
                  }
                </FormControl> */}
                <FormControl isRequired isInvalid={touchedFields.password && dataErrors.passwordError}>
                <FormLabel>Senha:</FormLabel>
                <Input onChange={e=>handleChange(e, "senha")} value={loginData.senha} type="password"/>
                {dataErrors.passwordError && (
                    <FormHelperText> Senha pequena demais. </FormHelperText>
                  )}
                </FormControl>
                <hr className="my-3"/>
                <div className="flex gap-2">
                  
                  <Button onClick={()=>setLoginData(loginDataInitialState)}>Limpar</Button>
                </div>
                <CardHeader>
                  <Text p={0} textAlign={"start"} fontSize={"small"}> Não tem uma conta ? <Link href="/CadastroUsuario">Crie uma aqui</Link></Text>
                </CardHeader>
            </CardBody>
        </Card>
    </div>

  )
}
