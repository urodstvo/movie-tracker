import { FC } from "react";

import { Group } from "@mantine/core";
import { Text } from "@mantine/core";

interface iSwitcherProps {
    isLoginForm: boolean;
    setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}
export const FormSwitcher: FC<iSwitcherProps> = ({ isLoginForm, setIsLoginForm }) => {
    return (
        <Group justify="space-between" m="5px 0">
            <Text>{isLoginForm ? "Нет аккаунта?" : "Уже есть аккаунт?"}</Text>
            <Text
                style={{ cursor: "pointer", fontWeight: 500, color: "var(--mantine-color-blue-6)" }}
                onClick={() => setIsLoginForm((prev) => !prev)}
            >
                {isLoginForm ? "Зарегистрироваться" : "Войти"}
            </Text>
        </Group>
    );
};
