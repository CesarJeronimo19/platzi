package org.cesar.lambda;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Supplier;

public class funcionAnonima01 {
    public static void main(String[] args) {

        //Ejemplo1 -> Con un argumento
        /*
            Consumer<Date> consumidor = fecha ->{
                SimpleDateFormat f = new SimpleDateFormat("yyyy-MM-dd");
                System.out.println(f.format(fecha));
            };
            //Transformacion de fecha
            consumidor.accept(new Date());
         */


        //Ejemplo2 -> Con dos argumentos
        /*
            BiConsumer<String, Integer> ConsumidorBi = (nombre, edad)->{
                System.out.println(nombre + ", tiene "+edad+" años");
            };
        */
            //Disminuyendo codigo -> Por ser una sola instruccion
            //BiConsumer<String, Integer> ConsumidorBi = (nombre, edad)->{ System.out.println(nombre + ", tiene "+edad+" años"); };

            //ConsumidorBi.accept("Cesar", 32);
        //***************************************************************
        //***************************************************************
        //***************************************************************

        //Practica1 -> Un argumento
        /*
            Consumer<String> peliculas= pelicula->{
                //System.out.println("La pelicula es: "+ pelicula);
            };

            peliculas.accept("Spiderman");

         */
        //Practica2 -> Con dos argumentos
        BiConsumer<Integer, Integer> multiplicacion = (tabla, asta) -> {
            System.out.println("Te muestro la tabla del "+tabla);
            for (int i = 1; i <= asta; i++) {
                System.out.println( tabla+" x "+i+" = "+ tabla*i);
            }
        };

        multiplicacion.accept(5,10);

        Supplier<String> proveedor = () -> {
            return "Estoy devolvidendo una llamada";
        };

        System.out.println(proveedor.get());
    }


}
