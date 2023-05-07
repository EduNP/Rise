package com.group.rise.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group.rise.model.Usuario;
import com.group.rise.repository.UserRepository;

@RestController
@RequestMapping(value = "/usuario")
public class IndexController {

  @Autowired
  private UserRepository userRepository;

  /* Serviço RESTful */

  @GetMapping(value = "/{id}", produces = "application/json")
  public ResponseEntity get(@PathVariable(value = "id") Long id) {

    // acesso da bd pra pegar users
    Optional<Usuario> user = userRepository.findById(id);

    return new ResponseEntity(user.get(), HttpStatus.OK);
  }

  @GetMapping(value = "/", produces = "application/json")
  public ResponseEntity getAll() {
    List<Usuario> list = (List<Usuario>) userRepository.findAll();

    return new ResponseEntity<>(list, HttpStatus.OK);
  }

  @PostMapping(value = "/", produces = "application/json")
  public ResponseEntity<Usuario> cadastrar(@RequestBody Usuario user) {

    for (int pos = 0; pos < user.getPhoneNumbers().size(); pos++) {
      user.getPhoneNumbers().get(pos).setUsuario(user);
    }

    user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));

    Usuario userSalvo = userRepository.save(user);

    return new ResponseEntity<>(userSalvo, HttpStatus.OK);
  }

  @PutMapping(value = "/", produces = "application/json")
  public ResponseEntity<Usuario> atualizar(@RequestBody Usuario user) {
    for (int pos = 0; pos < user.getPhoneNumbers().size(); pos++) {
      user.getPhoneNumbers().get(pos).setUsuario(user);
    }

    Usuario userSalvo = userRepository.save(user);

    return new ResponseEntity<>(userSalvo, HttpStatus.OK);
  }

  @DeleteMapping(value = "/{id}", produces = "application/json")
  public ResponseEntity<Usuario> deletar(@PathVariable("id") Long id) {
    userRepository.deleteById(id);

    return new ResponseEntity("ok", HttpStatus.OK);
  }
}