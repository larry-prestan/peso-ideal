$(function () {

    //calcular indice de masa corporal//
    function calcular_imc() {
        let peso = $("#peso").val();
        let estatura = $("#estatura").val();
        let cuadrado_estatura = Math.pow(estatura,2);
        let imc = (peso/cuadrado_estatura);
        return imc;
    }

    //establecer peso ideal//
    function peso_ideal() {
        let valimc = calcular_imc();
        $("#resultado").html("(IMC)- "+valimc.toFixed(1));
        switch (true){
        case valimc.toFixed(1)<18.5:
            $("#desc_resultado").css("color", "coral");
            $("#desc_resultado").html("bajo de peso");
            break;
        case valimc.toFixed(1)>18.5 && valimc.toFixed(1)<24.9:
            $("#desc_resultado").css("color", "green");
            $("#desc_resultado").html("peso normal");
            break;
        case valimc.toFixed(1)>25 && valimc.toFixed(1)<29.9:
            $("#desc_resultado").css("color", "orange");
            $("#desc_resultado").html("sobre peso");
            break;
        case valimc.toFixed(1)>30 && valimc.toFixed(1)<34.9:
            $("#desc_resultado").css("color", "red");
                $("#desc_resultado").html("obesidad");
                break;
        case valimc.toFixed(1)>35 && valimc.toFixed(1)<40:
            $("#desc_resultado").css("color", "red");
                $("#desc_resultado").html("obesidad severa");
                break;
            case valimc.toFixed(1)>40:
                $("#desc_resultado").html("obesidad morvida");
                $("#desc_resultado").css("color", "red");
                break;
        default:
            break;
        }
    }

    //boton calcular//
    $("#calcular").click(function (e) { 
        peso_ideal(calcular_imc());
        e.preventDefault();
        
    });
    

});
