let jsondata = {
    calisanlar: [
      { name: 'Furkan', surname: 'Evin' },
      { name: 'Furkan1', surname: 'Evin' },
      { name: 'Furkan2', surname: 'Evin' },
      { name: 'Furkan3', surname: 'Evin' },
    ],
    musteriler: [
      { name: 'Fatih', surname: 'Test' },
      { name: 'Fatih', surname: 'Test' },
      { name: 'Fatih', surname: 'Test' },
    ],
  };

//We use this methods, JSON Data for press screen

  jsondata.calisanlar.forEach((e)=>{
    document.write(e.name + "<br>")
  })

//We use this methods, JSON Data convert to String Data 

  let stringData=JSON.stringify(jsondata)

  document.write(stringData + "<br>")

//We use this methods,String Data convert to  JSON Data  

    let normalJSON=JSON.parse(stringData)

    document.write(typeof(normalJSON )+ "<br>")
