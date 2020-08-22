package com.tele2.market.service;

import com.tele2.market.model.Account;
import com.tele2.market.model.Lot;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class MarketService {
    private final LotService lotService;
    private final AccountService accountService;

    public void executeTransaction(String lotId, String sellerId){
//        Lot lot = lotService.getById(lotId);
//        final String buyerId = lot.getBuyerId();
//        final Account buyer = accountService.getAccountById(buyerId);
//        final Account seller = accountService.getAccountById(sellerId);
//        accountService.
    }
}
