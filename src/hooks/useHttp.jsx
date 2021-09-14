import { useReducer, useCallback } from 'react'

const httpReducer = (state, action) => {

    // to change state to pending
    if (action.type === "SEND") {
        return {
            status: "pending",
            data: null,
            error: null
        }
    }
    // when request is successfully executed
    if (action.type === "SUCCESS") {
        return {
            status: "completed",
            data: action.responseData,
            error: null
        }
    }

    // when executing or sending request fail
    if (action.type === "ERROR") {
        return {
            status: "completed",
            data: null,
            error: action.errorMessage
        }
    }
    return state
}

function useHttp(sendRequest, startWithPending = false) {
    // Custom hook to send and recieve data from server
    const [httpState, dispatch] = useReducer(httpReducer, {
        status: startWithPending ? "pending" : null,
        data: null,
        error: null
    })

    const executeRequest = useCallback(
        // using callBack to avaoid JS reference value problem
        // useCall back will save this fuction and reuse that saved fucntion
        // until its dependencis change
        async function (requestData) {
            // this action will set peding status
            dispatch({ type: "SEND" })
            try {
                const responseData = await sendRequest(requestData)
                dispatch({
                    type: "SUCCESS",
                    responseData
                })
            } catch (error) {
                dispatch({
                    type: "ERROR",
                    errorMessage: error.message || "Something went wrong try again"
                })
            }
        },
        [sendRequest])

    return {
        executeRequest,
        ...httpState
    }
}

export default useHttp