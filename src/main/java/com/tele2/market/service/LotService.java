package com.tele2.market.service;

import com.tele2.market.dao.LotDao;
import com.tele2.market.model.Lot;
import com.tele2.market.model.Product;
import com.tele2.market.model.Settings;
import com.tele2.market.model.Type;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Queue;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class LotService {
    @Autowired
    private final LotDao lotDao;

    public void saveLot(Lot lot) {
        lotDao.addLot(lot);
    }

    public Queue<Lot> getAll() {
        return lotDao.getAllLots();
    }

    public void createLotBySettings(Settings settings, String buyerId, String type) {
        lotDao.addLot(buildLot(buyerId, type, settings.getProduct()));
    }

    private Lot buildLot(String buyerId, String type, Product product) {
        return Lot.builder()
                .buyerId(buyerId)
                .type(Type.valueOf(type))
                .product(product).build();
    }

}
