import { REGUSTER_USER } from "../actions/users";

const initialState = {
    users = [{
        email: "",
        password: "",

    }]
}

const userReducer = (state = initialState, action) => {
switch (action.type) {
    case REGISTER_USER:
    return Object.assign({}, state, {
        

    })
}

}