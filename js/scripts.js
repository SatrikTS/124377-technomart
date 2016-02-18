		var openCart = document.querySelectorAll(".btn-product-buy");
		var popupCart = document.querySelector(".popup-cart");
			
		for (var i = 0; i < openCart.length; i++) {
			openCart[i].addEventListener("click", function(event){
				event.preventDefault();
				popupCart.classList.add("popup-cart-show");
				});
			}
			
		var closeCart = document.querySelector(".popup-cross, .btn-shopping-continue");
		var popupCart = document.querySelector(".popup-cart");
			
			closeCart.addEventListener("click", function(event){
				event.preventDefault();
				popupCart.classList.remove("popup-cart-show");
			});
		
		var sliderD = document.querySelector(".service-btn-delivery");
		var showD = document.querySelector(".service-delivery");
		
		sliderD.addEventListener("click", function(event){
			event.preventDefault();
			showW.style.display="none";
			showC.style.display="none";
			showD.style.display="none"; 
			showD.style.display="block";
			sliderD.style.border="none";
			sliderD.style.background="white";
			sliderD.style.color="#32425c";			
			sliderC.style.background="#32425c";
			sliderC.style.color="#fff";	
			sliderW.style.background="#32425c";
			sliderW.style.color="#fff";	
		});
		
		var sliderW = document.querySelector(".service-btn-warranty");
		var showW = document.querySelector(".service-warranty");
		
		sliderW.addEventListener("click", function(event){
			event.preventDefault();
			showW.style.display="none";
			showC.style.display="none";
			showD.style.display="none"; 
			showW.style.display="block";
			sliderD.style.background="#32425c";
			sliderD.style.color="#fff";	
			sliderW.style.background="white";
			sliderW.style.color="#32425c";	
			sliderC.style.background="#32425c";
			sliderC.style.color="#fff";	
		});
		
		var sliderC = document.querySelector(".service-btn-credit");
		var showC = document.querySelector(".service-credit");
		
		sliderC.addEventListener("click", function(event){
			event.preventDefault();
			showW.style.display="none";
			showC.style.display="none";
			showD.style.display="none"; 
			showC.style.display="block";
			sliderC.style.border="none";
			sliderD.style.background="#32425c";
			sliderD.style.color="#fff";	
			sliderW.style.background="#32425c";
			sliderW.style.color="#fff";	
			sliderC.style.background="#fff";
			sliderC.style.color="#32425c";	
		});
	
		var open = document.querySelector(".writeus-btn");
		var popup = document.querySelector(".popup-helper");
		
		open.addEventListener("click", function(event){
			event.preventDefault();
			popup.classList.add("popup-helper-show");
		
		});
		
		var close = document.querySelector(".popup-cross");
		var popup = document.querySelector(".popup-helper");
		
		close.addEventListener("click", function(event){
			event.preventDefault();
			popup.classList.remove("popup-helper-show");
		
		});
		
		var openMap = document.querySelector(".open-map");
		var popupMap = document.querySelector(".map-popup");
			
		openMap.addEventListener("click", function(event){
			event.preventDefault();
			popupMap.classList.add("map-popup-show");
		
		});	
		
		var closeMap = document.querySelector(".popup-close");
		var popupMap = document.querySelector(".map-popup");
		
		closeMap.addEventListener("click", function(event){
			event.preventDefault();
			popupMap.classList.remove("map-popup-show");
		
		});	
