class GitHub {
    constructor(){
        this.client_ID = '71614b327431c82ba8a6';
        this.client_secret = 'dfa738602138d270906b1f8e3b9641936fb38c5b';
        this.repos_count = 10;
        this.repos_sort = 'created: asc';
        this.user= 'Powerpupsik';
        this.apiUrl = 'https://api.github.com/users/';
    }
    async getUserData(){
        // `` -backticks
        let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;

        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();


        return{
            profile,
            repos
        }

    }
}