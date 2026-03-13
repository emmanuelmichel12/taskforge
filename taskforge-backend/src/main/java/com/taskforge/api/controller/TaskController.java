package com.taskforge.api.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.service.annotation.GetExchange;

import com.taskforge.api.dto.CreateTaskRequest;
import com.taskforge.api.dto.TaskResponse;
import com.taskforge.model.Task;
import com.taskforge.model.User;
import com.taskforge.repository.TaskRepository;
import com.taskforge.repository.UserRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/task")
public class TaskController {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    public TaskController(TaskRepository taskRepository, UserRepository userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }

    @PostMapping("/new-task")
    public TaskResponse createTask(@Valid @RequestBody CreateTaskRequest request) {

        User owner = userRepository.findById(4L)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Owner not found"));

        Task task = new Task();
        task.setTitle(request.getTitle());
        task.setDueAt(request.getDueAt());
        task.setOwner(owner);

        Task saved = taskRepository.save(task);

        return new TaskResponse(

                saved.getId(),
                saved.getTitle(),
                saved.getCompleted(),
                saved.getCreatedAt(),
                saved.getUpdatedAt(),
                saved.getDueAt()

        );
    }

    @GetMapping
    public List<TaskResponse> getTasks(@RequestParam long ownerId) {
        List<Task> tasks = taskRepository.findByownerId(ownerId);

        return tasks.stream().map(task -> new TaskResponse(
                task.getId(),
                task.getTitle(),
                task.getCompleted(),
                task.getCreatedAt(),
                task.getUpdatedAt(),
                task.getDueAt())).toList();
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTask(@PathVariable long id) {

        if (!taskRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found");
        }

        taskRepository.deleteById(id);

    }

    @PutMapping("/update/{id}")
    public TaskResponse updateTasks(@PathVariable long id, CreateTaskRequest request) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found"));

        task.setTitle(request.getTitle());
        task.setDueAt(request.getDueAt());
        Task saved = taskRepository.save(task);

        return new TaskResponse(

                saved.getId(),
                saved.getTitle(),
                saved.getCompleted(),
                saved.getCreatedAt(),
                saved.getUpdatedAt(),
                saved.getDueAt()

        );
    }

}
