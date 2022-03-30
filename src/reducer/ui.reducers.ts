import UiActionsEnum from "./ui.actions.enum";
import UiStateModel from "./ui.state.models";

type uiState = UiStateModel;

type UiAction = {
    type: UiActionsEnum,
    payload: uiState | string | boolean | null
}

const initialState: uiState = {
    error: null,
    loading: false
}

const uiReducer = (state: uiState = initialState, action: UiAction) => {

    switch (action.type) {
        case UiActionsEnum.uiSetError:
            return {
                ...state,
                error: action.payload
            } as uiState;
        case UiActionsEnum.ShowLoading:
            return {
                ...state,
                loading: action.payload
            } as uiState;
        default:
                return state as uiState;
        }
}

export default uiReducer;