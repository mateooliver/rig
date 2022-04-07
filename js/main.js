
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

const RIG = [{id:1, placa:3090, cantidad:1, precio:200},{id:2, placa:3090, cantidad:3, precio:400},{id:3, placa:3090, cantidad:2, precio:300}]
var resultado= ""

$("#calcular").click(function(){
        $("#resultado").empty();
        var input = $("#input").val();
        input = parseInt(input);
       
        if((input <= 200)) {
           var resultado= RIG.find((rig) =>{return rig.precio <=200} );

        }else if((input > 200) && (input <= 400)){
             var resultado=RIG.find((rig) =>{return rig.precio >200 && rig.precio <400});
                
        }else if (input >= 400) {
             var resultado=RIG.find((rig) =>{return rig.precio >=400});
    }
         $("#resultado").prepend(` <div id=${resultado.id} class="d-flex col-3 mx-auto align-items-center" style="margin-top:2vh; height:8vh; font-family: 'Inter';
            font-style: normal;font-weight: 300; background: #E2E2E2;box-shadow: 1% 3% 2%px rgba(0, 0, 0, 0.1);
            border-radius: 10px"><img class="mx-2" style="height:10px" src="../img/punto.png"> <span style="font-family: 'Inter';font-style: normal;font-weight: 700;">RIG </span> con ${resultado.cantidad} placa ${resultado.placa} </div>`)
              
            $(`#${resultado.id}`).click(function(){
                $("#resultado").empty()
                $("#resultado").append(`<div id=${resultado.id} class="d-flex col-8 mx-auto align-items-center" style="margin-top:2vh; height:8vh; font-family: 'Inter';
                font-style: normal;font-weight: 300; background: #E2E2E2;box-shadow: 1% 3% 2%px rgba(0, 0, 0, 0.1);
                border-radius: 10px"><img class="mx-2" style="height:10px" src="../img/punto.png"> <span style="font-family: 'Inter';font-style: normal;font-weight: 700;">RIG </span> con ${resultado.cantidad} placa ${resultado.placa} </div>
                <div class="col-9 mx-auto">
                <table class="table">
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
                    <th scope="row"></th>
                    <td>Motherboard (MSI / ASUS)</td>
                    <td>65w</td>
                    <td>69,77</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>Microporcesador 7ma generación (INTEL I3/AMD RYZEN 5)</td>
                    <td>56w</td>
                    <td>89,99</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>Disco Rigido</td>
                    <td>66w</td>
                    <td>145</td>
                <tr>
                    <th scope="row"></th>
                    <td>Memoria</td>
                    <td>92w</td>
                    <td>679,99</td>
                </tr>
                <tr>
                    <th scope="row"></th>
                    <td>Memoria</td>
                    <td>92w</td>
                    <td>27.99</td>
                </tr>
                </tbody>
    
              </table>
                <div class="col-9 mx-auto ">
                    <div class="d-flex d-flex flex-row justify-content-between ">
                        <div class="d-flex">
                            <div class="text-center mx-1" style="height:30px; width:50px; padding:1%; background:#E61B80; border-radius:10px; border:none;"><img style="height:20px;" src="../img/compartir.png"></div>
                            <div class="text-center mx-1" style="height:30px; width:50px; padding:1%; background:#E61B80; border-radius:10px; border:none;"><img style="height:20px;" src="../img/descargar.png"></div>
                        </div> 
                        <div class="" style="width:17vw; text-align:center; ;background-color:#E6D21B; padding: 0 5% 0 5%; border-radius:20px;"> Comparar online</div>
                        <div class="d-flex">
                            <span style="font-family: 'Inter';font-style: normal;font-weight: 800;">Valor</span>
                            <div class="col-12 d-flex" style="margin-left:10%; text-align:center; background:#E61B80; padding:0 5% 0 5%;border-radius:20px; color:white;" >$78.888</div>
                        </div>
                    </div>
                </div>
                `);})
    });
