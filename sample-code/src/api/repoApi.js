import axios from 'axios'

export async function getRepos (language) {
 	const apiUrl = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`),
	repos = await axios.get(apiUrl)
	    .catch(err => {
	    	console.log(err);
	    });

  return repos.data.items
}