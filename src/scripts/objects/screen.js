const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        let userInfo = `<div class="info">
                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário">
                            <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                <p>${user.bio ?? 'Não possui bio cadastrada 😢'} </p>
                                <p>Seguidores: ${user.followers ?? 'Erro na busca 😢'} </p>
                                <p>Seguindo: ${user.following ?? 'Erro na busca 😢'} </p>
                            </div>
                        </div>`
        this.userProfile.innerHTML = userInfo

        let repositoriesItens = ""
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">
                                                                    ${repo.name}
                                                                    <div>
                                                                        <span>🍴${repo.forks}</span>
                                                                        <span>⭐${repo.stargazers_count}</span>
                                                                        <span>👀${repo.watchers}</span>
                                                                        <span>🌅${repo.language}</span>
                                                                    </div>
                                                                </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let userEvents = ""
        user.commits.forEach(event => userEvents += `<li><strong>${event.repoName}</strong> - ${event.commit}</li>`)
        this.userProfile.innerHTML +=  `<div class="events section">
                                                <h2>Eventos do Usuário</h2>
                                                <ul>${userEvents}</ul>
                                            </div>`
    },

    renderNotFound(){
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    }
}

export { screen }