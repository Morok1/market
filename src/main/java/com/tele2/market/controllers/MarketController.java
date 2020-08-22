package com.tele2.market.controllers;

import com.tele2.market.service.MarketService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class MarketController {
    private final MarketService service;




    //post установи сеттинги: Settings(bool sms, gig, minute)
    //get перевести с одного лота на другой
    //post

}
