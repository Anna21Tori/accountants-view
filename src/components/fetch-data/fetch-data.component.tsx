import { useDispatch } from "react-redux";
import CustomButton from "../button/custom-button.component"
import { loadAccountantsAction } from "../../store/accountants/accountants.reducer";

const FetchData = () => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(loadAccountantsAction());
    }

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}} >
            <CustomButton onClick={handleOnClick}>Pokaz wiecej ksiegowych</CustomButton>
        </div>
    )
}
export default FetchData;