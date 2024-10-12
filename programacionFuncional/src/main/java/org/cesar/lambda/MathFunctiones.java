package org.cesar.lambda;

import java.util.function.Function;

public class MathFunctiones {
    public static void main(String[] args) {
        //Funciones de flecha (clases anonimas)
        /*
            Function<Integer, Integer> cuadradoNumero = new Function<Integer, Integer>() {
                @Override
                public Integer apply(Integer x) {
                    return x*x;
                }
            };
            System.out.println(cuadradoNumero.apply(3));
            System.out.println(cuadradoNumero.apply(5));
        */
        // < tipo que recibe, tipo que devuelve >
        Function <String, String> f1 = param -> { return "Hola que tal! "+ param; };

    }
}
