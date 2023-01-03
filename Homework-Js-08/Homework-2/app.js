const book = {
    title: 'The Robots of Dawn',
    author: 'Isaac Asimov',
    readingStatus: true,
    getReadingStatus: function () {
        if (this.readingStatus) {
            console.log(`Already read '${this.title}' by ${this.author}.`);
        } else {
            console.log(`You still need to read '${this.title}' by ${this.author}.`);
        }
    }
};

book.getReadingStatus();