"use strict";var burger=document.querySelector(".burger"),nav=document.querySelector(".header__nav"),menuLinks=document.querySelectorAll(".header__nav-link");burger.addEventListener("click",(function(){nav.classList.toggle("header__nav--visible"),document.body.classList.toggle("stop-scroll")})),menuLinks.forEach((function(e){e.addEventListener("click",(function(){nav.classList.remove("header__nav--visible"),document.body.classList.remove("stop-scroll")}))})),document.addEventListener("click",(function(e){var s=e.target;s.closest(".burger")||s.closest(".header__nav")||(nav.classList.remove("header__nav--visible"),document.body.classList.remove("stop-scroll"))}));var popup=document.querySelector(".popup"),popupWrapper=document.querySelector(".popup__wrapper"),popupClose=document.querySelector(".popup__close");popupClose.addEventListener("click",(function(){popup.classList.add("popup--hidden"),popupWrapper.classList.add("popup__wrapper--hidden"),document.body.classList.remove("stop-scroll")}));var asideValidation=new JustValidate(".subscribe",{successFieldCssClass:"is-valid",errorFieldCssClass:"is-invalid",errorLabelCssClass:"is-label-invalid",errorLabelStyle:{color:"#F06666"}});asideValidation.addField("#email",[{rule:"required",errorMessage:"Вы не ввели e-mail"},{rule:"email",errorMessage:"Пожалуйста, введите действительный e-mail"}]);var obj={},prop=null==obj?void 0:obj.prop;
//# sourceMappingURL=script.js.map