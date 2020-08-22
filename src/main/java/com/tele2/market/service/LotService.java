package com.tele2.market.service;

import com.tele2.market.dao.LotDao;
import com.tele2.market.model.Lot;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Queue;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class LotService {
    private final LotDao lotDao;

    public void saveLot(Lot lot) {
        lotDao.saveLot(lot);
    }

    public Queue<Lot> getAll() {
        return lotDao.getAllLots();
    }
}
