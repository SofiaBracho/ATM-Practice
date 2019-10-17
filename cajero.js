var l = document.getElementById("lienzo");
var lienzo = l.getContext("2d");

var imagenes = [];

imagenes["50"] = "billete50.png";
imagenes["20"] = "billete20.png";
imagenes["10"] = "billete10.png";


class Billete
{
  constructor(v,c)
  {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
}



function entregarDinero()
{

  var t = document.getElementById("dinero");
  var dinero = parseInt(t.value);

  for(bi of caja)
  {
    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);
      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }

      entregado.push( new Billete(bi.valor, papeles) );

      for(var i=1; i<=papeles; i++)
      {
        bi.cantidad-=1;
      }

      dinero -= (bi.valor * papeles);

    }
  }

  if(dinero==0)
  {
    var cont=0;
    var cont2=0;

    for(bi of entregado)
    {

      if(bi.cantidad>=1)
      {

        for(var i = 1; i<=bi.cantidad; i++)
        {
          lienzo.drawImage(bi.imagen, 0+( cont*100), 0+( Math.floor(cont2/5) * 100 ) );

          cont++;
          cont2++;

          if(cont>=5)
          {
            cont=0;
          }
        }
      }
    }
  }
  else
  {
    var p = document.getElementById("parrafo");
    p.innerHTML = "No tengo disponibilidad";

    /* Hacer que se eliminen los elementos de entregado, se agreguen a caja y se borre el dibujo*/

    for(bi of entregado)
    {
      if(bi.valor==50)
      {
        caja[0].cantidad += bi.cantidad;
      }
      else if(bi.valor==20)
      {
        caja[1].cantidad += bi.cantidad;
      }
      else if(bi.valor==10)
      {
        caja[2].cantidad += bi.cantidad;
      }
    }

    entregado.length = 0;

  }

}

var caja = [];
var entregado = [];
caja.push( new Billete (50,3) );
caja.push( new Billete (20,2) );
caja.push( new Billete (10,2) );

var div = 0;
var papeles = 0;

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
