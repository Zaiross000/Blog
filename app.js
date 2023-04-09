const btnModals = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const layoutModal = document.querySelector(".layout-modal");

function removeModal(e) {
  modal.classList.add("dn");
}

function addModal(e) {
  modal.classList.remove("dn");
}

for (let i = 0; i < btnModals.length; i++) {
  btnModals[i].onclick = addModal;
}

modal.onclick = removeModal;

layoutModal.onclick = (e) => {
  e.stopPropagation();
};
