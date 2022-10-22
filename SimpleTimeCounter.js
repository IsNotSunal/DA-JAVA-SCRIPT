var module = script.registerModule("TimeCounter",MISC);
module.addDoubleProperty("x","X",100,10,1000,0.05)
module.addDoubleProperty("y","Y",100,10,1000,0.05)


var s = 0
var m = 0
var h = 0
var timer = timer_util.getTimer();

module.onEvent("render2DEvent",function(event){  

    if(timer.delay(1000)){
        s++
        if (s >= 60 ) {
            m++
            s = 0
        }

        if (m >= 60 ) {
            h++
            m = 0
        }
        timer.reset()
    }
    
    render_util.renderString(h +":"+ m +":"+ s + "" , module.getProperty("x").getDouble(), module.getProperty("y").getDouble(), 0xffffff, true)
    
})



        