const initial_state = {
    contacts: {
        items: []
    },
    filters: {
        name: ""
    }
}

export const createSlice = (state = initial_state, action) => {
    switch (action.type) {
        case "profile/add":
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    items: [...state.contacts.items, action.payload]
                }
            }
        case "profile/delete":
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    items: [state.contacts.items.filter(contact => contact.id != action.payload)]
                }
            }
        default:
            return state
    }   
}

export const addProfile = (payload) => {
    return {
        type: "profile/add",
        payload: payload
    }
}

export const deleteProfile = (profileId) => {
    return {
        type: "profile/delete",
        payload: profileId
    }
}