var name = "Helper" + "\u00A77" + " New Gen"

var module = script.registerModule(name,MISC);
module.addListProperty("none","------------------",                                                                                    "lishang no d1ck","lishang no d1ck")
module.addBooleanProperty("th","Simple TargetHud",false)
module.addIntegerProperty("thx","HUD X Pos",455,1,1000,1)
module.addIntegerProperty("thy","HUD Y Pos",455,1,1000,1)
module.addListProperty("none","------------------",                                                                                    "huodong no d1ck","huodong no d1c")
module.addBooleanProperty("ss","Smart Step",false)
module.addBooleanProperty("sa","Smart Aura",false)
module.addBooleanProperty("vh","Velocity Fix",false)
module.addBooleanProperty("noti","On/Off Noti",false)
module.addListProperty("none","------------------",                                                                                    "YK NO D1CK","YK NO D1CK")
module.addBooleanProperty("hh","Hypixel Helper",false)
module.addBooleanProperty("hgui","On/Off Helper Gui",false)
module.addIntegerProperty("hx","Helper Gui X Pos",20,1,1000,1)
module.addIntegerProperty("hy","Helper GuiY Pos",92,1,1000,1)
module.addListProperty("none","------------------",                                                                                    "Marthy no dick","Marthy no dick")
module.addBooleanProperty("bh" , "Set Bind" , false)
module.addStringProperty("bindset" , "Bind Set" , "SW", "SW" , "BW" , "UHC" , "Semi-Rage", "Legit") 
module.addListProperty("none","------------------",                                                                                    "FS no dick","Marthy no dick")

//hypixel helper
var autosw = 38
var hub = 25
var rejoin = 24

//hypixel helper gui
var hx = 0
var hy = 0

//target hud
var thx = 0
var thy = 0

//noti
var speed = false
var step = false
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

//mise
vh = true
sa = true
sa_1 = true
ss = true
bh = true



function bind(module, bind) {
    player.sendMessage(".bind " + module + " " + bind)
    client.print("> Successful Bind " + module + " to " + bind)
}



module.onEvent("enable",function(){
    client.postNotification("Welcome" , "Thanks for Using Sunal Helper" , 3000,SUCCESS)
})



module.onEvent("disable",function(){
    client.postNotification("Goodbye" , "Thanks for Using Sunal Helper" , 3000,INFO)
})




module.onEvent("render2DEvent",function(event){



    //simple targethud
    if (module.getProperty("th").getBoolean()) {
        var thx = module.getProperty("thx").getInteger()
        var thy = module.getProperty("thy").getInteger()
        var entities = world.getPlayerEntities()
        for(i = 0;i < entities.length;i++){
            if(player.getDistanceToEntity(entities[i]) < 4 && entity_util.getName(entities[i]) != player.getName()){
                render_util.renderString("Health:" + entity_util.getHealth(entities[i]),thx,thy,0xffffff,true)
                if (player.getHealth() >= entity_util.getHealth(entities[i])) {
                    render_util.renderString("You May Win" , thx , thy + 8, 0xffffff , true)
                }else {
                    render_util.renderString("You May Lose" , thx , thy + 8, 0xffffff , true)
                }
            } 
        }
    }




    //Hypixel Helper gui 
    if (module.getProperty("hgui").getBoolean()) {
        x = module.getProperty("hx").getInteger()
        y = module.getProperty("hy").getInteger()

        //noti
        render_util.renderString("AutoPlaySw(Insane Solo): " + "L",x,y,0xffffff,true)
        render_util.renderString("AutoHub: " + "P",x,y + 9,0xffffff,true)
        render_util.renderString("AutoRejoin: " + "O",x,y + 18,0xffffff,true)
    }
})

