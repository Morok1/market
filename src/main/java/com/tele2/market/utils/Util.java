package com.tele2.market.utils;

import java.time.LocalDate;
import java.util.Random;

public class Util {
    public static LocalDate date = LocalDate.now();

    public static void setDate(LocalDate localDate){
        Util.date = localDate;
    }

    public static LocalDate getDate(LocalDate localDate){
        return date;
    }

    public static String createId(){
        StringBuilder builder = new StringBuilder();
        builder.append("+7962");

        for (int i = 0; i < 7 ; i++) {
            builder.append(new Random().nextInt(9));
        }
        return builder.toString();
    }
}
