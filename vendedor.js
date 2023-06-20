const d = document

const vendedores = [
    { name: "juana", productos: [], suma: [0] },
    { name: "pedro", productos: [], suma: [0] },
  ],



  productos = {
    aqua: 200,
    emocion: 180,
    alegria: 160,
    frescura: 150,
  };

  const prod = []

 d.querySelector("form").addEventListener("submit",(e) => {
    
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
        if (data.vendedor === "juana"){
        if(data.producto === "aqua" ){
            vendedores[0].productos.push(data.producto)
            vendedores[0].suma.push(productos.aqua)           
        }else if(data.producto === "emocion" ){
            vendedores[0].productos.push(data.producto)
            vendedores[0].suma.push(productos.emocion)    
        }else if(data.producto === "alegria" ){
            vendedores[0].productos.push(data.producto)
            vendedores[0].suma.push(productos.alegria)    
        }else if(data.producto === "frescura" ){
            vendedores[0].productos.push(data.producto)
            vendedores[0].suma.push(productos.frescura)    
        }
        
       
    }else if (data.vendedor === "pedro"){
        if(data.producto === "aqua" ){
            vendedores[1].productos.push(data.producto)
            vendedores[1].suma.push(productos.aqua)           
        }else if(data.producto === "emocion" ){
            vendedores[1].productos.push(data.producto)
            vendedores[1].suma.push(productos.emocion)    
        }else if(data.producto === "alegria" ){
            vendedores[1].productos.push(data.producto)
            vendedores[1].suma.push(productos.alegria)    
        }else if(data.producto === "frescura" ){
            vendedores[1].productos.push(data.producto)
            vendedores[1].suma.push(productos.frescura)    
        }
        console.log(vendedores);
    }
    
  });

  const funcion = () => {
    
    const suma = vendedores.map(vendedores => vendedores.suma.reduce((a,b) => a + b))

    console.log(`Juana vendio ${suma[0]}`);
    console.log(`Pedro vendio ${suma[1]}`);
    if(suma[0] > suma[1]){ 
        console.log("Juana es el empleado del mes");
  }else if(suma[0] < suma[1]){
        console.log("Pedro es el empleado del mes"); 
    
  }else {
        console.log("Empate");
  }

  const aqua = vendedores.map(vendedores => vendedores.productos.filter(vendedores => vendedores === "aqua"))
  const emocion = vendedores.map(vendedores => vendedores.productos.filter(vendedores => vendedores === "emocion"))
  const alegria = vendedores.map(vendedores => vendedores.productos.filter(vendedores => vendedores === "alegria"))
  const frescura = vendedores.map(vendedores => vendedores.productos.filter(vendedores => vendedores === "frescura"))
  
  console.log(`Cantidad de aquas vendidas por Juana: ${aqua[0].length}`);
  console.log(`Cantidad de aquas vendidas por Pedro: ${aqua[1].length}`);

  console.log(`Cantidad de emocion vendidas por Juana: ${emocion[0].length}`);
  console.log(`Cantidad de emocion vendidas por Pedro: ${emocion[1].length}`);

  console.log(`Cantidad de alegria vendidas por Juana: ${alegria[0].length}`);
  console.log(`Cantidad de alegria vendidas por Pedro: ${alegria[1].length}`);

  console.log(`Cantidad de frescura vendidas por Juana: ${frescura[0].length}`);
  console.log(`Cantidad de frescura vendidas por Pedro: ${frescura[1].length}`);


}
