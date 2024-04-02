package com.von.api.schedule;

import jakarta.persistence.*;
import lombok.*;


@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = "id")

@Builder
@AllArgsConstructor

@Entity(name = "schedule")
public class Schedule {

    @Id
    @Column(name="id",nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
}
