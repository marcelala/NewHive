package sda.project.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/** This is a Exception class which throws Exception when the User is unAuthorized
 * @since : 2021-05-06
 */
@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class UnAuthorizedException extends RuntimeException{
}
