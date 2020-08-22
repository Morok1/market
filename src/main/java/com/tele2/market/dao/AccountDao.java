package com.tele2.market.dao;

import com.tele2.market.model.Account;
import com.tele2.market.model.Role;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

import static com.tele2.market.utils.Util.createId;

@Component
public class AccountDao {
    public static List<Account> accounts = new ArrayList<>();


    public Account getById(String accountId) {
        return accounts.stream().filter(a -> a.getId().equals(accountId)).findFirst().orElse(null);
    }

    public void update(String accountId, Account account) {
        final Account byId = getById(accountId);

        if(byId == null){
            throw  new RuntimeException("Account with id:" + accountId + "don't exist!");
        }

        accounts.remove(byId);
        accounts.add(account);
    }

    static {
        accounts.add(new Account(createId(), "Миша" , Role.USER, null));
        accounts.add(new Account(createId(), "Миша" , Role.USER, null));
        accounts.add(new Account(createId(), "Миша" , Role.USER, null));
        accounts.add(new Account(createId(), "Миша" , Role.USER, null));
        accounts.add(new Account(createId(), "Миша" , Role.USER, null));
        accounts.add(new Account(createId(), "Миша" , Role.USER, null));
        accounts.add(new Account(createId(), "Миша" , Role.USER, null));
        accounts.add(new Account(createId(), "Миша" , Role.USER, null));
        accounts.add(new Account(createId(), "Миша" , Role.USER, null));
        accounts.add(new Account(createId(), "Миша" , Role.USER, null));

        accounts.add(new Account(createId(), "Женя" , Role.USER, null));
        accounts.add(new Account(createId(), "Женя" , Role.USER, null));
        accounts.add(new Account(createId(), "Женя" , Role.USER, null));
        accounts.add(new Account(createId(), "Женя" , Role.USER, null));
        accounts.add(new Account(createId(), "Женя" , Role.USER, null));
        accounts.add(new Account(createId(), "Женя" , Role.USER, null));
        accounts.add(new Account(createId(), "Женя" , Role.USER, null));
        accounts.add(new Account(createId(), "Женя" , Role.USER, null));
        accounts.add(new Account(createId(), "Женя" , Role.USER, null));
        accounts.add(new Account(createId(), "Женя" , Role.USER, null));
    }

    public void save(Account account) {
        accounts.add(account);
    }
}
