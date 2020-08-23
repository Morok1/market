package com.tele2.market.service;

import com.tele2.market.dao.LotDao;
import com.tele2.market.model.Lot;
import com.tele2.market.model.Product;
import com.tele2.market.model.Settings;
import com.tele2.market.model.Type;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Queue;

@Service
public class LotService {
    private final LotDao lotDao;

    @Autowired
    public LotService(LotDao lotDao) {
        this.lotDao = lotDao;
    }

    public void saveLot(Lot lot) {
        lotDao.addLot(lot);
    }

    public Queue<Lot> getAll() {
        return lotDao.getAllLots();
    }

    public void createLotBySettings(Settings settings, String buyerId) {
        if(settings.isGigabyte()){
            lotDao.addLot(buildLot(buyerId, Type.INTERNET.name(), settings.getProduct()));
        }
        if(settings.isMinute()){
            lotDao.addLot(buildLot(buyerId, Type.MINUTES.name(), settings.getProduct()));
        }
        if(settings.isSms()){
            lotDao.addLot(buildLot(buyerId,  Type.MINUTES.name(), settings.getProduct()));
        }
        return;
    }

    private Lot buildLot(String buyerId, String type, Product product) {
        return Lot.builder()
                .buyerId(buyerId)
                .type(Type.valueOf(type))
                .product(product).build();
    }

}
