import { getUser } from "/src/scripts/services/user.js";
import { getRepos } from "/src/scripts/services/repositories.js";
import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";
import { getUserEvents } from "./services/events.js";

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value;
    if (validateEmptyInput(userName)) return

    getUserData(userName)
});

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if (validateEmptyInput(userName)) return
        getUserData(userName);
    }
});

function validateEmptyInput(userName) {
    if (userName.length === 0) {
        alert('Por favor, insira um nome de usuário válido.');
        return true
    }
}

function validateEmptyEvents(eventsResponse) {
    if (eventsResponse.length === 0) {
        return true
    }
}

async function getUserData(userName) {
    const userResponse = await getUser(userName)
    const eventsResponse = await getUserEvents(userName)
    const repositoriesResponse = await getRepos(userName)

    if (validateEmptyEvents(eventsResponse)) {
        user.commits.push('Evento não encontrado')
    } else{
        user.setEvents(eventsResponse)
    }

    if (userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }
    
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    screen.renderUser(user)
}