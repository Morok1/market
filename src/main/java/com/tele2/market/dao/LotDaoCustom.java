package com.tele2.market.dao;

import com.tele2.market.model.Lot;
import org.springframework.stereotype.Component;

import java.util.ArrayDeque;
import java.util.LinkedList;
import java.util.Queue;
@Component
public class LotDaoCustom implements LotDao {
    static Queue<Lot> store =  new LinkedList<>();

    @Override
    public void saveLot(Lot lot) {
        store.add(lot);
    }

    @Override
    public Queue<Lot> getAllLots() {
        return store;
    }
}
