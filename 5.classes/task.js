class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.state = 100
        this.type = null
    }

    set state(newState) {
        if (newState === 0) {
            this._state = 0
        } else if (newState > 100) {
            this._state = 100
        } else {
            this._state = newState
        }
    }

    get state() {
        return this._state
    }

    fix(){
        this.state *= 1.5
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = "magazine"
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.author = author
        this.type = "book"
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "novel"
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "fantastic"
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "detective"
    }
}

class Library {
    constructor(name){
        this.name = name
        this.books = []
    }

    addBook(book){
        if (book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value){
        const filteredBooks = this.books.filter(
            function (book) {
                return book[type] === value
            }
        )
        if (filteredBooks.length > 0) {
            return filteredBooks[0]
        } else {
            return null
        }
    }

    giveBookByName(bookName){
        const findBookIndex = this.books.findIndex(
            function (book) {
                return book.name === bookName
            }
        )
        if (findBookIndex === -1) {
             return null
        } else {
            let findBook = this.books.splice(findBookIndex, 1)
            return findBook[0]
        }

    }
}

class Student {
    constructor(name){
        this.name = name
        this.marks = {}
    }

    addMark(mark, subject){
        if (mark < 2 || mark > 5) {
            return
        }
        if(!(subject in this.marks)) {
            this.marks[subject] = []
        }
        this.marks[subject].push(mark)
    }

    getAverageBySubject(subject){
        if (!(subject in this.marks)) {
            return 0
        }
        const subjectMarks = this.marks[subject]
        return subjectMarks.reduce((acc, item, index, arr) => {
                return acc + item / arr.length
            }, 0)
    }

    getAverage() {
        const subjects = Object.keys(this.marks)
        const sumOfAvg = subjects.reduce((acc, subject) => {
            const subjectAvgMark = this.getAverageBySubject(subject)
            return acc + subjectAvgMark
        }, 0)
        return sumOfAvg / subjects.length
    }
}
