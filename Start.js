// import React from 'react';
import './Start.css'; // Import your CSS file for styling
import React, { useEffect, useState } from "react";




const Navbar = () => {
    // / Define an array of books with title, ISBN, and image URL (placeholder)
    const books = [
      { title: 'Book 1', isbn: 'ISBN-1111', imageUrl: 'https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=' },
      { title: 'Book 2', isbn: 'ISBN-2222', imageUrl: 'https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=' },
      { title: 'Book 3', isbn: 'ISBN-3333', imageUrl: 'https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=' },
      { title: 'Book 4', isbn: 'ISBN-4444', imageUrl: 'https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=' },
      { title: 'Book 5', isbn: 'ISBN-5555', imageUrl: 'https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=' }
    ];
  
    return (
      <div className="book-list-container">
        <div className="book-list">
          {books.map((book, index) => (
            <div key={index} className="book-item">
              <img src={book.imageUrl} alt={book.title} className="book-image" />
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