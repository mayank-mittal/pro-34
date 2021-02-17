class FlyRope
{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.003,
            lenght:100
        }
        this.pointB=pointB;
        this.FlyRope=Constraint.create(options);
        World.add(world,this.FlyRope);
    }
    display()
    {
        if(this.FlyRope.bodyA)
        {
            var pointA=this.FlyRope.bodyA.position;
            var pointB=this.pointB;
            push()
            strokeWeight(0)
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
}