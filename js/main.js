
     $("#sumar").click(function(){
        var input = $("#input").val();
        input = parseInt(input);
        var resultado = input + 1;
        $("#input").val(resultado);
    });;
    $("#restar").click(function(){
        var input = $("#input").val();
        input = parseInt(input);
        if(input != 0){
        var resultado = input - 1;
        $("#input").val(resultado);
        }
       
    });

const RIG = [{id:1, placa:3090, cantidad:1, precio:200, wats:65, mhs:69.77},{id:2, placa:3090, cantidad:2, precio:400,wats:110, mhs:99.77}]
var resultado= ""

let card=

$("#calcular").click(function(){
        $("#resultado").empty();
        var input = $("#input").val();
        input = parseInt(input);

       
        if((input <= 200)) {
           var resultado= RIG.find((rig) =>{return rig.precio <=200} );

        }else if((input > 200) && (input <= 400)){
             var resultado=RIG.find((rig) =>{return rig.precio >200 && rig.precio <=400});
                
        }else if (input >= 400) {
             var resultado=RIG.find((rig) =>{return rig.precio >=400});
    }
         $("#resultado").prepend(` <div id=${resultado.id} class="d-flex justify-content-between ancho mx-auto align-items-center " >
            <div class="d-flex">
              <img class="mx-2 align-self-center" style="height:10px" src="../img/punto.png"> 
              <span style="font-family: 'Inter';font-style: normal;font-weight: 700; margin:auto;">RIG </span>
              <p class="mx-1" style="margin:auto;"> con ${resultado.cantidad} placa ${resultado.placa}</p>
            </div>
            <div class="d-flex my-auto">
                <p style="margin:auto;"> W ${resultado.wats}</p> 
                <img class="mx-2 align-self-center" style="height:20px;" src="../img/linea.png">
                <p class="me-2" style="margin:auto;"> mh/s ${resultado.mhs}</p>
              </div> 
            </div>`)
              
            $(`#${resultado.id}`).click(function(){
                $("#resultado").empty()
                $("#resultado").append(`<div id=${resultado.id} class="d-flex ancho2 mx-auto align-items-center" style="margin-top:2vh; height:8vh; font-family: 'Inter';
                font-style: normal;font-weight: 300; background: #E2E2E2;box-shadow: 1% 3% 2%px rgba(0, 0, 0, 0.1);
                border-radius: 50px">
                <div class="my-auto calcularbtn btn" style="font-weight: 300; background: rgba(238, 32, 134, 0.25);border-radius: 50px; color:white; height:8vh; width: fit-content; padding:0 3% 0 0%;"><div class="d-flex " style="height:8vh;"><img class="my-auto mx-1" style="height:25px;" src="../img/atras.png"><p class="fs-4 my-auto" > Atras</p></div></div>

                  <div class="d-flex justify-content-between" style="width:100%;" >
                    <div class="d-flex" >
                      <span class="fs-2 ms-2 mx-1" style="margin:auto; font-family: 'Inter';font-style: normal;font-weight: 700;">Rig </span>
                      <p class="textoResultado"  font-weight: 300;"> con ${resultado.cantidad} placa ${resultado.placa} </p>
                    </div>
                    <div class="d-flex my-auto">
                      <p style="margin:auto;"> <span class="fw-bold ">W</span> ${resultado.wats}</p> 
                      <img class="mx-2 align-self-center" style="height:20px;" src="../img/linea.png">
                      <p class="me-2" style="margin:auto;"> <span class="fw-bold ">mh/s</span> ${resultado.mhs}</p>
                  </div> 

                  </div>
                </div>
                <div class="col-9 mx-auto">
                <table class="table" >
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">w</th>
                    <th scope="col">mh/s</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><img class="componentes" src="../img/mother.png"></th>
                    <td class="align-middle">Motherboard (MSI / ASUS)</td>
                    <td>65w</td>
                    <td>69,77</td>
                  </tr>
                  <tr>
                    <th scope="row"><img class="componentes" src="../img/core.png"></th>
                    <td class="align-middle">Microporcesador 7ma generación (INTEL I3/AMD RYZEN 5)</td>
                    <td>56w</td>
                    <td>89,99</td>
                  </tr>
                  <tr>
                    <th scope="row"><img class="componentes" src="../img/disco.png"></th>
                    <td class="align-middle">Disco Rigido</td>
                    <td>66w</td>
                    <td>145</td>
                <tr>
                    <th scope="row"><img class="componentes" src="../img/ram.png"></th>
                    <td class="align-middle">Memoria</td>
                    <td>92w</td>
                    <td>679,99</td>
                </tr>
                <tr>
                    <th scope="row"><img class="componentes" src="../img/video.png"></th>
                    <td class="align-middle">Memoria Placa de video 1660 super</td>
                    <td>92w</td>
                    <td>27.99</td>
                </tr>
                </tbody>
    
              </table>
              </div>
                <div class="resultado mx-auto ">
                    <div class="d-flex d-flex flex-row justify-content-between ">
                        <div class="d-flex my-auto">
                            <div class="text-center mx-1 botonCompartir" ><img src="../img/compartir.png"></div>
                            <div class="text-center mx-1 botonCompartir" ><img  src="../img/descargar.png"></div>
                        </div> 
                        <div class="comprarOnline" > Comprar online</div>
                        <div class="responsive precio">
                            <span class="valor">Valor</span>
                            <div class="backgroundPrecio">$78.888</div>
                        </div>
                    </div>
                </div>
                <div class="my-4" style="height:5px;"></div>
                `
               
             )
              })
             
    });
