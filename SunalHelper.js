var module = script.registerModule("Sunal Helper",VISUALS);
module.addBooleanProperty("noti","Module Notification",false)
module.addBooleanProperty("dospeed","Smart Step",true)
module.addBooleanProperty("doaura","Smart Aura",true)
module.addBooleanProperty("lowhp","Low Hp Waring",true)

var dospeed = false
var doaura = false
var doLowHp = false;

var speed = false
var aura = false
var scaffold = false
var flight = false
var lj = false
var steal = false
var manager = false
var hclip = false
var timer = false
var reset = false
var xray = false

function notification(text) {
    client.print("\u00A7k>" + "\u00A7b" + text)
}

module.onEvent("enable",function(){
    notification("Thx For Using Sunal Notification")
    client.postNotification("Welcome","Script By Sunal",3000,SUCCESS)
})

module.onEvent("disable",function(){
    notification("Thx For Using Sunal Notification")
    client.postNotification("Goodbye","Thx For Using",3000,SUCCESS)
})


module.onEvent("playerPostUpdateEvent",function(event){
    if (module.getProperty("noti").getBoolean()) {   
        if (client.isEnabled("Speed")) {
            if (speed == false) {
                client.postNotification("Enable " + "Speed" ," On " + "Speed",1000,SUCCESS)
            
                speed = true
            }
        }
    if (!client.isEnabled("Speed")) {
        if (speed == true) {
            client.postNotification("Disable " + "Speed" ," Off " + "Speed",1000,ERROR)
            
            speed = false
        }
    }

    if (client.isEnabled("Killaura")) {
        if (aura == false) {
            client.postNotification("Enable " + "Killaura" ," On " + "Killaura",1000,SUCCESS)
            
            aura = true
        }
    }
    if (!client.isEnabled("Killaura")) {
        if (aura == true) {
            client.postNotification("Disable " + "Killaura" ," Off " + "Killaura",1000,ERROR)
            
            aura = false
        }
    }

    if (client.isEnabled("Scaffold")) {
        if (scaffold == false) {
            client.postNotification("Enable " + "Scaffold" ," On " + "Scaffold",1000,SUCCESS)
            
            scaffold = true
        }
    }
    if (!client.isEnabled("Scaffold")) {
        if (scaffold == true) {
            client.postNotification("Disable " + "Scaffold" ," Off " + "Scaffold",1000,ERROR)
            
            scaffold = false
        }
    }

    if (client.isEnabled("Flight")) {
        if (flight == false) {
            client.postNotification("Enable " + "Flight" ," On " + "Flight",1000,SUCCESS)
           
            flight = true
        }
    }
    if (!client.isEnabled("Flight")) {
        if (flight == true) {
            client.postNotification("Disable " + "Flight" ," Off " + "Flight",1000,ERROR)
            
            flight = false
        }
    }

    if (client.isEnabled("Cheststealer")) {
        if (steal == false) {
            client.postNotification("Enable " + "Cheststealer" ," On " + "Cheststealer",1000,SUCCESS)
            
            steal = true
        }
    }
    if (!client.isEnabled("Cheststealer")) {
        if (steal == true) {
            client.postNotification("Disable " + "Cheststealer" ," Off " + "Cheststealer",1000,ERROR)
            
            steal = false
        }
    }

    if (client.isEnabled("Inventorymanager")) {
        if (manager == false) {
            client.postNotification("Enable " + "Inventorymanager" ," On " + "Inventorymanager",1000,SUCCESS)
            
            manager = true
        }
    }
    if (!client.isEnabled("Inventorymanager")) {
        if (manager == true) {
            client.postNotification("Disable " + "Inventorymanager" ," Off " + "Inventorymanager",1000,ERROR)
            
            manager = false
        }
    }

    if (client.isEnabled("Inventorymanager")) {
        if (manager == false) {
            client.postNotification("Enable " + "Inventorymanager" ," On " + "Inventorymanager",1000,SUCCESS)
            
            manager = true
        }
    }
    if (!client.isEnabled("Inventorymanager")) {
        if (manager == true) {
            client.postNotification("Disable " + "Inventorymanager" ," Off " + "Inventorymanager",1000,ERROR)
            
            manager = false
        }
    }

    if (client.isEnabled("Hclip")) {
        if (hclip == false) {
            client.postNotification("Enable " + "Hclip" ," On " + "Hclip",1000,SUCCESS)
            
            hclip = true
        }
    }
    if (!client.isEnabled("Hclip")) {
        if (hclip == true) {
            client.postNotification("Disable " + "Hclip" ," Off " + "Hclip",1000,ERROR)
            
            hclip = false
        }
    }

    if (client.isEnabled("Gamespeed")) {
        if (timer == false) {
            client.postNotification("Enable " + "Timer" ,"On " + "Timer",1000,SUCCESS)
            
            timer = true
        }
    }
    if (!client.isEnabled("Gamespeed")) {
        if (timer == true) {
            client.postNotification("Disable " + "Timer" ,"Off " + "Timer",1000,ERROR)
            
            timer = false
        }
    }

    if (client.isEnabled("ResetVL")) {
        if (reset == false) {
            client.postNotification("Enable " + "ResetVL" ," On " + "ResetVL",1000,SUCCESS)
            
            reset = true
        }
    }
    if (!client.isEnabled("ResetVL")) {
        if (reset == true) {
            client.postNotification("Disable " + "ResetVL" ," Off " + "ResetVL",1000,ERROR)
           
            reset = false
        }
    }

    if (client.isEnabled("Xray")) {
        if (xray == false) {
            client.postNotification("Enable " + "Xray" ," On " + "Xray",1000,SUCCESS)
            
            xray = true
        }
    }
    if (!client.isEnabled("Xray")) {
        if (xray == true) {
            client.postNotification("Disable " + "Xray" ," Off " + "Xray",1000,ERROR)
            
            xray = false
        }
    }
    }
    // smart step
    if (module.getProperty("dospeed").getBoolean()) {
		if (client.isEnabled("Speed")) {
			if (client.isEnabled("Step")) {
				dospeed = true;
				client.toggleModule("Step");
				notification("(Smart Step) Step Disable")	
		}
		} else if (dospeed) {
			client.toggleModule("Step");
            dospeed = false;
            notification("(Smart Step) Step Enable")
		}
	}
    // smart aura
    if (module.getProperty("doaura").getBoolean()) {
		if (client.isEnabled("Scaffold")) {
			if (client.isEnabled("Killaura")) {
				doaura = true;
				client.toggleModule("Killaura");
				notification("(Smart Aura) Aura Disable")	
		}
		} else if (doaura) {
			client.toggleModule("Killaura");
            doaura = false;
            notification("(Smart Aura) Aura Enable")
		}
	}

    // low health waring 
    if (module.getProperty("lowhp").getBoolean()) {

        if (player.getHealth() < 10 && doLowHp == false) {
                client.postNotification("You Are On Low HP" ,"Your HP is Under 10!",1000,SUCCESS)
                notification("You Are On Low HP!")
		        doLowHp = true
		    }else if (player.getHealth() > 10 && doLowHp == true) {
			    doLowHp = false
		    }
        }
            
})