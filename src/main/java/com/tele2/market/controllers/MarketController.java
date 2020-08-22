package com.tele2.market.controllers;

import com.tele2.market.service.MarketService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class MarketController {
    private final MarketService service;

    @GetMapping("/transaction/{id}/{sellerId}")
    public void executeTransaction(@PathVariable("id") String lotId, @PathVariable("sellerId") String sellerId){
        service.executeTransaction(lotId, sellerId);
    }
}
