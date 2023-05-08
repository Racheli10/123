 fetch('https://jsonplaceholder.typicode.com/todos/1')

.then((response) =>{ 
return response.json()
})

.then((data)=>{
      const el =document.getElementById ('body');
      console.log(data)
      const title = document.getElementById ('h2');
      title.textContent =data.title;
      const content =document.createElement ('p');
      content.textContent = data.body;
      el.appendChild(title);  
      el.appendchild(content);
})

.catch(error=> {
    console.error('gdhgdgfhgfhgfgfh:', error);
});