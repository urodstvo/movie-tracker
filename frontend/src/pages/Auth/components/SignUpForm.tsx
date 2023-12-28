import { FC } from "react";

import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import { yupResolver } from "mantine-form-yup-resolver";
import * as yup from "yup";

export const SignUpForm: FC = () => {
    const schema = yup.object().shape({
        login: yup.string().required("Поле обязательно для заполнения"),
        password: yup
            .string()
            .required("Поле обязательно для заполнения")
            .min(8, "Пароль должен быть не менее 8 символов"),
        confirm: yup
            .string()
            .required("Поле обязательно для заполнения")
            .oneOf([yup.ref("password")], "Пароли не совпадают")
    });

    const form = useForm({
        initialValues: {
            login: "",
            password: "",
            confirm: ""
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
                <PasswordInput
                    size="md"
                    w="350px"
                    name="new_password"
                    placeholder="Подтвердите пароль"
                    {...form.getInputProps("confirm")}
                />
            </Stack>

            <Button type="submit" variant="outline" size="md">
                Зарегистрироваться
            </Button>
        </form>
    );
};
