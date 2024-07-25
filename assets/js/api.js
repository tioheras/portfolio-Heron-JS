async function fetchProfileData(){
    const url  = 'https://github.com/tioheras/portfolio-Heron-JS/blob/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}