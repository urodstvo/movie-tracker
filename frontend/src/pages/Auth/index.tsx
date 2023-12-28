import { FC, useState } from "react";

import { Flex } from "@mantine/core";

import { FormSwitcher } from "./components/FormSwitcher";
import { LoginForm } from "./components/LoginForm";
import { SignUpForm } from "./components/SignUpForm";

export const AuthPage: FC = () => {
    const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
    return (
        <Flex component="main" align="center" justify="center" h="100vh" direction="column">
            <Flex
                direction="column"
                style={{
                    height: "400px",
                    padding: "40px",
                    border: "1px solid #aaa",
                    borderRadius: "20px",
                    boxShadow: "0 0 5px var(--mantine-color-blue-2)"
                }}
            >
                {isLoginForm ? <LoginForm /> : <SignUpForm />}
                <FormSwitcher isLoginForm={isLoginForm} setIsLoginForm={setIsLoginForm} />
            </Flex>
        </Flex>
    );
};
