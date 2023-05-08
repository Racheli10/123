
interface books{
    readonly book:string;
    name:string;
    id: number;
    year: number;
}
interface Author {
    name:string;
    readonly id:string;
}

let book1 :books ={
    book :'The Happy',
    name:"mmm",
    id:111,
    year:2010,
}

let book2 : books ={
    book :'The man',
    name:"ddd",
    id:222,
    year:1957,
}

function AAA (book1, book2){
  for (let i = 0;i < book1.length;i++){
    const book = book1[i];
    book1(book)
}}
AAA(book1, book2);
