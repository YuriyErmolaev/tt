type coord = {
    x: number,
    y: number
}

type gPrime = {
    leftHigh: coord,
    rightLow: coord
}


abstract class MyGraphicsPrimitive2D {    
    protected prime: gPrime;
    constructor(
        p1X: number,
        p1Y: number,
        p2X: number,
        p2Y: number
    ) {
        this.prime = {
            leftHigh: {
               x: p1X,
               y: p1Y 
            },
            rightLow: {
               x: p2X,
               y: p2Y
            }
        }
    }
    move(xd: number, yd: number): void
    {
        this.prime.leftHigh.x += xd;
        this.prime.leftHigh.y += yd;
        this.prime.rightLow.x += xd;
        this.prime.rightLow.y += yd;
    }
}

abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {    
    protected prime: gPrime;
    constructor(
        p1X: number,
        p1Y: number,
        p2X: number,
        p2Y: number
    ) {
        super(p1X, p1Y, p2X, p2Y);
    }    
    abstract squear() : number;
}

class MyCircle extends MyAreaPrimitive2D {
    protected prime: gPrime;
    protected circlePrime;
    
    constructor(
        p1X: number,
        p1Y: number,
        p2X: number,
        p2Y: number,
        centerx: number,
        centery: number,
        radius: number
    ) {
        super(p1X, p1Y, p2X, p2Y);
        this.circlePrime.base = this.prime;
        this.circlePrime.center.x = centerx;
        this.circlePrime.center.y = centery;
        this.circlePrime.radius = radius;
    }
    squear(): number 
    {
        let squear: number;
        squear = this.circlePrime.x + this.circlePrime.y + this.circlePrime.radius;
        return squear;
    }
}

class MyRectangle extends MyAreaPrimitive2D {
    protected prime: gPrime;
    protected rectanglePrime;    
    constructor(
        p1X: number,
        p1Y: number,
        p2X: number,
        p2Y: number,
        wide: number,
        high: number        
    ) {
        super(p1X, p1Y, p2X, p2Y);
        this.rectanglePrime.wide = wide;
        this.rectanglePrime.high = high;
    }
    squear(): number 
    {
        let squear: number;
        squear = this.rectanglePrime.wide * this.rectanglePrime.high;
        return squear;
    }
}