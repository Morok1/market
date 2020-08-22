package com.tele2.market.controllers;

import com.tele2.market.model.Account;
import com.tele2.market.model.Settings;
import com.tele2.market.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class AccountController {
    private final AccountService service;

    @GetMapping("/accounts/{id}")
    public Account getAccountById(@PathVariable("id") Long id){
        return service.getAccountById(id);
    }

    @PostMapping
    public void saveAccount(@RequestBody Account account){
        service.save(account);
    }

    @PostMapping("/settings/id")
    public void setSettings(@RequestParam("id") Long accountId, @RequestBody Settings settings){
        Account account = service.getById(accountId);
        account.setSettings(settings);
        service.update(accountId, account);
    }
}