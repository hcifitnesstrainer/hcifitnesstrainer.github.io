document.addEventListener("DOMContentLoaded",function(){var $menu=document.getElementById('section_options');var pathVars=window.location.pathname.split('/')
console.log(pathVars[2]);var selectedButtonViaUrl=document.querySelectorAll(`[data-js-section~=${pathVars[1]}]`)[0]
selectedButtonViaUrl&&selectedButtonViaUrl.classList.add("section-selected")
function handleEquipmentChange(event){$menu.classList.remove('section-options--open');if(event.target.classList.contains("close-menu-button")){return;}
var section=event.target.dataset.jsSection;var currentSelection=localStorage.getItem("section");if(section==currentSelection){section="Exercises"}
localStorage.setItem("section",section);window.location="/"+section+"/"+pathVars[2]+"/"+pathVars[3];}
document.getElementsByClassName("show-sections-button")[0].addEventListener('click',function(){$menu.classList.add('section-options--open');});var selection_buttons=document.getElementsByClassName("section-button");for(var i=0;i<selection_buttons.length;i++){selection_buttons[i].addEventListener('click',handleEquipmentChange);}});