
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    document.getElementById('profile.name').textContent = profileData.name;
    document.getElementById('profile.job').textContent = profileData.job;
    document.getElementById('profile.location').textContent = profileData.location;
    document.getElementById('profile.telefone').textContent = profileData.telefone;
    document.getElementById('profile.email').textContent = profileData.email;
    document.getElementById('profile.email').href = `mailto:${profileData.email}`;
}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
})();