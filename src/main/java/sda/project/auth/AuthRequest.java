package sda.project.auth;

/** This is a model class which represent
 * Auth Entity and it contains necessary
 * fields to create User Authentication
 */
public class AuthRequest {
    /**
     * A String which represents emailId of User
     */
    private String email;

    /**
     * A String which represents password of User
     */
    private String password;


    public AuthRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    /** A method to get the Email of User
     *
     * @return String which contains email
     */
    public String getEmail() {
        return email;
    }

    /**
     * A method to set the Email of User
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /** A method to get the Password of User
     *
     * @return String which contains password
     */
    public String getPassword() {
        return password;
    }

    /**
     * A method to set the Password of User
     */
    public void setPassword(String password) {
        this.password = password;
    }
}
