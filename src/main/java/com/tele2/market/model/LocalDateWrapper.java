package com.tele2.market.model;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import lombok.Data;

import java.time.LocalDate;

@Data
public class LocalDateWrapper {
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate localDate;
}
