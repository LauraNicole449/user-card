function changeName() {
    let text = document.getElementById("change-name").value;
    document.getElementById("name").textContent = text;
}
function uploadBanner() {
    let banner = document.getElementById("banner");
    let chgbanner = document.getElementById("change-banner");
        //obtain name and change banner
      if (chgbanner.files && chgbanner.files[0]) {
        let file = chgbanner.files[0];
        let fileName = file.name;
        banner.src = file.name;
        console.log("Nombre del archivo:", fileName);
    }
}
function uploadAvatar() {
    let avatar = document.getElementById("avatar");
    let chgavatar = document.getElementById("change-avatar");
        //obtain name and change avatar
      if (chgavatar.files && chgavatar.files[0]) {
        let file = chgavatar.files[0];
        let fileName = file.name;
        avatar.src = file.name;
        console.log("Nombre del archivo:", fileName);
    }
}
function changeDescription(){
    let text = document.getElementById("change-description").value;
    document.getElementById("description").textContent = text;
    
  
}