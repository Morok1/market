package com.tele2.market.controllers;


import com.tele2.market.model.Lot;
import com.tele2.market.service.LotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Queue;

@RestController
@CrossOrigin(origins = "*")
public class LotController {
    private final LotService lotService;

    @Autowired
    public LotController(LotService lotService) {
        this.lotService = lotService;
    }

    @PostMapping("/lot")
    public void createLot(@RequestBody Lot lot){
        lotService.saveLot(lot);
    }

    @GetMapping("/all-lots")
    public Queue<Lot> createLot(){
        return lotService.getAll();
    }
}
