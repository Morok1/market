package com.tele2.market.model;

import lombok.Data;


@Data
public class Settings {
    private boolean sms;
    private boolean gigabyte;
    private boolean minute;
    private boolean defaultCost;

    private Product  product;
    private Long defaultCosts;
    private Integer startApplySettingsDay;
    private Double cost;
}
