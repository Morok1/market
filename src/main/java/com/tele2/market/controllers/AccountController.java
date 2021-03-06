package com.tele2.market.controllers;

import com.tele2.market.model.Account;
import com.tele2.market.model.Settings;
import com.tele2.market.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class AccountController {
    private final AccountService service;

    @Autowired
    public AccountController(AccountService service) {
        this.service = service;
    }

    @GetMapping("/accounts/{id}")
    public Account getAccountById(@PathVariable("id") String id){
        return service.getAccountById(id);
    }

    @PostMapping
    public void saveAccount(@RequestBody Account account){
        service.save(account);
    }

    @PostMapping("/settings")
    public void setSettings(@RequestParam("id") String accountId, @RequestBody Settings settings){
        service.setSettings(accountId, settings);
    }
}
