package com.tele2.market.controllers;

import com.tele2.market.model.LocalDateWrapper;
import com.tele2.market.utils.Util;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UtilController {
    @PostMapping("/current-date")
    public void setDate(@RequestBody LocalDateWrapper date){
        Util.setDate(LocalDate.of(date.getYear(), date.getMonth(), date.getDay()));
    }
}
