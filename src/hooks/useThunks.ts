import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { AllThunks } from "../store/reducers/thunks"

const useThunks = () => {
    const dispatch = useDispatch()
    return bindActionCreators(AllThunks, dispatch)
}

export default useThunks