function parseCount(num) {
    const parsed = Number.parseFloat(num)
    if (Number.isNaN(parsed)) {
        throw new Error('Невалидное значение');
    }
    return parsed
}

function validateCount(num) {
    try {return parseCount(num)
    } catch (error){
        return error
    }
 }

 class Triangle {
    constructor (a, b, c) {
        if (a + b < c || b + c < a || a + c < b) {
            throw new Error ('Треугольник с такими сторонами не существует')
        }
        this.a = a
        this.b = b
        this.c = c
    }

    get perimeter() {
        return this.a + this.b + this.c
    }

    get area() {
        const halfPerimetr = this.perimeter * 0.5
        return Number(Math.sqrt(halfPerimetr * (halfPerimetr - this.a) * (halfPerimetr - this.b) * (halfPerimetr - this.c)).toFixed(3))
    }
 }

 function getTriangle(a,b,c) {
    try {return new Triangle(a,b,c)
    } catch (error) {
        return {
            get area () {
                return "Ошибка! Треугольник не существует"},
            get perimeter () {
                return "Ошибка! Треугольник не существует"}
        }
    }
 }