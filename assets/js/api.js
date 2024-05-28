

async function fetchProfileData(){
    const url = "https://guikrieck.github.io/Portfolio/data/profile.json";
    const fetching = await fetch(url);
    return await fetching.json();
}