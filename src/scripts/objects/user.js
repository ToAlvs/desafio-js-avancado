const user = {
    avatarUrl: "",
    name: "",
    bio: "",
    userName: "",
    followers: "",
    following: "",
    events: "",
    repositories: [],
    commits: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio 
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.events = gitHubUser.events_url
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setEvents(userEvents){
        this.commits = userEvents.map(function (event) {
            if (event.type === 'PushEvent') {
                return `${event.repo.name} - ${event.payload.commits[0].message}`
            } else if (event.type === 'CreateEvent') {
                return "Sem mensagem de commit"
            }
        });
    }
}

export { user }