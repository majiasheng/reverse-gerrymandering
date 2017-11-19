package model;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import persistence.PasswordUtil;

@Entity
public class User implements Serializable {
    
    @Id
    private int id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private byte[] salt;
    private String email;
    private boolean isAdmin;

    public User(int id, String firstName, String lastName, String username, String password, byte[] salt, String email, boolean isAdmin) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.salt = salt;
        this.email = email;
        this.isAdmin = isAdmin;
    }

    public User () {
        salt = new byte[PasswordUtil.SALT64];
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
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

    public byte[] getSalt() {
        return salt;
    }

    public void setSalt(byte[] salt) {
        this.salt = salt;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(boolean isAdmin) {
        this.isAdmin = isAdmin;
    }
}
