package com.tele2.market.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MarketService {
    private final LotService lotService;
    private final AccountService accountService;

    @Autowired
    public MarketService(LotService lotService, AccountService accountService) {
        this.lotService = lotService;
        this.accountService = accountService;
    }

    public void executeTransaction(String lotId, String sellerId){
//        Lot lot = lotService.getById(lotId);
//        final String buyerId = lot.getBuyerId();
//        final Account buyer = accountService.getAccountById(buyerId);
//        final Account seller = accountService.getAccountById(sellerId);
//        accountService.
    }
}
