

import { refs } from '../../../refs/refs'
import { state } from '../../../data/data'
import { deleteUserById } from '../../../api/api'
import { createUserForm } from '../usersForm/usersForm'

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
    <div class="flexible">
    <ul class="usersList">${createUsersMarkup()}</ul><div class="usersDataContent"></div></div>
    `
    const usersList = document.querySelector('.usersList');

    const options = (e) => {
        if (e.target.dataset) {
            const id = e.target.closest("[data-id]").dataset.id
            if (e.target.dataset.button === "edit") {
                const id = e.target.closest("[data-id]").dataset.id
                createUserForm(id);
            }
            else if (e.target.dataset.button === "delete") {
                const id = e.target.closest("[data-id]").dataset.id;
                deleteUserById(id)
            } else return
        } else return
    }

    usersList.addEventListener('click', options)
}

