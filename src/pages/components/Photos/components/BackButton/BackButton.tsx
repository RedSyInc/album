import {useNavigate} from "react-router-dom";
import {Button} from "react-admin";

export const BackButton = () => {
    const navigate = useNavigate();

    return (
        <Button
            label="Back"
            onClick={() => navigate(-1)}
            size="small"
        />
    );
};