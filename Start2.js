// import React from 'react';
import './Start.css'; // Import your CSS file for styling
import React, { useEffect, useState } from "react";




const Navbar = () => {
    const books = [
        { title: 'Book 1', isbn: 'ISBN-1111' },
        { title: 'Book 2', isbn: 'ISBN-2222' },
        { title: 'Book 3', isbn: 'ISBN-3333' },
        { title: 'Book 4', isbn: 'ISBN-4444' },
        { title: 'Book 5', isbn: 'ISBN-5555' },
        { title: 'Book 1', isbn: 'ISBN-1111' },
        { title: 'Book 2', isbn: 'ISBN-2222' },
        { title: 'Book 3', isbn: 'ISBN-3333' },
        { title: 'Book 4', isbn: 'ISBN-4444' },
        { title: 'Book 5', isbn: 'ISBN-5555' },
        { title: 'Book 1', isbn: 'ISBN-1111' },
        { title: 'Book 2', isbn: 'ISBN-2222' },
        { title: 'Book 3', isbn: 'ISBN-3333' },
        { title: 'Book 4', isbn: 'ISBN-4444' },
        { title: 'Book 5', isbn: 'ISBN-5555' }
      ];
    
      return (
        <div className="book-list-container">
          <div className="book-list">
            {books.map((book, index) => (
              <div key={index} className="book-item">
                <div className="book-content">
                  <div className="title">{book.title}</div>
                  <div className="isbn">{book.isbn}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
  
  export default Navbar;