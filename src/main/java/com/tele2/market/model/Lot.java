package com.tele2.market.model;

import lombok.Data;

@Data
public class Lot {
    private Long id;
    private Long sellerId;
    private Long buyerId;
    private Type type;
}
