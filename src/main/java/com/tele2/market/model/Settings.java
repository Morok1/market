package com.tele2.market.model;

import lombok.Data;

@Data
public class Settings {
    private boolean sms;
    private boolean gigabyte;
    private boolean minutes;
    private boolean defaultCost;
    private Double cost;
}
