package com.group.rise.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group.rise.model.Event;

import com.group.rise.repository.EventRepository;

@RestController
@RequestMapping(value = "/events")
public class EventController {
    @Autowired
    private EventRepository eventRepository;

    @GetMapping(value = "/", produces = "application/json")
    public ResponseEntity getEvents() {
        List<Event> events = (List<Event>) eventRepository.findAll();
        
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity getEventById(@PathVariable(value = "id") Long id) {
        Optional<Event> event = eventRepository.findById(id);
        
        return new ResponseEntity(event.get(), HttpStatus.OK);
    }

    @PostMapping(value = "/", produces = "application/json")
    public ResponseEntity createEvent(@RequestBody Event event) {
        Event savedEvent = eventRepository.save(event);
        
        return new ResponseEntity<>(savedEvent, HttpStatus.OK);
    }

    @PutMapping(value = "/", produces = "application/json")
    public ResponseEntity<Event> updateEvent(@RequestBody Event event) {
        Event savedEvent = eventRepository.save(event);
        
        return new ResponseEntity<>(savedEvent, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity deleteEvent(Long id) {
        eventRepository.deleteById(id);
        
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
