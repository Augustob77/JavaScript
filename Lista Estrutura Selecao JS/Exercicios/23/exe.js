function calcula(){
    var 
    cod, qnt, precouni, vnt, vdescont, precotot;

    cod = Number (document.getElementById("cod").value);
    qnt = Number (document.getElementById("qnt").value);

        if ((cod >= 1) && (cod <= 10)){
            precouni = 10
            vtn = precouni * qnt
        }

        else if ((cod >= 11)&&(cod <= 20)){
            precouni = 15
            vtn = precouni * qnt
        }

        else if ((cod >= 21)&&(cod <= 30)){
            precouni = 20
            vtn = precouni * qnt
        }

        else{
            precouni = 30
            vtn = precouni * qnt
        }   

        document.getElementById("precouni").innerHTML = "O valor do produto unitário é de: " + precouni + " e o valor total da compra é de: " + vtn

    if (vtn <= 250) {
        vdescont = vtn * 0.05
    }
        else if ((vtn > 250) && (vtn < 500)) {
            vdescont = vtn * 0.10 
    }
            else {
                vdescont = vtn * 0.15 
            }
    precotot = vtn - vdescont


        document.getElementById("valortotal").innerHTML = "O valor do desconto é de: " + vdescont  + " e o valor total foi de: " + precotot
}
