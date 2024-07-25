async function fetchProfileData() {
    const url  = 'https://raw.githubusercontent.com/tioheras/portfolio-Heron-JS/main/data/profile.json'; // Atualize a URL se necessário
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}