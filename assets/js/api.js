

async function fetchProfileData(){
    const url = "https://guikrieck.github.io/Portfolio-DIO-TrilhaJavaScript/data/profile.json";
    const fetching = await fetch(url);
    return await fetching.json();
}