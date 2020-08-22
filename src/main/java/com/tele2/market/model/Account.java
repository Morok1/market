package com.tele2.market.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Account {
    private String id;
    private String name;
    private Role role;
    private Settings settings;
}
