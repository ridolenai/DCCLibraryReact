import React, { Component } from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar'
import BookViewer from './BookViewer/BookViewer';
import BookCreator from './BookCreator/BookCreator';
import Footer from './Footer/Footer';

class App extends Component{
    constructor(props){
        super(props);
        this.books = [
            {title: "Jim-Bob's Book for Uselessness", author: "Nonsense Johnson"},
            {title: "Another Book of Nonsense", author: "Unnecessary Garbage"},
            {title: "Random Book Number 13", author: "Randomness Okay"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

    goToNextBook = () =>{
        
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber ++;
        if (tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToPreviousBook = () =>{
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber --;
        if (tempBookNumber < 0){
            tempBookNumber = this.books.length - 1;
        }
        this.setState({
            bookNumber: tempBookNumber
        });

    }

    createBook = (newBook) => {
        console.log('From the create book on App component', newBook);
        this.books.push(newBook);
        this.setState ({
            bookNumber: this.books.length -1
        })
    }
    

    render() {
        return(
            <div className = "container-fluid">
                <TitleBar />
                <BookViewer book = {this.books[this.state.bookNumber]} nextBook = {this.goToNextBook} previousBook = {this.goToPreviousBook} />
                <BookCreator createNewBook = {this.createBook} />
                <Footer />
            </div>
        )
    }
}

export default App;
