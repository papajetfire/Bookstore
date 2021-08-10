import React from 'react'
import './index.css'
const FirstBook={T :"Eleven minutes",
                    Img :'https://images-eu.ssl-images-amazon.com/images/I/51CUEU7KWbL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
                     Author : "Paulo Coelho",
                 }
const SecondBook={T :"THE STRANGER IN THE MIRROR",
                 Img :'https://m.media-amazon.com/images/I/71S4-mApfJS._AC_UY327_FMwebp_QL65_.jpg',
                  Author : "Rayesh Omprakash Mehra",
              }
const ThirdBook={T : 'Harry Potter and The Philosophers stone',
                Img : 'https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_UL480_FMwebp_QL65_.jpg',
                Author:'J.K. Rowling',

}                 

function BookStore() {
    return (
        <div>
            <section className='booklist'>
                <Book img={FirstBook.Img} T={FirstBook.T} Author={FirstBook.Author}/>
                <Book img={SecondBook.Img} T={SecondBook.T} Author={SecondBook.Author}/>
                <Book img={ThirdBook.Img} T={ThirdBook.T} Author={ThirdBook.Author}/>
            </section>
        </div>
    )
}
const Book =(props)=>{
    return(
        <article className='book'>
            <img src={props.img} alt='opps' height="200px" width="140px"></img>
            <h1>{props.T}</h1>
            <h3>{props.Author}</h3>
            
        </article>
    )
}
 
export default BookStore
