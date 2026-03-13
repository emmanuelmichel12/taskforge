package com.taskforge.api.dto;

import java.time.LocalDateTime;

import jakarta.validation.constraints.NotBlank;

public class CreateTaskRequest {

    @NotBlank
    private String title;

    private LocalDateTime dueAt;

    public CreateTaskRequest() {

    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDateTime getDueAt() {
        return this.dueAt;
    }

    public void setDueAt(LocalDateTime dueAt) {
        this.dueAt = dueAt;
    }

}
