let cookies = 0;

function cookieClick(click){
    cookies = cookies + click;
    document.getElementById('cookies').innerHTML = cookies;
     document.title = cookies + " cookies"
};

document.getElementById("cookie").addEventListener("click", function() {
    cookieClick(click = 1);
});

let clickupgrades = 0;

function upgradeclick(){
	let clickCost = Math.floor(200 * Math.pow(1.15,clickupgrades))
	if(cookies >= clickCost) {
		clickupgrades = clickupgrades + 1;
		cookies = cookies - clickCost;
		document.getElementById('clickUpgrade').innerHTML = clickupgrades; 
		document.getElementById("cookie").addEventListener("click", function() {
    cookieClick(click = 1);
});
	}
	let nextCostofclickupgrade = Math.floor(200 * Math.pow(1.15,clickupgrades));
     
    document.getElementById('clickCost').innerHTML = nextCostofclickupgrade; 
};



let cursors = 0;

function buyCursor(){
    let cursorCost = Math.floor(10 * Math.pow(1.2,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    let nextCostofCursor = Math.floor(10 * Math.pow(1.2,cursors));
     
    document.getElementById('cursorCost').innerHTML = nextCostofCursor;  //updates the cursor cost for the user
};

let cursorinterval = window.setInterval(function(){
	
	cookieClick(cursors * 0.25);
	
}, 1000);

function upgradeCursors(){
		if(cursors >= 10 && cookies >= 500){
			clearInterval(cursorinterval);
			cookies = cookies - 500;
			document.getElementById('upgradecursors').disabled = true;
			window.setInterval(function(){
	
			cookieClick(cursors * 3);
	
		}, 1000);
       	};
}
document.getElementById("cursing").addEventListener("click", buyCursor);

let farm = 0;

function buyFarm(){
	 let farmCost = Math.floor(50 * Math.pow(1.2,farm));
	 if(cookies >= farmCost){
	 	farm = farm + 1;
	 	cookies = cookies - farmCost;
	 	document.getElementById('farms').innerHTML = farm;
	 	document.getElementById('cookies').innerHTML = cookies;
	 }
	 let nextCostofFarm = Math.floor(50 * Math.pow(1.2,farm));       //works out the cost of the next cursor
     document.getElementById('farmCost').innerHTML = nextCostofFarm;   
};
window.setInterval(function(){
	
	cookieClick(farm * 2);
	
}, 1000);

function save() {
	localStorage.setItem("cookies", cookies);
}

function load() {
	cookies = localStorage.getItem("cookies");
	cookies = parseInt(cookies);
}