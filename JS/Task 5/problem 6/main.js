
function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User Logged in");
      resolve({ id: 1, name: "Omar" });
    }, 1000);
  });
}
function getProfile(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId, about: "Frontend Developer and Backend Trainee" });
    }, 1000);
  });
}
function getSettings(profileId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ profileId, theme: "Dark" });
    }, 1000);
  });
}

// using Promise

login().then(user => getProfile(user.id))
.then(profile => getSettings(profile.userId))
.then(settings => console.log(settings))

// using async/await

const loadData = async () => {
    const user = await login();
    const profile = await getProfile(user.id);
    const settings = await getSettings(profile.userId);
    console.log(settings);
}
loadData()