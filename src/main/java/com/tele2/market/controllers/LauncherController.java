package com.tele2.market.controllers;

import com.tele2.market.service.LauncherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LauncherController {
    private final LauncherService service;
    @Autowired
    public LauncherController(LauncherService service) {
        this.service = service;
    }

    @GetMapping("/launch")
    public void launсh(){
        service.launch();
    }
}
