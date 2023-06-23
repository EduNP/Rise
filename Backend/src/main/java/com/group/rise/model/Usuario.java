package com.group.rise.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ConstraintMode;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.UniqueConstraint;

@Entity
public class Usuario implements UserDetails {
  private static final Long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  @Column(unique = true)
  private String name;
  private String email;
  private String password;
  private Long score;
  private int admin;

  public int getAdmin() {
    return admin;
  }

  public void setAdmin(int admin) {
    this.admin = admin;
  }

//  @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
//  private List<Filesinfos> fileInfo = new ArrayList<Filesinfos>();

  @OneToMany(fetch = FetchType.EAGER)
  @JoinTable(
      name = "usuarios_role",
      uniqueConstraints = @UniqueConstraint(
          columnNames = {"usuario_id", "role_id"}, 
          name = "unique_role_user"
      ),
      joinColumns = @JoinColumn(
          name = "usuario_id",
          referencedColumnName = "id",
          table = "usuario",
          unique = false,
          foreignKey = @ForeignKey(
              name = "usuario_fk",
              value = ConstraintMode.CONSTRAINT
          )
      ),
      inverseJoinColumns = @JoinColumn(
          name = "role_id",
          referencedColumnName = "id",
          table = "role",
          unique = false,
          updatable = false,
          foreignKey = @ForeignKey(
              name = "role_fk",
              value = ConstraintMode.CONSTRAINT
          )
      )
  )
  private List<Role> roles;

  @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<PhoneNumber> phoneNumbers = new ArrayList<PhoneNumber>();


  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((id == null) ? 0 : id.hashCode());
    result = prime * result + ((score == null) ? 0 : score.hashCode());
    return result;
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    Usuario other = (Usuario) obj;
    if (id == null) {
      if (other.id != null)
        return false;
    } else if (!id.equals(other.id))
      return false;
    if (score == null) {
      if (other.score != null)
        return false;
    } else if (!score.equals(other.score))
      return false;
    return true;
  }

//  public List<Filesinfos> getFileInfo() {
//    return fileInfo;
//  }

// public void setFileInfo(List<Filesinfos> fileInfo) {
// this.fileInfo = fileInfo;
// }


  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  @Override
  public String getPassword() {
    return password;
  }

  public Long getScore() {
    return score;
  }

  public void setScore(Long score) {
    this.score = score;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public List<PhoneNumber> getPhoneNumbers() {
    return phoneNumbers;
  }

  public void setPhoneNumbers(List<PhoneNumber> phoneNumbers) {
    this.phoneNumbers = phoneNumbers;
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return this.roles;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }

  @Override
  public String getUsername() {
    return this.email;
  }
}
