package com.tele2.market.utils;

import java.time.LocalDate;
import java.util.UUID;

public class Util {
    public static LocalDate date = LocalDate.now();

    public static void setDate(LocalDate localDate){
        Util.date = localDate;
    }

    public static LocalDate getDate(LocalDate localDate){
        return date;
    }

    public static String createId(){
        return UUID.randomUUID().toString();
    }
}
