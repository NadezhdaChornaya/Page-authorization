

import { refs } from '../../../refs/refs'
import { state } from '../../../data/data'

const createUsersMarkup = () => {
    return state.data.users.reduce((acc, user) => {
        acc += `<li data-id=${user.id}>
        <h2>Email:${user.email}</h2>
        <p>Id:${user.localId}</p>
        <button data-button="edit">Edit</button>
        <button data-button="delete">Delete</button>
        </li>`
        return acc;
    }, "")
}

export const createUsersList = () => {
    refs.content.innerHTML = `
    <ul class="usersList">${createUsersMarkup()}</ul>
    `
    const usersList = document.querySelector('.usersList');
    const options = (e) => {
        if (e.target.dataset) {
            if (e.target.dataset.button === "edit") {
                console.log("edit");
            }
            else if (e.target.dataset.button === "delete") {
                console.log("delete");
            } else return
        } else return
    }

    usersList.addEventListener('click', options)
}

