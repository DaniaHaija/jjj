async function getdata(){
    const respons =await fetch("https://dummyjson.com/products");
    const data= await respons.json();
    const products=data.products
    
    const result=products.map(function(ele) {
        return `
       
        <div class=product>
        <h2>
        ${ele.title}
        </h2>
       <img src= ${ele.thumbnail} />
       
       <span>
       ${ele.price}$
       </span>
       </div>
       
    `;
       

        
           
    } ).join('');

   
   document.querySelector(".products").innerHTML+=result;
            
       
       
    }
    getdata();

   
