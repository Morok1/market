package com.tele2.market.controllers;


import com.tele2.market.model.Lot;
import com.tele2.market.service.LotService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Queue;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class LotController {
    private final LotService lotService;

    @PostMapping("/lot")
    public void createLot(@RequestBody Lot lot){
        lotService.saveLot(lot);
    }

    @GetMapping("/all-lots")
    public Queue<Lot> createLot(){
        return lotService.getAll();
    }
}
