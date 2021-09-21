import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { AllActionCreators } from "../store/reducers/action-creators"

const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(AllActionCreators, dispatch)
}

export default useActions