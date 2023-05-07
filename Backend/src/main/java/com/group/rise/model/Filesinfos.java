package com.group.rise.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore; 

@Entity
public class Filesinfos{
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    public Long getId() {
      return id;
    }

    public void setId(Long id) {
      this.id = id;
    }

    @JsonIgnore
    @org.hibernate.annotations.ForeignKey(name = "event_id")
    @ManyToOne(optional = false)    
    private Event event;

    @JsonIgnore
    @org.hibernate.annotations.ForeignKey(name = "usuario_id")
    @ManyToOne(optional = false)    
    private Usuario usuario;

    public Usuario getUser() {
      return usuario;
    }

    public void setUser(Usuario usuario) {
      this.usuario = usuario;
    }

    public Event getEvent() {
      return event;
    }

    public void setEvent(Event event) {
      this.event = event;
    }
}
