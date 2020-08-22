package com.tele2.market.dao;

import com.tele2.market.model.Lot;

import java.util.Queue;

public interface LotDao {
    void saveLot(Lot lot);
    Queue<Lot> getAllLots();
}
