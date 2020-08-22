package com.tele2.market.service;

import com.tele2.market.model.Account;
import com.tele2.market.model.Settings;
import com.tele2.market.model.Type;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class LauncherService {
    private final AccountService accountService;
    private final LotService lotService;

    @Autowired
    public LauncherService(AccountService accountService, LotService lotService) {
        this.accountService = accountService;
        this.lotService = lotService;
    }

    @Scheduled(cron = "0 0 0 * * *", zone="Europe/Paris")
    public void launch() {
        executeSettings();
    }

    public void executeSettings(){
        LocalDate date = LocalDate.now();
        List<Account> accounts = accountService.getAll();

        for (Account account : accounts) {
            final String id = account.getId();

            final Settings settings = account.getSettings();
            if(settings != null){
                createLot(settings, date.getDayOfMonth(), id );
            }
        }
    }

    private void createLot(Settings settings, int dayOfMonth, String id) {
        if(dayOfMonth >= settings.getStartApplySettingsDay()){
            if(settings.isDefaultCost()){
                lotService.createLotBySettings(settings, id, Type.INTERNET.name());
            }
        }
    }
}
