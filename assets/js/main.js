function updateProfileInfo(profileData){

    const profilePhoto = document.querySelector('.header__image');
    profilePhoto.src = profileData.photo;
    profilePhoto.alt = profileData.name;

    const profileName = document.querySelector('.header__name');
    profileName.innerText = profileData.name;

    const profileJob = document.querySelector('.information__job');
    profileJob.innerText = profileData.job;

    const profileLocation = document.querySelector('.information__location');
    profileLocation.innerText = profileData.location;

    const profilePhone = document.querySelector('.phone__link');
    profilePhone.innerText = profileData.phone;
    profilePhone.href = `tel:${profileData.phone}`;


    const profileEmail = document.querySelector('.email__link');
    profileEmail.innerText = profileData.email;
    profileEmail.href = `mailto:${profileData.email}`;
}

function updateSoftSkills(profileData){

    const softSkills = document.querySelector('.soft-skill__list');
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li><p>${skill}</p></li>`).join('')
}

function updateHardSkills(profileData){

    const hardSkills = document.querySelector('.hard-skill__list');
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateProjects(profileData){
    const projects = document.querySelector('.projects__list');
    projects.innerHTML = profileData.portfolio.map((project, i, projects) => {
        if ( projects[i+1] != undefined){
            return `
                <li>
                    <div class="projetcs__item ${project.github ? "github-icon" : ''}">
                        <span>${project.name}</span>
                        <a href="${project.url}" target="_blank">${project.url}</a>
                    </div>
                </li>
                <div class="divider"></div>`
        } else {
            return`
                <li>
                    <div class="projetcs__item ${project.github ? "github-icon" : ''}">
                        <span>${project.name}</span>
                        <a href="${project.url}" target="_blank">${project.url}</a>
                    </div>
                </li>`
        }
    }).join("");
}


function updateLanguages(profileData){
    const languages = document.querySelector('.languages__list');
    languages.innerHTML = profileData.languages.map(language => {
        return`<li>
                    <div>
                        <span>${language.name}</span> 
                        <small>${language.level}</small>
                    </div>
                </li>`
    }).join('');
}


(async () => {

    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateProjects(profileData);
    updateLanguages(profileData);
})();