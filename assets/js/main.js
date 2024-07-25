
function updateProfileInfo(profileData) {
    document.getElementById('profile.photo').src = profileData.photo;
    document.getElementById('profile.photo').alt = profileData.name;

    document.getElementById('profile.name').innerText = profileData.name;
    document.getElementById('profile.job').innerText = profileData.job;
    document.getElementById('profile.location').innerText = profileData.location;
    document.getElementById('profile.telefone').innerText = profileData.telefone;

    const emailElement = document.getElementById('profile.email');
    emailElement.innerText = profileData.email;
    emailElement.href = `mailto:${profileData.email}`;
}

(async () => {
    try {
        const profileData = await fetchProfileData();
        updateProfileInfo(profileData);
    } catch (error) {
        console.error('Failed to fetch profile data:', error);
    }
})();