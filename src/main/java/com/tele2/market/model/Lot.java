package com.tele2.market.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Lot {
    private Long id;
    private Long sellerId;
    private Long buyerId;
    private Type type;
}
