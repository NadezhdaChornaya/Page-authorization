import { refs } from "../../../refs/refs"
import { state } from '../../../data/data'

export const createUserForm = (id) => {
    const editableUser = state.data.users.find((user) => user.id === id)
    console.log(editableUser);
    const user = {
        email: editableUser.email,
        localId: editableUser.localId,
        firstName: "",
        lastName: "",
        avatar: "",
    };
    document.querySelector('.usersDataContent').innerHTML = `
    <form name="userForm">
    <label> Name:
      <input type="text" name="email" />
      </label>
      <input type="text" name="localId" />
      <input type="text" name="firstName" />
      <input type="text" name="lastName" />
      <button type="submit">Save</button>
    </form>
    `
    const userForm = document.forms.userForm;
    userForm.email.value = editableUser.email;
    userForm.localId.value = editableUser.localId;
    const onHandalChange = (e) => {
        const { name, value } = e.target;

    }
    userForm.addEventListener('input')
}