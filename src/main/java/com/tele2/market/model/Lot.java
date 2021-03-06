package com.tele2.market.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Lot {
    private Long id;
    private String sellerId;
    private String buyerId;
    private Type type;

    private Product product;
}
