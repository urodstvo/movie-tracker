import { FC } from "react";
import { Link } from "react-router-dom";

export const Error404Page: FC = () => {
    return (
        <div>
            404
            <Link to="/">На главную</Link>
        </div>
    );
};
