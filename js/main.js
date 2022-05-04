// funcion del selec divisa
$("ul").on("click", ".init", function() {
  $(this).closest("ul").children('li:not(.init)').toggle();
});

var allOptions = $("ul").children('li:not(.init)');
$("ul").on("click", "li:not(.init)", function() {
  allOptions.removeClass('selected');
  $(this).addClass('selected');
  $("ul").children('.init').html($(this).html());
  allOptions.toggle();
});




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

    // resultado de calculadora
const RIG = [{id:1, placa:3090, cantidad:1, precio:200, wats:65, mhs:69.77},
  {id:2, placa:3090, cantidad:2, precio:400,wats:110, mhs:99.77},
  {id:3, placa:3090, cantidad:3, precio:500,wats:110, mhs:99.77}
]
var resultado= ""

let card=

$("#calcular").click(function Calcular (e){
    e.stopPropagation();
   

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
         $("#resultado").prepend(` <div id=${resultado.id} class="d-flex justify-content-between ancho mx-auto align-items-center sombraHover" >
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
              
            $(`#${resultado.id}`).click(function(e){
              e.preventDefault()
              e.stopPropagation()
                

                $("#resultado").empty()
                $("#resultado").append(`<div id=${resultado.id} class="d-flex ancho2 mx-auto align-items-center" style="margin-top:2vh; height:8vh; font-family: 'Inter';
                font-style: normal;font-weight: 300; background: #E2E2E2;box-shadow: 1% 3% 2%px rgba(0, 0, 0, 0.1);
                border-radius: 50px">
                <div class="my-auto  btn" id='atras' style="font-weight: 300; background: rgba(238, 32, 134, 0.25);border-radius: 50px; color:white; height:8vh; width: fit-content; padding:0 1% 0 0%;"><div class="d-flex mx-3" style="height:8vh;"><img class="my-auto mx-1" style="height:25px;" src="../img/atras.png"><p class="fs-4 my-auto" > Atras</p></div></div>

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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><img class="componentes" src="../img/mother.png"></th>
                    <td class="align-middle">Motherboard (MSI / ASUS)</td>
           
  
                  </tr>
                  <tr>
                    <th scope="row"><img class="componentes" src="../img/core.png"></th>
                    <td class="align-middle">Microporcesador 7ma generación (INTEL I3/AMD RYZEN 5)</td>

                  </tr>
                  <tr>
                    <th scope="row"><img class="componentes" src="../img/disco.png"></th>
                    <td class="align-middle">Disco Rigido</td>

                <tr>
                    <th scope="row"><img class="componentes" src="../img/ram.png"></th>
                    <td class="align-middle">Memoria</td>

                </tr>
                <tr>
                    <th scope="row"><img class="componentes" src="../img/video.png"></th>
                    <td class="align-middle">Memoria Placa de video 1660 super</td>

                </tr>
                </tbody>
    
              </table>
              <hr>
              </div>
                <div class="resultado mx-auto ">
                    <div class="d-flex d-flex flex-row justify-content-between ">
                        <div class="d-flex my-auto botonCompartir">
                            <div class=" " ><img src="../img/compartir.png"></div>
                            <div class=" " ><img  src="../img/descargar.png"></div>
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
             $("#atras").click( function(){  
              $("#calcularPresupuesto").click()})
            })
             
    });


    // adicion de usd en el selector de divisas
    $("#btc").click(()=>{
      $("#usd").text("USD")
    })
    $("#eth").click(()=>{
      $("#usd").text("USD")
    })







    // pagina 2 placas
    
    
    $("#calcularPresupuesto").click(function Calcular (e){
        e.stopPropagation();
       
    
            $("#resultado").empty();
            var input = $("#input").val();
            input = parseInt(input);
            let resultadoPresupuesto= ""
           
            if((input <= 5000)) {
            
        
              RIG.map((rig) =>{ 
                if(rig.precio <= input){
                 resultadoPresupuesto = rig
              
               

             $("#resultado").append(` <div style="display:none;" id="contenedor${resultadoPresupuesto.id}"><div  class="d-flex justify-content-between ancho mx-auto align-items-center sombraHover" >
                <div class="d-flex">
                  <img class="mx-2 align-self-center" style="height:10px" src="../img/punto.png"> 
                  <span style="font-family: 'Inter';font-style: normal;font-weight: 700; margin:auto;">RIG </span>
                  <p class="mx-1" style="margin:auto;"> con ${resultadoPresupuesto.cantidad} placa ${resultadoPresupuesto.placa}</p>
                </div>
                <div class="d-flex my-auto">
                    <p style="margin:auto;"> W ${resultadoPresupuesto.wats}</p> 
                    <img class="mx-2 align-self-center" style="height:20px;" src="../img/linea.png">
                    <p class="me-2" style="margin:auto;"> mh/s ${resultadoPresupuesto.mhs}</p>
                  </div> 
                </div>
                  </div>

                <div id=${resultadoPresupuesto.id} style="display:none;">
                <div class="d-flex ancho2 mx-auto align-items-center" style="margin-top:2vh; height:8vh; font-family: 'Inter';
                    font-style: normal;font-weight: 300; background: #E2E2E2;box-shadow: 1% 3% 2%px rgba(0, 0, 0, 0.1);
                    border-radius: 50px;">
                    <div class="my-auto atras btn" id='' style="font-weight: 300; background: rgba(238, 32, 134, 0.25);border-radius: 50px; color:white; height:8vh; width: fit-content; padding:0 1% 0 0%;"><div class="d-flex mx-3" style="height:8vh;"><img class="my-auto mx-1" style="height:25px;" src="../img/atras.png"><p class="fs-4 my-auto" > Atras</p></div></div>
    
                      <div class="d-flex justify-content-between" style="width:100%;" >
                        <div class="d-flex" >
                          <span class="fs-2 ms-2 mx-1" style="margin:auto; font-family: 'Inter';font-style: normal;font-weight: 700;">Rig </span>
                          <p class="textoResultado"  font-weight: 300;"> con ${resultadoPresupuesto.cantidad} placa ${resultadoPresupuesto.placa} </p>
                        </div>
                        <div class="d-flex my-auto">
                          <p style="margin:auto;"> <span class="fw-bold ">W</span> ${resultadoPresupuesto.wats}</p> 
                          <img class="mx-2 align-self-center" style="height:20px;" src="../img/linea.png">
                          <p class="me-2" style="margin:auto;"> <span class="fw-bold ">mh/s</span> ${resultadoPresupuesto.mhs}</p>
                      </div> 
    
                      </div>
                    </div>
                    <div class="col-9 mx-auto">
                    <table class="table" >
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"><img class="componentes" src="../img/mother.png"></th>
                        <td class="align-middle">Motherboard (MSI / ASUS)</td>
               
      
                      </tr>
                      <tr>
                        <th scope="row"><img class="componentes" src="../img/core.png"></th>
                        <td class="align-middle">Microporcesador 7ma generación (INTEL I3/AMD RYZEN 5)</td>
    
                      </tr>
                      <tr>
                        <th scope="row"><img class="componentes" src="../img/disco.png"></th>
                        <td class="align-middle">Disco Rigido</td>
    
                    <tr>
                        <th scope="row"><img class="componentes" src="../img/ram.png"></th>
                        <td class="align-middle">Memoria</td>
    
                    </tr>
                    <tr>
                        <th scope="row"><img class="componentes" src="../img/video.png"></th>
                        <td class="align-middle">Memoria Placa de video 1660 super</td>
    
                    </tr>
                    </tbody>
        
                  </table>
                  <hr>
                  </div>
                    <div class="resultado mx-auto ">
                        <div class="d-flex d-flex flex-row justify-content-between ">
                            <div class="d-flex my-auto botonCompartir">
                                <div class=" " ><img src="../img/compartir.png"></div>
                                <div class=" " ><img  src="../img/descargar.png"></div>
                            </div> 
                            <div class="comprarOnline" > Comprar online</div>
                            <div class="responsive precio">
                                <span class="valor">Valor</span>
                                <div class="backgroundPrecio">$78.888</div>
                            </div>
                        </div>
                    </div>
                    <div class="my-4" style="height:5px;"></div>
                    </div>
                `)

                $("#contenedor1").show();
                $("#contenedor2").show();
                $("#contenedor3").show();
                  $("#contenedor1").click(function(){
                    $("#contenedor1").hide();
                    $("#contenedor2").hide();
                    $("#contenedor3").hide();
                    $(`#1`).show();
                  })
                  $("#contenedor2").click(function(){
                    $(`#2`).show();
                    $("#contenedor2").hide();
                    $("#contenedor1").hide();
                    $("#contenedor3").hide();
                  })
                  $("#contenedor3").click(function(){
                    $(`#3`).show();
                    $("#contenedor2").hide();
                    $("#contenedor1").hide();
                    $("#contenedor3").hide();
                  })
              
              
                 $(".atras").click( function(){  
                  $("#calcularPresupuesto").click()})
                
              }  
            
          })
    }});



  let resultado2=parseInt(0)

  if(resultado2 <=6){
   
  $(".btn-increase").click(function(){
    var placa1= $("#inputPagina3-1660").val();
      var placa2=$("#inputPagina3-3090").val();
      var placa3= $("#inputPagina3-3060").val();
      var placa4=  $("#inputPagina3-1660GTX").val();
    resultado2 = (parseInt(placa1)+parseInt(placa2)+parseInt(placa3)+parseInt(placa4)) +1;
    if(resultado2 <=6 ){
    $("#resultado").text(resultado2 + "/6 placas")
    $(`.btn-decrease img`).attr("src", '../img/menos.png');
      if(resultado2 ===6 ){
    $(".btn-increase").attr("disabled", true);
    $(".btn-increase img").attr("src", "../img/masDisabled.png");
    }
}
});
  $(".btn-decrease").click(function(){
    var placa1= $("#inputPagina3-1660").val();
      var placa2=$("#inputPagina3-3090").val();
      var placa3= $("#inputPagina3-3060").val();
      var placa4=  $("#inputPagina3-1660GTX").val();
    resultado2 = (parseInt(placa1)+parseInt(placa2)+parseInt(placa3)+parseInt(placa4)) -1;
    
    if (resultado2 > 0){
    $("#resultado").text(resultado2 + "/6 placas")
      if(resultado2 <6 ){
         $(".btn-increase").attr("disabled", false);
         $(".btn-increase img").attr("src", "../img/mas.png");   
         }
    }else if(resultado2 == 0){
      $(`.btn-decrease img`).attr("src", '../img/menosDisabled.png');
      $("#resultado").text("0/6 placas")
    }
   
  })
}


        $("#sumarPagina3-1660").click(function (){
          var cantidad = parseInt($("#inputPagina3-1660").val());
          if((cantidad <6)){
          cantidad++;
          $("#inputPagina3-1660").val(cantidad);
          }
      });
   
      $("#restarPagina3-1660").click(function(){
          var cantidad = parseInt($("#inputPagina3-1660").val());
          if((cantidad > 0)){
          cantidad--;
          $("#inputPagina3-1660").val(cantidad);
         
        }
      });
      $("#sumarPagina3-3090").click(function(){
          var cantidad = parseInt($("#inputPagina3-3090").val());
          if((cantidad <6)){
          cantidad++;
          $("#inputPagina3-3090").val(cantidad);}
      });
      $("#restarPagina3-3090").click(function(){
          var cantidad = parseInt($("#inputPagina3-3090").val());
          if((cantidad > 0)){
          cantidad--;
          $("#inputPagina3-3090").val(cantidad);}
      });
      $("#sumarPagina3-3060").click(function(){
          var cantidad = parseInt($("#inputPagina3-3060").val());
          if(cantidad <6){
          cantidad++;
          $("#inputPagina3-3060").val(cantidad);}
      });
      $("#restarPagina3-3060").click(function(){
          var cantidad = parseInt($("#inputPagina3-3060").val());
          if(cantidad > 0){
          cantidad--;
          $("#inputPagina3-3060").val(cantidad);}
      });
      $("#sumarPagina3-1660GTX").click(function(){
          var cantidad = parseInt($("#inputPagina3-1660GTX").val());
          if(cantidad <6){
          cantidad++;
          $("#inputPagina3-1660GTX").val(cantidad);}
      });
      $("#restarPagina3-1660GTX").click(function(){
          var cantidad = parseInt($("#inputPagina3-1660GTX").val());
          if(cantidad > 0){
          cantidad--;
          $("#inputPagina3-1660GTX").val(cantidad);}
      });
  


