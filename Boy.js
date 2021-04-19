class boy{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }
        this.body = bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("boy.png")
        World.add(world,tis.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}
