import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../button/custom-button.component"
import { loadAccountantsAction } from "../../store/accountants/accountants.reducer";
import { FetchWrapper } from "./fetch-data.style";

const FetchData = () => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(loadAccountantsAction());
    }

    useEffect(() => {
        dispatch(loadAccountantsAction())
    }, [dispatch]);

    return (
        <FetchWrapper>
            <CustomButton onClick={handleOnClick}>Pokaż więcej</CustomButton>
        </FetchWrapper>
    )
}
export default FetchData;