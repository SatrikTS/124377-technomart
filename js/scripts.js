		var openCart = document.querySelectorAll(".btn-product-buy");
		var popupCart = document.querySelector(".popup-cart");
			
		for (var i = 0; i < openCart.length; i++) {
			openCart[i].addEventListener("click", function(event){
				event.preventDefault();
				popupCart.classList.add("popup-cart-show");
				});
			}
			
		var closeCart1 = document.querySelector(".popup-cross-btn");
		var popupCart = document.querySelector(".popup-cart");
			
			closeCart1.addEventListener("click", function(event){
				event.preventDefault();
				popupCart.classList.remove("popup-cart-show");
			});
		
		var closeCart2 = document.querySelector(".btn-shopping-continue");
			closeCart2.addEventListener("click", function(event){
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
			sliderD.classList.remove("service-btn-active");	
			sliderW.classList.remove("service-btn-active"); 
			sliderC.classList.remove("service-btn-active"); 
			sliderD.classList.add("service-btn-active");	
		});
		
		var sliderW = document.querySelector(".service-btn-warranty");
		var showW = document.querySelector(".service-warranty");
		
		sliderW.addEventListener("click", function(event){
			event.preventDefault();
			showW.style.display="none"; 
			showC.style.display="none"; 
			showD.style.display="none"; 
			showW.style.display="block"; 
			sliderW.classList.remove("service-btn-active"); 
			sliderC.classList.remove("service-btn-active"); 
			sliderD.classList.remove("service-btn-active"); 
			sliderW.classList.add("service-btn-active"); 
		});
		
		var sliderC = document.querySelector(".service-btn-credit");
		var showC = document.querySelector(".service-credit");
		
		sliderC.addEventListener("click", function(event){
			event.preventDefault();
			showW.style.display="none";
			showC.style.display="none";
			showD.style.display="none"; 
			showC.style.display="block";
			sliderW.classList.remove("service-btn-active"); 
			sliderC.classList.remove("service-btn-active"); 
			sliderD.classList.remove("service-btn-active"); 
			sliderC.classList.add("service-btn-active");
			sliderC.style.border="none";
			
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