module.onEvent("playerPreUpdateEvent",function(event){



    //Hypixel Helper
    if (module.getProperty("hh").getBoolean()) {
        if (org.lwjgl.input.Keyboard.isKeyDown(autosw)) {
            player.sendMessage("/play solo_insane")
            client.postNotification("Auto SkyWars" , "TP to Skywars Solo Insane 1v1" , 3000,INFO)
        }
        if (org.lwjgl.input.Keyboard.isKeyDown(hub)) {
            player.sendMessage("/hub")
            client.postNotification("Auto Hub" , "TP to Lobby" , 3000,INFO)
        }
        if (org.lwjgl.input.Keyboard.isKeyDown(rejoin)) {
            player.sendMessage("/rej")
            client.postNotification("Auto Hub" , "Rejoin Game" , 3000,INFO)
        }
    }



    //Smart Step
    if (module.getProperty("ss").getBoolean()) {
        //结构 by Xlittle Left
        if (client.isEnabled("Speed")) {
            if (client.isEnabled("Step")) {
                sa = true;
                client.toggleModule("Step");
            }
        } else if (sa) {
             client.toggleModule("Step");
             sa = false;
        }

        if (client.isEnabled("Longjump")) {
            if (client.isEnabled("Step")) {
                sa_1 = true;
                client.toggleModule("Step");
            }
        } else if (sa_1) {
             client.toggleModule("Step");
             sa_1 = false;
        }
    }



    //smart Aura
    if (module.getProperty("sa").getBoolean()) {
        //结构 by Xlittle Left
        if (client.isEnabled("Longjump")) {
            if (client.isEnabled("Killaura")) {
                sa = true;
                client.toggleModule("Killaura");
            }
        } else if (sa) {
             client.toggleModule("Killaura");
             sa = false;
        } 
    }



    //Velocity Fix 
    if (module.getProperty("vh").getBoolean()) {
        if (client.isEnabled("Speed") && client.isEnabled("Velocity")) {             
                client.toggleModule("Velocity") 
        }
        if (!client.isEnabled("Speed") && !client.isEnabled("Velocity")) {
                client.toggleModule("Velocity")
        }
    }



    //BIND SET
    if (module.getProperty("bh").getBoolean()) {
        if (module.getProperty("bindset").getString() == "SW" && bh == true) { //SW 模式
            //这里是Skywars 游戏内对应SW模式
            //在这里加 方法: bind(模块 , 绑定按键) 注意，一定要加双引号 不然不会成功
            //例子 bind("Killaura", "R")
            // bind("Killaura", "None")为取消绑定
            //下面同理
            bind("Speed", "V")
            bind("Killaura", "R")
            bind("Cheststealer", "Y")
            bind("InventoryManager", "Y")
            bind("Scaffold", "G")
            bind("GameSpeed", "X")
            bind("ResetVL", "Z")
            bind("Longjump", "H")
            bind("Xray", "None")
            bind("Fly", "F")
            bind("BedBreaker", "None")
            bind("SafeWalk", "None")
    
            client.postNotification("Done" , "Set Done" , 2000 , SUCCESS)
            bh = false
        }
    
        if (module.getProperty("bindset").getString() == "BW" && bh == true) { // BW 模式
            //这里是Bedwars 游戏内对应BW模式
            bind("Speed", "V")
            bind("Killaura", "R")
            bind("Cheststealer", "None")
            bind("InventoryManager", "None")
            bind("Scaffold", "G")
            bind("GameSpeed", "None")
            bind("ResetVL", "None")
            bind("Longjump", "None")
            bind("Xray", "None")
            bind("Fly", "F")
            bind("BedBreaker", "X")
            bind("SafeWalk", "None")
    
            client.postNotification("Done" , "Set Done" , 2000 , SUCCESS)
            bh = false
        }
    
        if (module.getProperty("bindset").getString() == "UHC" && bh == true) { // UHC 模式
            //这里是UHC 游戏内对应UHC模式
    
            bind("Speed", "V")
            bind("Killaura", "R")
            bind("Cheststealer", "None")
            bind("InventoryManager", "Y")
            bind("Scaffold", "G")
            bind("GameSpeed", "Z")
            bind("ResetVL", "None")
            bind("Longjump", "None")
            bind("Xray", "X")
            bind("Fly", "F")
            bind("BedBreaker", "None")
            bind("SafeWalk", "None")
            
            client.postNotification("Done" , "Set Done" , 2000 , SUCCESS)
            bh = false
        }
    
        if (module.getProperty("bindset").getString() == "Semi-Rage" && bh == true) { // 半暴力 模式
            //这里是半暴力 游戏内对应Semirage模式
    
            bind("Speed", "None")
            bind("Killaura", "F")
            bind("Cheststealer", "Y")
            bind("InventoryManager", "Y")
            bind("Scaffold", "G")
            bind("GameSpeed", "None")
            bind("ResetVL", "None")
            bind("Longjump", "None")
            bind("Xray", "X")
            bind("Fly", "None")
            bind("BedBreaker", "None")
            bind("SafeWalk", "None")
            
            client.postNotification("Done" , "Set Done" , 2000 , SUCCESS)
            bh = false
        }
    
        if (module.getProperty("bindset").getString() == "Legit" && bh == true) { // 安全模式
            //这里是安全，对应游戏内Legit模式
    
            bind("Speed", "None")
            bind("Killaura", "F")
            bind("Cheststealer", "None")
            bind("InventoryManager", "None")
            bind("Scaffold", "None")
            bind("GameSpeed", "None")
            bind("ResetVL", "None")
            bind("Longjump", "None")
            bind("Xray", "None")
            bind("Fly", "None")
            bind("BedBreaker", "None")
            bind("SafeWalk", "Z")
            
            client.postNotification("Done" , "Set Done" , 2000 , SUCCESS)
            bh = false
        }
    }
    if (module.getProperty("bh").getBoolean() == false && bh == false) {
        bh = true
    }



    //on off noti
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
    
        if (client.isEnabled("Fly")) {
            if (flight == false) {
                client.postNotification("Enable " + "Fly" ," On " + "Fly",1000,SUCCESS)
               
                flight = true
            }
        }
        if (!client.isEnabled("Fly")) {
            if (flight == true) {
                client.postNotification("Disable " + "Fly" ," Off " + "Fly",1000,ERROR)
                
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
    
        if (client.isEnabled("Step")) {
            if (step == false) {
                client.postNotification("Enable " + "Step" ," On " + "Step",1000,SUCCESS)
            
                step = true
            }
        }
        if (!client.isEnabled("Step")) {
            if (step == true) {
                client.postNotification("Disable " + "Step" ," Off " + "Step",1000,ERROR)
            
                step = false
            }
        }   
    }
})