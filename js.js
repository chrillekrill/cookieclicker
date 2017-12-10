let cookies = 0;

function cookieClick(click){
    cookies = cookies + click;
    document.getElementById('cookies').innerHTML = cookies;
};

document.getElementById("cookie").addEventListener("click", function() {
    cookieClick(click = 1);
});

function upgradeclick(){
	if(cookies !== 0) {
		document.getElementById("cookie").addEventListener("click", function() {
    cookieClick(click = 1);
});
	}
};



let cursors = 0;

function buyCursor(){
    let cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    let nextCostofCursor = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCostofCursor;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	cookieClick(cursors);
	
}, 10000);

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
	
	cookieClick(farm);
	
}, 500);

