package com.tele2.market.controllers;

import com.tele2.market.utils.Util;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;

@RequiredArgsConstructor
public class UtilController {
    @PostMapping("/current-date")
    public void setDate(@RequestParam() LocalDate localDate){
        Util.setDate(localDate);
    }

}
