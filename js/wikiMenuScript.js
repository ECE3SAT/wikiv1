

// Appelée lors du clic sur le menu sandwich
// Affiche le menu
function openMenu() {
    node=document.getElementsByClassName('navigation-wrapper')[0];

  if(node.style.display == 'block'){
      node.style.display = 'none';
  }
  else{
    node.style.display = 'block';
  }

}
// Appelée lors d'un clic sur un élément du menu
function openSubMenu(el) {
  // Check qu'il y a bien un sous-menu
  if(el.nextSibling && el.nextSibling.nextSibling) {
    var sibling = el.nextSibling.nextSibling;
    // Toggle l'affichage du sous-menu
    if(sibling.style.display == 'block') sibling.style.display = 'none';
    else sibling.style.display = 'block';
  }
}
