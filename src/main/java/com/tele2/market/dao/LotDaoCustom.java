package com.tele2.market.dao;

import com.tele2.market.model.Lot;
import com.tele2.market.model.Type;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.Queue;

import static com.tele2.market.utils.Util.createId;

@Component
public class LotDaoCustom implements LotDao {
    static Queue<Lot> store =  new LinkedList<>();

    @Override
    public void addLot(Lot lot) {
        store.add(lot);
    }

    @Override
    public Queue<Lot> getAllLots() {
        return store;
    }

    public static final int LOT_NUMBER = 20;

    static {
        for (int i = 0; i < LOT_NUMBER; i++) {
            initStore(i);
        }
    }

    private static void initStore(int i) {
        store.add(Lot.builder().type(Type.INTERNET)
                .buyerId(createId())
                .sellerId(createId()).id(Long.valueOf(i))
                .build());
    }
}
