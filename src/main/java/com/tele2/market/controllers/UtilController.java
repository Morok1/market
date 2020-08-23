package com.tele2.market.controllers;

import com.tele2.market.utils.Util;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.time.LocalDate;
import java.util.Date;


@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UtilController {
    @GetMapping("/current-date")
    public String setDate(@RequestParam String date){
        final Instant parse = Instant.parse(date);

        final Date date1 = new Date(parse.toEpochMilli());
        final LocalDate ld = LocalDate.of(date1.getYear(), date1.getMonth(), date1.getDay());
        Util.setDate(ld);
        return "hello";
    }

}
