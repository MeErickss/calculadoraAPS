export default class Display {
    showNumber(value: number):void{
        console.log(value)
    }
}

class MinhaDisplay extends Display {
    showAlpha(value: string): void{
        console.log("[a]"+value)
    }

    override showNumber(value: number): void{
        console.log("[n]"+value)
    }
}

const d = new Display()
d.showNumber(123.45)

var d1 = new MinhaDisplay()
d1.showNumber(123.45)