// desaparicion de barra al apretar el boton de sumar
$("button").click(function(){  
  $("#barraSelecciona").fadeOut('slow');
  $('#tablaPlacas').delay('300');
  $('#tablaPlacas').css('margin-top', '-50px');
 
})

// edicion de precio segun placa elegida

$('button').click(function(){
  var placa1= $("#inputPagina3-1660").val();
  var placa2=$("#inputPagina3-3090").val();
  var placa3= $("#inputPagina3-3060").val();
  var placa4=  $("#inputPagina3-1660GTX").val();
  if(placa1 == 0 && placa2 == 0 && placa3 == 0 && placa4 == 0){
    $("#precio").text("$0.00");
  }else if(placa1 >=1 || placa2 >=1 || placa3 >=1 || placa4 >=1){
    
    // valores de las placas
    precio1=placa1*78000;
    precio2=placa2*90000;
    precio3=placa3*93000;
    precio4=placa4*110000;
    $("#precio").text(`$${precio1+precio2+precio3+precio4}`);
  }
})


// Menu
$('.botonMenu').mouseover(function empezar(e){
  e.preventDefault();
  $(".banderinLogo").show()
});

$('.botonMenu').mouseout(function(){
  $(".banderinLogo").hide()
});

$(".mobileTogle").click(function togle(){
  $(".menu").css('left', '0px');
  $(".mobileTogle").click(function(){
    $(".menu").css('left', '-500px');
    $(".mobileTogle").click(function(){
    togle()
    })
  });
})



