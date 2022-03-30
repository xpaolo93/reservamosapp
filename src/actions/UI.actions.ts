import { UiActionsEnum } from '../reducer/';

export const showLoading = (show: boolean) => ({
    type: UiActionsEnum.ShowLoading,
    payload: show
})

export const msgError = (error: string | null) => ({
    type: UiActionsEnum.uiSetError,
    payload: error
});