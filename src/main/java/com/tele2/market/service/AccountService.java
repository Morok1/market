package com.tele2.market.service;

import com.tele2.market.dao.AccountDao;
import com.tele2.market.model.Account;
import com.tele2.market.model.Settings;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

import static com.tele2.market.utils.Util.createId;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class AccountService {
    private final AccountDao dao;
    public List<Account> getAll() {
        return null;
    }

    public Account getAccountById(String id) {
        return dao.getById(id);
    }

    public void save(Account account) {
        account.setId(createId());
        dao.save(account);
    }

    public void setSettings(String accountId, Settings settings) {
        Account account = dao.getById(accountId);
        account.setSettings(settings);
        dao.update(accountId, account);
    }

    public Account getById(String accountId) {
        return null;
    }

    public void update(String accountId, Account account) {

    }
}
