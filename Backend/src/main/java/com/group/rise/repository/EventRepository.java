package com.group.rise.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.group.rise.model.Event;

@Repository
public interface EventRepository extends CrudRepository<Event, Long>{

}
