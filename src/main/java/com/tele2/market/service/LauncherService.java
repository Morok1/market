package com.tele2.market.service;

import com.tele2.market.model.Account;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class LauncherService {
    private final AccountService accountService;

    @Scheduled
    public void launch() {

    }

    public void executeSettings(){
        LocalDate date = LocalDate.now();
        List<Account> accounts = accountService.getAll();

    }
}
