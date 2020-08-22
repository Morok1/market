package com.tele2.market.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Product {
    private Long smss;
    private Long gigabytes;
    private Long minutes;

}