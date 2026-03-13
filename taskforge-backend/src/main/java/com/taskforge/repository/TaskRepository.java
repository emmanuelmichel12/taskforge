package com.taskforge.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.taskforge.model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByownerId(long ownerId);

}
