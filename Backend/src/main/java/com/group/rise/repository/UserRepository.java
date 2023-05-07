package com.group.rise.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.group.rise.model.Usuario;

@Repository
public interface UserRepository extends CrudRepository<Usuario, Long> {
	@Query("select u from Usuario u where u.email = ?1")
	Usuario findUserByLogin(String login);

}
