package vn.aims.BookSeller.Entity;


import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;
import java.util.Collection;

@Entity
@Data
@Table(name = "\"user\"")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Dùng IDENTITY cho PostgreSQL
    @Column(name = "user_id", nullable = false)
    private Integer id;
    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;

    @ManyToMany(fetch = FetchType.EAGER)
     @JoinTable(
             name = "users_roles",
             joinColumns=@JoinColumn(name = "user_id"),
             inverseJoinColumns=@JoinColumn(name = "role_id")
     )

    Collection<Role> roles;

    private String email;
    private String phone;
    private Boolean status;
    private Timestamp created_at;

    public Integer getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Collection<Role> getRoles() {
        return roles;
    }

    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }
}
