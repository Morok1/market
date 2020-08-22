package com.tele2.market.controllers;

import com.tele2.market.service.LauncherService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class LauncherController {
    private final LauncherService service;


    @GetMapping("/launch")
    public void launсh(){
        service.launch();
    }
}
