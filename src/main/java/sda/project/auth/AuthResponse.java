package sda.project.auth;

public class AuthResponse {
    /**
     * A String contains generated token
     */
    private String token;

    /**
     * A Method to generate Response of authentication
     */
    public AuthResponse(String token) {
        this.token = token;
    }

    /**
     * A method to get Token
     * @return token
     */
    public String getToken() {
        return token;
    }


    /**
     * A method to set Token
     * @return token
     */
    public void setToken(String token) {
        this.token = token;
    }
}
