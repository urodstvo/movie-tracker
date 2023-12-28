import { FC } from "react";

import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import { yupResolver } from "mantine-form-yup-resolver";
import * as yup from "yup";

export const LoginForm: FC = () => {
    const schema = yup.object().shape({
        login: yup.string().required("Поле обязательно для заполнения"),
        password: yup.string().required("Поле обязательно для заполнения")
    });

    const form = useForm({
        initialValues: {
            login: "",
            password: ""
        },
        validate: yupResolver(schema)
    });

    const handleSumbit = form.onSubmit((values) => console.log(values));
    return (
        <form
            onSubmit={handleSumbit}
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%"
            }}
        >
            <Stack gap="10px">
                <TextInput size="md" w="350px" name="login" placeholder="Логин" {...form.getInputProps("login")} />
                <PasswordInput
                    size="md"
                    w="350px"
                    name="password"
                    placeholder="Пароль"
                    {...form.getInputProps("password")}
                />
            </Stack>

            <Button type="submit" variant="outline" size="md">
                Войти
            </Button>
        </form>
    );
};
