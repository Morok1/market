package com.tele2.market.model;

import lombok.Data;

@Data
public class Settings {
    private boolean sms;
    private boolean gigabyte;
    private boolean minute;
    private boolean defaultCost;

    private Long gigabytes;
    private Long minutes;
    private Long defaultCosts;

    private Double cost;
}
