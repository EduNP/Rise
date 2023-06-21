package com.group.rise.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
public class Event {
  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  @Temporal(TemporalType.TIMESTAMP)
  private Date start;
  @Temporal(TemporalType.TIMESTAMP)
  private Date end;
  private String title;
  private String theme;
  private String description;
  private String attendanceCode;
  private Integer enableAttendanceCode;
  @Temporal(TemporalType.TIMESTAMP)
  private Date codeExpirationDate;
  @Column(name = "usuario", nullable = false)
  private Usuario user;

//  @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, orphanRemoval = true)
 // private List<Filesinfos> fileInfo = new ArrayList<Filesinfos>();


  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((id == null) ? 0 : id.hashCode());
    result = prime * result + ((enableAttendanceCode == null) ? 0 : enableAttendanceCode.hashCode());
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
    Event other = (Event) obj;
    if (id == null) {
      if (other.id != null)
        return false;
    } else if (!id.equals(other.id))
      return false;
    if (enableAttendanceCode == null) {
      if (other.enableAttendanceCode != null)
        return false;
    } else if (!enableAttendanceCode.equals(other.enableAttendanceCode))
      return false;
    return true;
  }

  public Date getCodeExpirationDate() {
    return codeExpirationDate;
  }

  public void setCodeExpirationDate(Date codeExpirationDate) {
    this.codeExpirationDate = codeExpirationDate;
  }

  public Integer getEnableAttendanceCode() {
    return enableAttendanceCode;
  }

  public void setEnableAttendanceCode(Integer enableAttendanceCode) {
    this.enableAttendanceCode = enableAttendanceCode;
  }

  public String getAttendanceCode() {
    return attendanceCode;
  }

  public void setAttendanceCode(String attendanceCode) {
    this.attendanceCode = attendanceCode;
  }


  public Date getStart() {
    return start;
  }

  public void setStart(Date start) {
    this.start = start;
  }

  public Date getEnd() {
    return end;
  }

  public void setEnd(Date end) {
    this.end = end;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getTheme() {
    return theme;
  }

  public void setTheme(String theme) {
    this.theme = theme;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Usuario getUser() {
    return user;
  }

  public void setUser(Usuario user) {
    this.user = user;
  }


  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  
}
